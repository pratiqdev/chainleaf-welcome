"use client"
import { useRouter } from "next/navigation"
import Blast from "@/components/Blast"
import Link from "next/link"
import Tails from "@/components/Tails"

// https://dev.chainleaflabs.com/auth/register

const Join = () => {
    const router = useRouter()

    return  (
        <div className="bg-slate-100 dark:bg-slate-900 p-4 md:p-8 min-w-[20rem] rounded-lg text-black dark:text-white mx-auto mt-4 w-min shadow-lg flex flex-col items-center">
            <h2 className="text-2xl text-primary-5 font-bold mb-6 text-center">Under Development</h2>
            <p className="leading-6 my-4 text-center font-semibold">This feature or section is currently under development.</p>
            <p className="leading-6 my-4 text-center text-sm">If you are encountering an error or this section or feature should be avaiable to you - please contact support at <b>support@chainleaflabs-group.com</b></p>

            <Tails.button  onClick={() => router.back()}>Go Back</Tails.button> 
           
            <p className="text-md leading-6 my-4 text-center mt-12 px-12">Or Join our Email list to get updated when we go live!</p>
            <Blast placeholder="Subscribe for Updates" />
            
        </div>
    )
}

export default Join 

