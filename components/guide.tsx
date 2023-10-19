"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useState, useMemo } from 'react'
import Balancer from "react-wrap-balancer";
import clsx from 'clsx'




export type Step = {
    title: string; //'Complete your Profile',
    text?: string; // "Add important details to your Grower account profile",
    img: string;
    substeps: React.JSXElementConstructor<any>[];
}

const Guide = ({ steps }:{ steps: Step[] }) => {

    const [step, setStep] = useState(0)
    const [substep, setSubstep] = useState(0)

    const stepUp = () => setStep(s => s < steps.length - 1 ? ++s : s);
    const stepDown = () => setStep(s => s > 0 ? --s : s);
    const substepUp = () => console.log('Ayoooooooooo')
    // const substepUp = () => setSubstep(s => s < steps[step].substeps.length - 1 ? ++s : s);
    const substepDown = () => setSubstep(s => s > 0 ? --s : s);

    const CurrentSubstep = useMemo(() => steps[step].substeps[substep], [step, steps, substep])

    const controller = {
        stepUp, stepDown,
        substepUp, substepDown,
    }

    return(
    <div>


            <p>STEP {step}</p>
            <p>SUBSTEP {substep}</p>
        <div className="flex flex-col md:flex-row my-6 mt-[-6rem] md:my-20 justify-center items-center gap-10 pb-4 min-h-[50vh]">
           
                <AnimatePresence mode='wait' initial={false}>
                {steps.filter((s: any, i: number) => i === step).map((s: any, idx: number) =>
                    <motion.img
                        key={s.img + idx + 'img'}
                        src={s.img}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -30, opacity: 0 }}
                        transition={{ duration: .7, type: 'spring' }}
                        className="rounded-xl h-[10em] w-[10em] md:h-[25em] md:w-[25em] p-0 object-cover skel"
                    />
                )}
            </AnimatePresence>

            <div className="flex flex-col justify-start items-center  md:items-start text-center md:text-left mt-4 md:mt-10 md:flex w-[22em] min-h-[40vh]">
                    <AnimatePresence mode='wait' initial={false}>
                        {steps.filter((s: any, i: number) => i === step).map((s: any, idx: number) =>
                        <motion.div
                            key={s.img + idx + 'step'}
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 30, opacity: 0 }}
                            transition={{ duration: .7, type: 'spring', }}
                        >
                            <h3 className="bg-primary-5  text-white dark:text-black w-min whitespace-nowrap py-1 px-2 rounded mb-3 font-semibold text-sm md:text-xl">STEP {step + 1}</h3>
                        </motion.div>
                    )}
                </AnimatePresence>

                    <AnimatePresence mode='wait' initial={false}>
                    {steps.filter((s: any, i: number) => i === step).map((s: any, idx: number) =>
                        <motion.div
                            key={s.img + idx + 'title'}
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 30, opacity: 0 }}
                            transition={{ duration: .7, type: 'spring', }}
                        >
                            <h3 className="w-min whitespace-nowrap mb-2 font-bold text-2xl text-primary-5">{s.title}</h3>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* <AnimatePresence mode='wait' initial={false}>
                        {steps.filter((s: any, i: number) => i === step).map((s: any, idx: number) =>
                        <motion.div
                            key={s.img + idx + 'text'}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            transition={{ duration: 1, type: 'spring', }}
                        >
                            <Balancer className="md:text-lg leading-6 tracking-wide">{s.text}</Balancer>
                        </motion.div>
                    )}
                </AnimatePresence> */}

                    <AnimatePresence mode='wait' initial={false}>
                    {steps.filter((s: any, i: number) => i === step).map((s: any, idx: number) =>
                        <motion.div
                            key={s.img + idx + 'benefits' + substep}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            transition={{ duration: 1.3, type: 'spring', }}
                        >
                            <div className="text-xs md:text-normal leading-4 tracking-wide mt-4 text-gray-800 dark:text-gray-300 flex flex-col items-center md:items-start justify-between">
                                {/* {s.benefits.map((b:Benefit) => <Balancer className="" key={b.text}>{b.text}<div className="bg-primary-5 w-[7rem] h-[2px] mx-auto md:ml-0 my-2"/></Balancer>)} */}
                                <CurrentSubstep controller={controller}/>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
        {/* `h-6 w-6 mx-2 rounded-[100%] hover:bg-slate-500 opacity-50 dark:bg-slate-800 cursor-pointer ${step === i ? ' bg-primary-3 dark:bg-slate-200' : ' dark:bg-slate-800 bg-slate-200 '}` */}

        <div className="flex justify-center items-center text-3xl bg-slate-100 dark:bg-slate-900 p-1 w-min mx-auto rounded-3xl shadow-lg text-primary-6 mt-2">
          <button onClick={() => { stepDown(); setSubstep(0); }} className="rounded-[50%] h-10 w-10 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-primary-4">&lt;-</button>
            {steps.map((x:any, i:number) => 
                <div key={i} onClick={() => setStep(i)} className={clsx("h-6 w-6 mx-2 rounded-[100%] cursor-pointer duration-200", {
                    "bg-primary-5 dark:bg-primary-5 hover:bg-primary-4": step === i,
                    "bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700": step !== i,
                })} />
            )}
          <button onClick={() => { stepUp(); setSubstep(0); }} className="rounded-[50%] h-10 w-10 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-primary-4">-&gt;</button>
        </div>

    </div>
    )
}

export default Guide