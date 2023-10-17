"use client"
import { useState} from 'react'
import useEnvironment from '@/lib/useEnvironment'
import useTime from '@/lib/useTime'

type BlastProps = {
    placeholder: string;
    redirect?: string;
}

const BlastForm = (props: BlastProps) => {
    const [email, setEmail] = useState('')
    const url = 'https://nlb.chainleaflabs.com/chainleaflabs-usersubscriptions/usersubscriptions/chainleaflabs/subscribeforupdates'
    const envData = useEnvironment()
    const userTime = useTime()

    const send = () => {
        if (!email) {
            console.log('no email provided...')
            return
        }
        console.log('sending email to ' + email)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "user_subscription_details": {
                    email: email,
                    origin: 'chainleaf welcome banner email subscriber',
                    envData,
                    userTime,
                }
            }),
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch((error) => console.error('Error:', error));
    }



    return (
        <div className="border border-primary-5 text-primary-5 mb-3 rounded h-min overflow-hidden flex items-center max-w-[32rem] mx-6 md:mx-0">
            <input placeholder={props.placeholder} type="text" className="p-2 md:p-4 flex-1 bg-transparent placeholder-primary-5" onChange={(e) => setEmail(e.target.value)} />
            <button onClick={send} className="p-2 md:p-4 hover:bg-primary-5 hover:text-white dark:bg-transparent dark:text-primary-5 dark:hover:text-primary-1 dark:hover:bg-primary-4 duration-200 font-bold text-xl">-&gt;</button>
        </div>
    )
}

export default BlastForm