"use client"
import { useState} from 'react'
import useEnvironment from '@/lib/useEnvironment'
import useTime from '@/lib/useTime'
import { useRouter } from 'next/navigation'
import { useAuth } from './AuthProvider'
import axiosInstance from '@/lib/axios'

type BlastProps = {
    placeholder: string;
    redirect?: string;
}
const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BlastForm = (props: BlastProps) => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const url = 'https://nlb.chainleaflabs.com/chainleaflabs-usersubscriptions/usersubscriptions/chainleaflabs/subscribeforupdates'
    const envData = useEnvironment()
    const userTime = useTime()
    const router = useRouter()
    const ctx = useAuth()

    const send = async () => {
        if (!email || !emailRegexp.test(email)) {
            console.log('Invalid email:', email)
            setError('Invalid email!')
            return
        }
        console.log('sending email to ' + email)
        setError('Sending email...')
         const { data } = await axiosInstance.post('/chainleaflabs-usersubscriptions/usersubscriptions/chainleaflabs/subscribeforupdates', JSON.stringify({
            "user_subscription_details": {
                email: email,
                origin: 'chainleaf welcome banner email subscriber',
                envData,
                userTime,
            }
        }))

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         "user_subscription_details": {
        //             email: email,
        //             origin: 'chainleaf welcome banner email subscriber',
        //             envData,
        //             userTime,
        //         }
        //     }),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         if('UserSubscription' in data){
        //             router.push(`/join/subscribed?email=${email}`)
        //         }
        //     })
        //     .catch((error) => console.error('Error:', error));
    }



    return (
        <>
            <div className="border border-primary-5 text-primary-5 mb-3 rounded h-min overflow-hidden flex items-center max-w-[32rem] mx-6 md:mx-0">
                <input placeholder={error || props.placeholder} type="text" value={error || email} className="p-2 md:p-4 flex-1 bg-transparent placeholder-primary-5" onChange={(e) => {setError(''); setEmail(e.target.value)}} />
                <button onClick={send} className="p-2 md:p-4 hover:bg-primary-5 hover:text-white dark:bg-transparent dark:text-primary-5 dark:hover:text-primary-1 dark:hover:bg-primary-4 duration-200 font-bold text-xl">-&gt;</button>
            </div>
            {/* {error && <small>{error}</small>} */}
        </>
    )
}

export default BlastForm