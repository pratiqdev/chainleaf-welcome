"use client"
import { useAuth } from "@/components/AuthProvider"
import Blast from "@/components/Blast"
import Link from "next/link"

// https://dev.chainleaflabs.com/auth/register


const RequiresAuth = () => (
    // <div className="bg-slate-200 dark:bg-slate-800 text-black dark:text-white min-w-[24rem] rounded-lg mx-auto mt-4 w-min shadow-lg flex flex-col items-center">
    //     <h2 className="text-2xl text-primary-6 dark:text-primary-3 font-semibold my-4">You must be Signed In</h2>
    //     <p className="p-4 text-center.">You must be signed in to your Chainleaf account. Please sign in or create an account to continue.</p>
    // </div>

    <div className="bg-slate-100 dark:bg-slate-900 text-black dark:text-white min-w-[24rem] rounded-lg mx-auto mt-4 w-min shadow-lg flex flex-col items-center">
        <h2 className="text-2xl text-primary-6 dark:text-primary-3 font-bold m-6 text-center">You must be Signed In</h2>
        <p className="text-md leading-6 m-4 text-center">You must be signed in to your Chainleaf account. Please sign in or create an account to continue.</p>

        <div className="flex flex-col gap-4 w-full p-6">
            <Link href="dev.chainleaflabs.com/auth/signin" className="p-2 text-center bg-primary-2 text-white w-full text-md rounded hover:bg-primary-3 font-semibold">Sign In</Link>
            <Link href="/join" className="p-2 text-center bg-primary-2 text-white w-full text-md rounded hover:bg-primary-3 font-semibold">Register an Account</Link>
        </div>
    </div>
)

const GettingStartedLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {

    const { auth } = useAuth()

    return  auth?.email ? children : <RequiresAuth />
       
}

export default GettingStartedLayout 
