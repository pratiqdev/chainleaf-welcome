import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion";
import Guide, { Step } from "@/components/guide";

const GrowerSteps:Step[] = [
    {
        title: "Complete your profile",
        text: "Add important details to your account like business location, entity type and more.",
        benefits: [
            {
                text: "Find local certified labs that meet your business requirements.",
                icon: "",
            },
            {
                text: "Allow users to find your products by name, location or certification",
                icon: "",
            }, 
            {
                text: "Get notifications and updates about local regulation changes",
                icon: "",
            },
        ]
    }
]

const GrowerGettingStarted = () => {


    return (
        // <div className="bg-slate-200 dark:bg-slate-800 text-black dark:text-white min-w-[24rem] rounded-lg mx-auto mt-4 w-min shadow-lg flex flex-col items-center py-4">
            <Guide steps={GrowerSteps} />
           
        // </div>
    )
}

export default GrowerGettingStarted 