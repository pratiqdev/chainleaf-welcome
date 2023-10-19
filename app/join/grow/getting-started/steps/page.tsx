import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion";
import Guide from "@/components/guide";
import { GrowerSteps } from "@/app/join/stepData";


const GrowerGettingStarted = () => <Guide steps={GrowerSteps} />

export default GrowerGettingStarted 