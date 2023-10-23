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
            <h2 className="text-2xl text-primary-5 font-bold text-center">Thanks for Joining!</h2>
            <Balancer className="text-md leading-6 my-2 text-center">Hey <b>{params?.get('email') ?? '?'}</b>, thank you for joining our waitlist for Chainleaf Labs!</Balancer>
            

            <div className="flex gap-6 justify-center px-6 mt-2 md:px-0 w-full">
                <Link href="/" className="text-center hoverline duration-200">Go Home</Link>
                <Link href="/join/disclaimer/demo" className="text-center text-primary-5 underline duration-200">Register Account</Link>
                <Link href={links.docs.home} className="text-center text-primary-5 underline duration-200">Read the Docs</Link>
                <Link href={links.docs.blog} className="text-center text-primary-5 underline duration-200">Check out Blog</Link>
            </div>

            <p className="text-xs leading-6 my-2 text-center">We truly appreciate your interest and support as it keeps us going, and we can&apos;t wait to show you what we&apos;ve been working on.</p>
            <p className="text-xs leading-6 my-2 text-center">If you have any questions, please reach out to our team at <Link href="mailto:support@chainleaflabs-group.com" className="text-center text-primary-5 hoverline duration-200">support@chainleaflabs-group.com</Link></p>

            <h2 className="text-2xl text-primary-5 font-bold text-center mt-6">Follow Us</h2>
            <div className="flex gap-6 justify-center px-6 mt-2 md:px-0 w-full">
                <Link href="https://www.linkedin.com/company/chainleaflabs/" className="text-center text-primary-5 underline duration-200">LinkedIn</Link>
                <Link href="https://www.linkedin.com/company/chainleaflabs/" className="text-center text-primary-5 underline duration-200">Instagram</Link>
            </div>

            
        </div>
    </div>

  )
}

