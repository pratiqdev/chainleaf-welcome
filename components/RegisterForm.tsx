"use client"
import Tails from "./Tails"
import Link from "next/link"
import { useState } from "react"
import axiosInstance from "@/lib/axios"
import { useAuth } from "./AuthProvider"
import { useRouter } from "next/navigation"

const RegisterForm = ({ type, callback }: { type:string, callback:string }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { auth, setAuth } = useAuth()
    const router = useRouter()

    const register = async () => {
        if(!email.length || !password.length){
            console.log('No username or password...')
            setError('Please enter a username and password.')
            return
        }else{
            setError('')
        }

        try{
            const expectedApiData = {
                UserName: email,
                UserPassword: password,
                Role: type,
            }
            
            const { data } = await axiosInstance.post('/chainleaflabs-login-api-service/login/chainleaflabs/login', expectedApiData)
            
            console.log('login data:', data)
            setError('')
        }catch(err){
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            setAuth({
                email,
                user_id: 1
            })        
            callback && router.push(callback)
            return
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            console.log('login err:', err)
            setError('There was an error with the login service')
        }
    }

    return (
        <div className="p-6 w-full">
            {error && <p className="bg-red-300 text-red-800 p-2 rounded w-full font-semibold text-sm">{error}</p>}
            <pre>{JSON.stringify(auth)}</pre>
            <Tails.label>
                Email
                <Tails.input onChange={(e:any) => setEmail(e?.target?.value ?? '')} placeholder="Email" />
            </Tails.label>

            <Tails.label>
                Password
                <Tails.input onChange={(e:any) => setPassword(e?.target?.value ?? '')} placeholder="Password" type="password" />
            </Tails.label>
            <div className="flex flex-col justify-center text-center gap-2">
                <Tails.button onClick={register} className="mt-4 w-full">Register</Tails.button>
                <Link href="https://dev.chainleaflabs.com/auth/signin" className="text-primary-6 dark:text-primary-3 font-semibold hoverline">Already have an account?</Link>
                <Link href="/join" className="text-primary-6 dark:text-primary-3 font-semibold hoverline">Switch account types</Link>
            </div>
        </div>
    )
}

export default RegisterForm