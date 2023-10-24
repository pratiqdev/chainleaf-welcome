"use client"
import Tails from "@/components/Tails"
import { useState, useCallback } from "react"
import { useAuth, AuthData } from "@/components/AuthProvider"
import { useRouter } from "next/navigation"

const feedbackSuggestions = [
    'How would you rate the quality of our service?',
    'Did you encounter any technical issues?',
    'Do you have any suggestions for improvement?',
    'How would you rate the interface or design?',
    'Was the platform easy to use?',
]

const Page = () => {
    const {auth, setAuth} = useAuth()
    const [email, setEmail] = useState(() => auth?.loginData?.user_email ?? auth?.subData?.email)
    const [text, setText] = useState(() => auth?.onboardData?.profile?.displayName)
    const router = useRouter()


    const submit = useCallback(() => {
        setAuth((x:AuthData) => ({
            ...x,
            feedback: text,
            subData: {
                ...x.subData,
                email,
            },
        }))
        router.push('/join/feedback/thanks')
    }, [email, text, setAuth, router])

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-start">
            <div className="flex justify-between bg-slate-100 dark:bg-slate-900 text-black dark:text-white min-w-[24rem] w-min rounded-lg mx-auto mt-4 shadow-lg flex flex-col items-center p-4 border">
                <div>
                    <Tails.h3 className="text-left">We Value Your Feedback</Tails.h3>
                    <p className="text-left text-sm mb-4">Please share your thoughts or leave some feedback!</p>

                    <Tails.label>
                        Email Address
                        <Tails.input onChange={(e:any) => setEmail(e.target.value)} defaultValue={email} placeholder="Email" className="text-sm" />
                    </Tails.label>

                    <Tails.label>
                        Feedback
                        <Tails.textarea  onChange={(e:any) => setText(e.target.value)} defaultValue={text} placeholder="Tell us how we're doing!" className="min-h-[10rem] text-sm"/>
                    </Tails.label>
                    <Tails.button className="w-full mt-3" onClick={submit} >Submit Feedback</Tails.button>
                    {/* 
                    <pre>{JSON.stringify(auth)}</pre> */}
                </div>
            </div>
            
            <div className="flex justify-between bg-slate-100 dark:bg-slate-900 text-black dark:text-white min-w-[24rem] w-min rounded-lg mx-auto mt-4 shadow-lg flex flex-col items-center p-4">
                <div>
                    <Tails.h3 className="text-left">Not Sure What To Say?</Tails.h3>
                    <p className="text-left text-sm">Here are some common questions and feedback we would like to hear from you!</p>

                    <ul className="text-sm list-disc ml-3 mt-3 flex flex-col gap-1">
                        {feedbackSuggestions.map((sugg:string, idx:number) => <li className="hoverline" key={idx}>{sugg}</li>)}
                    </ul>
                </div>

            </div>
        </div>
    )

}

export default Page