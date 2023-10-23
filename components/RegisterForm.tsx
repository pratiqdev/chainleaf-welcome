"use client"
import Tails from "./Tails"
import Link from "next/link"
import { useState } from "react"
import axiosInstance from "@/lib/axios"
import { AuthData, useAuth } from "./AuthProvider"
import { useRouter } from "next/navigation"
import FLAGS from "@/FLAGS"

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export type RegisterApiData = {
    user_email: string;
    password: string;
    role_id: number;
    subscribed: boolean;
}

/**
 * @example
 * type UserRoles = {
 *   1: 'Lab',
 *   2: 'Grower',
 *   6: 'Consumer'
 * }
 * <RegisterForm type={ 1 } />
 */
export type UserRoles = {
    /** Lab */
    'Lab': 1,
    /** Grower */
    'Grower': 2,
    /** Consumer */
    'Consumer': 6
}

const userRoles = {
    /** Lab */
    'Lab': 1,
    /** Grower */
    'Grower': 2,
    /** Consumer */
    'Consumer': 6
}

const RegisterForm = ({ type, callback }: { type:keyof UserRoles, callback:string }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [subbed, setSubbed] = useState(true)
    const [error, setError] = useState('')
    const { auth, setAuth } = useAuth()
    const router = useRouter()

    const register = async () => {
        if(!FLAGS.dev && (!email.length || !password.length)){
            console.log('No username or password...')
            setError('Please enter a username and password.')
            return
        }else{
            setError('')
        }

        try{
            const expectedApiData:RegisterApiData = {
                user_email: email,
                password: password,
                role_id: userRoles[type],
                subscribed: subbed,
            }

            if(FLAGS.dev){
                console.log('DEV LOGIN')
                setError('')
                setAuth((x:AuthData) => ({
                    ...x,
                    loginData: {
                        user_email: email || 'DevUser95@email.com',
                        password: password || '<no-password>',
                        role_id: userRoles[type],
                        subscribed: subbed,
                    }
                }))        
                callback && router.push(callback)
                return
            }
            // http://nlb.chainleaflabs.com/chainleaflabs-usersubscriptions/userregistration/chainleaflabs/registeruser
            const { data, status } = await axiosInstance.post('/chainleaflabs-usersubscriptions/userregistration/chainleaflabs/registeruser', expectedApiData)
            
            if(status === 200){
                console.log('login data:', data)
                setError('')
                // setAuth({
                //     email,
                //     user_id: 1,
                //     role_id: userRoles[type]
                // })
                setAuth((x:AuthData) => ({
                    ...x,
                    userId: data.UserEnrollmentRegistrations?.user_subscription_id,
                    loginData: {
                        user_email: email,
                        password: password,
                        role_id: userRoles[type],
                        subscribed: subbed,
                    }
                }))    
                callback && router.push(callback)
            }else{
                console.log('login failed?', {data, status})
                setError('There was an error with the request. Please try again.')
            }

        }catch(err){
            console.log('login err:', err)
            setError('There was an error with the login service, please try again or contact support@chainleaflabs-group.com')
            return
        }
    }

    return (
        <div className="p-6 w-full">
            {error && <p className="bg-red-300 text-red-800 p-2 rounded w-full font-semibold text-xs">{error}</p>}
            <Tails.label>
                Email
                <Tails.input onChange={(e:any) => setEmail(e?.target?.value ?? '')} placeholder="Email" />
            </Tails.label>

            <Tails.label>
                Password
                <Tails.input onChange={(e:any) => setPassword(e?.target?.value ?? '')} placeholder="Password" type="password" />
            </Tails.label>

            <div className="flex items-center gap-4">
                <Tails.checkbox checked={subbed} onChange={(e:any) => setSubbed(e?.target?.checked ? true : false)} />
                <p className="text-gray-700 dark:text-gray-300 text-sm">Subscribe to our Mailing List</p>
            </div>
            
            <div className="flex flex-col justify-center text-center gap-4 text-sm">
                <Tails.button onClick={register} className="mt-4 w-full">Register</Tails.button>
                <Link href="https://dev.chainleaflabs.com/auth/signin" className="text-primary-6 dark:text-primary-3 font-semibold hoverline">Already have an account?</Link>
                <Link href="/join" className="text-primary-6 dark:text-primary-3 font-semibold hoverline">Switch account types</Link>
            </div>
        </div>
    )
}

export default RegisterForm