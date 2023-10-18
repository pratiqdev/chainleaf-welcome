import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion";
import Guide, { Step } from "@/components/guide";

const GrowerSteps:Step[] = [
    {
        title: "Complete your profile",
        text: "Add important details to your account like business location, entity type and more.",
        img: "/images/chainleaf/app-mobile.png",
        benefits: [
            {
                text: "Find local certified labs that meet your business requirements.",
                icon: "",
            },
            {
                text: "Allow users to find your products by name, location or certification.",
                icon: "",
            }, 
            {
                text: "Get notifications and updates about local regulation changes.",
                icon: "",
            },
        ]
    },
    {
        title: "Find Local Labs",
        text: "Find local certified labs that meet your business requirements and start testing.",
        img: "/images/chainleaf/login-mobile.png",
        benefits: [
            {
                text: "Simplified certification and testing with data directly from laboratories.",
                icon: "",
            },
            {
                text: "Share your certification data with the community for complete transparency.",
                icon: "",
            }, 
            {
                text: "Get notifications and updates about local regulation changes.",
                icon: "",
            },
        ]
    }
]

const GrowerGettingStarted = () => <Guide steps={GrowerSteps} />

export default GrowerGettingStarted 