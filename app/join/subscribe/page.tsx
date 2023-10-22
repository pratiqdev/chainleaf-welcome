"use client"
import Link from 'next/link'
import Blast from '@/components/Blast' 
import Balancer from 'react-wrap-balancer'
import { useSearchParams } from 'next/navigation'
import Tails from '@/components/Tails'
import links from '@/app/links'

export default function Subscribed() {
  const params = useSearchParams()

  return (

    <div className="min-h-screen flex justify-center items-center">
        <div className="h-20" />

        <div className="bg-slate-100 dark:bg-slate-900 p-4 md:p-8 w-full min-w-[80vw] md:min-w-[30rem] rounded-lg text-black dark:text-white mx-auto mt-4 w-min shadow-lg flex flex-col items-center">
            <h2 className="text-2xl text-primary-5 font-bold text-center">Join Our Community</h2>
            <Balancer className="text-md leading-6 my-2 text-center mt-2 mb-4">There are many ways to participate!</Balancer>
       

            <div className="flex flex-col items-between gap-4">

              <div className="flex items-center gap-2">
                <Link href="/join" passHref><Tails.button className="text-sm md:text-md lg:text-md md:py-1 md:px-2 whitespace-nowrap min-w-[10em]">Take a Tour</Tails.button></Link>
                <p className="text-sm">to get familiar with the application</p>
              </div>

              <div className="flex items-center gap-2">
                <Link href="/join" passHref><Tails.button className="text-sm md:text-md lg:text-md md:py-1 md:px-2 whitespace-nowrap min-w-[10em]">Sign up Now</Tails.button></Link>
                <p className="text-sm">to start using the app</p>
              </div>

              <div className="flex items-center gap-2">
                <Link href="https://docs.chainleaflabs.com" passHref><Tails.button className="text-sm md:text-md lg:text-md md:py-1 md:px-2 whitespace-nowrap min-w-[10em]">Read the Docs</Tails.button></Link>
                <p className="text-sm">to learn more about the platform</p>
              </div>

              <div className="flex items-center gap-2">
                <Link href={links?.demo?.disclaimer ?? '/join/disclaimer/demo'} passHref><Tails.button className="text-sm md:text-md lg:text-md md:py-1 md:px-2 whitespace-nowrap min-w-[10em]">View a Demo</Tails.button></Link>
                <p className="text-sm ">to see our latest features</p>
              </div>

            </div>

            {/* <Tails.br /> */}
            <h2 className="text-2xl text-primary-5 font-bold text-center mt-6">Join The Wait List</h2>
            <Balancer className="text-md leading-6 my-2 text-center mt-2 mb-4">Subscribe with your email to get updates about our latest features and integrations, and enter the beta rewards program!</Balancer>
            <Blast className="w-full" placeholder="Subscribe for Updates" />
            

            <h2 className="text-2xl text-primary-5 font-bold text-center mt-6">Follow Us</h2>
            <div className="flex gap-6 justify-center px-6 mt-2 md:px-0 w-full">
                <Tails.link href="https://www.linkedin.com/company/chainleaflabs/" >LinkedIn</Tails.link>
                <Tails.link href="https://www.linkedin.com/company/chainleaflabs/" >Instagram</Tails.link>
                {/* <Tails.link href="https://www.linkedin.com/company/chainleaflabs/" >Support</Tails.link> */}
            </div>



            {/* <p className="mt-8 text-xs leading-6 my-2 text-center">We truly appreciate your interest and support as it keeps us going, and we can&apos;t wait to show you what we&apos;ve been working on.</p> */}
            {/* <p className="text-xs leading-6 my-2 text-center">If you have any questions, please reach out to our team at <Link href="mailto:support@chainleaflabs-group.com" className="text-center text-primary-5 hoverline duration-200">support@chainleaflabs-group.com</Link></p> */}


            
        </div>
    </div>

  )
}

