import Blast from "@/components/Blast"
import Link from "next/link"

// https://dev.chainleaflabs.com/auth/register

const Join = () => {


    return  (
        <div className="bg-slate-100 dark:bg-slate-900 p-4 md:p-8 min-w-[20rem] rounded-lg text-black dark:text-white mx-auto mt-4 w-min shadow-lg flex flex-col items-center">
            <h2 className="text-2xl text-primary-5 font-bold mb-6 text-center">Join Chainleaf Today</h2>
            <p className="text-md leading-6 my-4 text-center">Select a User Type to continue</p>
            <div className="flex flex-col gap-4 px-6 md:px-0 w-full">
                <Link href="/join/user" className="p-2 text-center bg-indigo-100 text-primary-5 dark:text-white dark:bg-primary-2 w-full md:text-xl font-semibold rounded hover:bg-primary-5 hover:text-white dark:hover:bg-primary-3 duration-200">Users</Link>
                <Link href="/join/grow" className="p-2 text-center bg-indigo-100 text-primary-5 dark:text-white dark:bg-primary-2 w-full md:text-xl font-semibold rounded hover:bg-primary-5 hover:text-white dark:hover:bg-primary-3 duration-200">Growers</Link>
                <Link href="/join/labs" className="p-2 text-center bg-indigo-100 text-primary-5 dark:text-white dark:bg-primary-2 w-full md:text-xl font-semibold rounded hover:bg-primary-5 hover:text-white dark:hover:bg-primary-3 duration-200">Laboratories</Link>
            </div>
            <p className="text-md leading-6 my-4 text-center mt-12 px-12">Or Join our Email list to get updated when we go live!</p>
            <Blast placeholder="Subscribe for Updates" />
            
        </div>
    )
       
}

export default Join 


{/* <div className="min-h-screen flex justify-center items-center">
            <div className="h-20" />

            <div className="bg-slate-800 p-8 min-w-[20rem] rounded-lg text-primary mx-auto mt-4 w-min shadow-lg flex flex-col items-center">
                <h2 className="text-2xl text-primary-2 font-bold mb-6 text-center">Join Chainleaf Today</h2>
                <p className="text-white text-md leading-6 my-4 text-center">Select a User Type to continue to the Chainleaf Demo Application</p>
                <div className="flex flex-col gap-4 w-full">
                    <Link href="https://dev.chainleaflabs.com/auth/register#user" className="p-2 text-center bg-primary-2 text-white w-full text-xl rounded hover:bg-primary-3">Users</Link>
                    <Link href="https://dev.chainleaflabs.com/auth/register#grow" className="p-2 text-center bg-primary-2 text-white w-full text-xl rounded hover:bg-primary-3">Growers</Link>
                    <Link href="https://dev.chainleaflabs.com/auth/register#labs" className="p-2 text-center bg-primary-2 text-white w-full text-xl rounded hover:bg-primary-3">Laboratories</Link>
                </div>
                <p className="text-white text-md leading-6 my-4 text-center mt-12">Or Join our Email list to get updated when we go live!</p>
                <Blast placeholder="Subscribe for Updates" />
                
            </div> */}