import links from "@/links"
import Link from "next/link"

const  Page = () => {
    return (
        <div className="bg-slate-100 dark:bg-slate-900 p-4 md:p-8 min-w-[20rem] rounded-lg text-black dark:text-white mx-auto mt-4 w-min shadow-lg">
            <h2 className="text-2xl text-primary-5 font-bold mb-6 text-center">Application Security Disclaimer</h2>

            <p className="leading-6 my-4 text-center text-sm">
                This application is currently in a prototype/demo/research stage. It is not secure, and we do not guarantee the privacy or security of your data. Please avoid using or sharing sensitive, confidential, or personal information in this application.
            </p>
            <p className="leading-6 my-4 text-center text-sm">
                The primary purpose of this version is to gather feedback, conduct research, or demonstrate functionality. We appreciate your participation and encourage you to report any security concerns or issues you encounter while using the application.
            </p>

            <p className="leading-6 my-4 text-center text-sm">
                While we do not have formal terms of use or a privacy policy at this stage, please be assured that we respect your privacy and are committed to protecting your data to the best of our abilities.
            </p>

            <p className="leading-6 my-4 text-center text-sm">
                For more information, please feel free to <Link href={links.support}>contact support</Link> with any questions or concerns.
            </p>

            <div className="flex flex-col gap-4 px-6 mt-2 md:px-0 w-full">
                <Link href="/" className="p-2 text-center bg-indigo-100 text-primary-5 dark:text-white dark:bg-primary-2 w-full md:text-xl font-semibold rounded hover:bg-primary-5 hover:text-white dark:hover:bg-primary-3 duration-200">Go Home!</Link>
            </div>

        </div>
    )
}
export default Page