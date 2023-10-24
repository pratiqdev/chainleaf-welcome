import Tails from "@/components/Tails"
import Link from "next/link"
import links from "@/links"

const feedbackSuggestions = [
    'How would you rate the quality of our service?',
    'Did you encounter any technical issues?',
    'Do you have any suggestions for improvement?',
    'How would you rate the interface or design?',
    'Was the platform easy to use?',
]

const Page = () => {



    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-start text-center">
            <div className="flex justify-between bg-slate-100 dark:bg-slate-900 text-black dark:text-white min-w-[24rem] w-min rounded-lg mx-auto mt-4 shadow-lg flex flex-col items-center p-4 border">
                <div>
                    <Tails.h3 className="mb-6">Thank You For The Feedback!</Tails.h3>
                    <p className="text-sm mb-4 font-semibold">We greatly appreciate you taking the time to share your thoughts with us. Your feedback helps us improve our platform, and we value your input.</p>
                    <div className="flex flex-col gap-4 px-6 mt-2 md:px-0 w-full">
                        <Link href="/" className="p-2 text-center bg-indigo-100 text-primary-5 dark:text-white dark:bg-primary-2 w-full md:text-xl font-semibold rounded hover:bg-primary-5 hover:text-white dark:hover:bg-primary-3 duration-200">Go Home!</Link>
                    </div>
                    <p className="text-sm my-4">If you&apos;ve provided contact information and indicated that you&apos;re open to further communication, a member of our team may reach out to you to discuss your feedback or address any concerns.</p>

                    <p className="text-sm mb-4">
                        Feel free to explore more of our{` `}
                        <Link className="text-primary-5 font-semibold underline" href={links.demo.disclaimer}>platform</Link>
                        , read the{` `}
                        <Link className="text-primary-5 font-semibold underline" href={links.docs.home}>documentation</Link>
                        {` `}or check out the{` `}
                        <Link className="text-primary-5 font-semibold underline" href={links.demo.disclaimer}>demo</Link>
                    </p>

                    <Tails.h4 className="mt-6">Follow Us on Social Media</Tails.h4>
                    <div className="flex justify-center gap-6 items-center w-full px-6 mt-2 text-md font-semibold underline text-primary-5 hover:text-primary-4">
                        <Link href="https://www.linkedin.com/company/chainleaflabs/" className="text-center hoverline duration-200 hover:text-primary-4">LinkedIn</Link>
                        <Link href="https://www.linkedin.com/company/chainleaflabs/" className="text-center hoverline duration-200 hover:text-primary-4">Instagram</Link>
                        <Link href="mainto:support@chainleaflabs-group.com" className="text-center hoverline duration-200 hover:text-primary-4">Support</Link>
                    </div>



                </div>
            </div>
   
        </div>
    )

}

export default Page