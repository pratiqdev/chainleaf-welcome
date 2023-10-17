import Link from 'next/link'
import Blast from '@/components/Blast' 
import Balancer from 'react-wrap-balancer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center">
        <div className="h-20" />

        <div className="bg-slate-100 dark:bg-slate-900 p-4 md:p-8 min-w-[20rem] rounded-lg text-black dark:text-white mx-auto mt-4 w-min shadow-lg flex flex-col items-center">
            <h2 className="text-3xl text-primary-5 font-bold text-center">Where are we!?</h2>
            <b className="text-md leading-6 my-2 text-center font-bold">404 - Page Not Found</b>
            <Balancer className="text-md leading-6 my-2 text-center">The page you are looking for may not be available at this time, as the application is under active development.</Balancer>

            <div className="flex flex-col gap-4 px-6 mt-2 md:px-0 w-full">
                <Link href="/" className="p-2 text-center bg-indigo-100 text-primary-5 dark:text-white dark:bg-primary-2 w-full md:text-xl font-semibold rounded hover:bg-primary-5 hover:text-white dark:hover:bg-primary-3 duration-200">Go Home!</Link>
            </div>

            <h2 className="text-xl text-primary-5 font-bold mb-2 mt-6 text-center">Stay Updated</h2>
            <Balancer className="text-md leading-6 my-2 text-center">Subscribe to our email list or follow us to stay up to date on the latest features.</Balancer>
            {/* <p className="text-md leading-6 my-4 text-center mt-12 px-12">Or Join our Email list to get updated when we go live!</p> */}
            <Blast placeholder="Subscribe for Updates" />
            
        </div>
    </div>
  )
}