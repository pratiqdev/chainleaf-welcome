import Blast from "@/components/Blast"
import Link from "next/link"
import RegisterForm from "@/components/RegisterForm"

// https://dev.chainleaflabs.com/auth/register

const Join = () => {


    return (
        <div className="bg-slate-200 dark:bg-slate-800 text-black dark:text-white min-w-[24rem] rounded-lg mx-auto mt-4 w-min shadow-lg flex flex-col items-center">
            <h2 className="text-2xl text-primary-6 dark:text-primary-3 font-bold m-6 text-center">Grow with Chainleaf!</h2>
            <p className="text-md leading-6 m-4 text-center">Create a <b>Growers</b> account to connect with the chainleaf community, or <Link className="underline text-primary-6 dark:text-primary-3 font-semibold whitespace-nowrap" href="https://dev.chainleaflabs.com/auth/signin">sign-in</Link> if you already have an account.</p>

            <RegisterForm type="Grower" />
        </div>
    )
}

export default Join 