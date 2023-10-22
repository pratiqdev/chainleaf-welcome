import links from "@/app/links"
import Link from "next/link"
import Tails from "@/components/Tails"

const  Page = () => {
    return (
        <div className="bg-slate-100 dark:bg-slate-900 p-4 md:p-8 min-w-[20rem] md:min-w-[30rem] max-w-[90vw] rounded-lg text-black dark:text-white mx-auto mt-4 w-min shadow-lg">
            <h2 className="text-2xl text-primary-5 font-bold mb-6 text-center">Demo App Disclaimer</h2>

            <p className="leading-6 my-4 text-center text-sm">
                The demo application is currently in a prototype/demo/research stage. It is not secure, and we do not guarantee the privacy or security of your data. Please avoid using or sharing sensitive, confidential, or personal information in this application.
            </p>
            <div className="flex flex-col gap-4 px-6 mt-2 md:px-0 w-full">
                <Link href={links.demo.login} className="p-2 text-center bg-indigo-100 text-primary-5 dark:text-white dark:bg-primary-2 w-full md:text-xl font-semibold rounded hover:bg-primary-5 hover:text-white dark:hover:bg-primary-3 duration-200">Continue to App</Link>
            </div>
            <p className="leading-6 my-4 text-center text-sm">
                The primary purpose of this version is to gather feedback, conduct research, or demonstrate functionality. We appreciate your participation and encourage you to report any security concerns or issues you encounter while using the application.
            </p>

            <p className="leading-6 my-4 text-center text-sm">
                While we do not have formal terms of use or a privacy policy at this stage, please be assured that we respect your privacy and are committed to protecting your data to the best of our abilities.
            </p>

            <p className="leading-6 my-4 text-center text-sm">
                For more information, please feel free to <Tails.link href={links.support}>contact support</Tails.link> with any questions or concerns.
            </p>

            <div className="flex flex-col gap-4 px-6 mt-2 md:px-0 w-full">
                <Link href={links.demo.login} className="p-2 text-center bg-indigo-100 text-primary-5 dark:text-white dark:bg-primary-2 w-full md:text-xl font-semibold rounded hover:bg-primary-5 hover:text-white dark:hover:bg-primary-3 duration-200">Continue to App</Link>
            </div>
            <div className="flex gap-6 justify-center px-6 mt-2 md:px-0 w-full text-sm">
                <Tails.link href={'/'} >Home</Tails.link>
                <Tails.link href={links.action.whySubscribe} >Subscribe</Tails.link>
                <Tails.link href={links.support} >Support</Tails.link>
                {/* <Tails.link href="https://www.linkedin.com/company/chainleaflabs/" >Support</Tails.link> */}
            </div>

        </div>
    )
}
export default Page