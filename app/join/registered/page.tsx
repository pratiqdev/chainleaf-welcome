"use client"
import Link from 'next/link'
import Blast from '@/components/Blast' 
import Balancer from 'react-wrap-balancer'
import { useSearchParams } from 'next/navigation'
import links from '@/links'

export default function Subscribed() {
  const params = useSearchParams()

  return (

    <div className="min-h-screen flex justify-center items-center">
        <div className="h-20" />

        <div className="bg-slate-100 dark:bg-slate-900 p-4 md:p-8 w-full md:min-w-[30rem] rounded-lg text-black dark:text-white mx-auto mt-4 w-min shadow-lg flex flex-col items-center">
            <h2 className="text-2xl text-primary-5 font-bold text-center">This user is already registered!</h2>
            <Balancer className="text-md leading-6 my-2 text-center">The user <b>{params?.get('email') ?? '?'}</b> already has an account.</Balancer>
            <Balancer className="text-md leading-6 my-2 text-center"><Link href={links.demo.login} className="text-primary-5 underline font-semibold">sign in</Link> to chainleaf labs</Balancer>
            <Balancer className="text-md leading-6 my-2 text-center">or <Link href={'/join'} className="text-primary-5 underline font-semibold">login</Link> to another account.</Balancer>
 
            <h2 className="text-2xl text-primary-5 font-bold text-center mt-6">Follow Us</h2>
            <div className="flex gap-6 justify-center px-6 mt-2 md:px-0 w-full">
                <Link href="https://www.linkedin.com/company/chainleaflabs/" className="text-center text-primary-5 underline duration-200">LinkedIn</Link>
                <Link href="https://www.linkedin.com/company/chainleaflabs/" className="text-center text-primary-5 underline duration-200">Instagram</Link>
            </div>

            
        </div>
    </div>

  )
}

