import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion";
import Guide, { Step } from "@/components/guide";
import Balancer from "react-wrap-balancer";
import Tails from "@/components/Tails";
import links from "@/links";


const GrowerGettingStarted = () => {


    return (
        <div className="bg-slate-100 dark:bg-slate-900 text-black dark:text-white max-w-screen min-w-[20rem] md:min-w-[32rem] rounded-lg mx-auto mt-4 w-min shadow-lg flex flex-col items-center py-4">
            {/* <Guide steps={GrowerSteps} /> */}
            <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center w-full px-6">
                <h2 className="text-xl md:text-2xl font-semibold text-primary-5">Take a Tour of Chainleaf</h2>
                <Link className="px-2 py-1 md:px-4 py-2 text-lg bg-primary-5 text-white dark:bg-primary-2 hover:bg-primary-4 dark:hover:bg-primary-3 rounded-lg whitespace-nowrap font-semibold duration-200 w-full md:w-auto text-center" href="/join/grow/getting-started/steps">Let&apos;s Go -&gt;</Link>
            </div>
            <div className="w-full px-6 mt-4 hidden md:block">
                <div className="h-[1px] w-full bg-primary-5" />
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-primary-5 mt-8 ">Tell me More</h2>
            <Balancer className="text-md md:text-lg text-center"><Link href="/more/platform" className="underline text-primary-5 font-semibold hoverline hover:text-primary-4">Learn More</Link>&nbsp;about the chainleaf platform, how it works and the benefits of the <Link href="/more/beta" className="underline text-primary-5 font-semibold hover:text-primary-4">beta program</Link></Balancer>

            <h2 className="text-xl md:text-2xl font-semibold text-primary-5 mt-8">Talk to Us</h2>
            <Balancer className="text-md md:text-lg text-center">on social media or contact us directly with feedback, reviews or suggestions!</Balancer>

            <div className="flex justify-center gap-6 items-center w-full px-6 mt-2 text-md font-semibold underline text-primary-5 hover:text-primary-4">
                <Link href="https://www.linkedin.com/company/chainleaflabs/" className="text-center hoverline duration-200 hover:text-primary-4">LinkedIn</Link>
                <Link href="https://www.linkedin.com/company/chainleaflabs/" className="text-center hoverline duration-200 hover:text-primary-4">Instagram</Link>
                <Link href="mainto:support@chainleaflabs-group.com" className="text-center hoverline duration-200 hover:text-primary-4">Support</Link>
            </div>

            <div className="flex justify-between items-center w-full px-6 mb-2 mt-10">
                <Link passHref className="underline text-primary-5 font-semibold hover:text-primary-4" href={'/'}>
                    <Tails.button>
                    Go Back
                    </Tails.button>
                </Link>
                <Link passHref className="underline text-primary-5 font-semibold hover:text-primary-4" href={links.demo.disclaimer}>
                    <Tails.button className="bg-transparent dark:bg-transparent">
                    View the Demo
                    </Tails.button>
                </Link>
            </div>
        </div>
    )
}

export default GrowerGettingStarted 