"use client"
import { useState, useEffect, ReactNode, JSXElementConstructor } from 'react'
import Image from 'next/image'
import truth from '../lib/truth'
import NavLinks from '@/components/NavLinks'
import Link from 'next/link'
import Button from '@/blocks/Button'
import Gallery from '@/components/TeamGallery'
import SmallLogo from '@/public/icons/logo_no_text_white.svg'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { Links } from '@/components/NavLinks'
import useEnvironment from '@/lib/useEnvironment'
import useTime from '@/lib/useTime'
import BlastForm from '@/components/Blast'
import links from './links'

const data:any = {
  "Consumers":{
    cta: 'Trust your brand',
    link: 'https://dev.chainleaflabs.com/auth/register#user',
    steps:[
      {
        title:"Step 1",
        text: <p>Visit <Link className="text-primary-6" href="/join/user" >chainleaflabs.com/join</Link> on your desktop or mobile device</p>,
        img: "/images/chainleaf/app-mobile.png"
      },
      {
        title:"Step 2",
        text: <p>Create an account to get started with Chainleaf</p>,
        img: "/images/chainleaf/login-mobile.png"
      },
      {
        title:"Step 3",
        text: <p>Browse products and certificates from authentic sources</p>,
        img: "/images/chainleaf/browse-mobile.png"
      },
      {
        title:"Step 4",
        text: <p>Find farms and brands you can <b>trust</b></p>,
        img: "/images/chainleaf/trust-mobile.png"
      },
      {
        title:"Step 5",
        text: <p>Compare and rank your favorites to <Link className="text-primary-6 hoverline" href="/beta#earn-credits" target='_BLANK'>earn credits</Link></p>,
        img: "/images/chainleaf/compare-mobile.png"
      },
    ],
  },
  "Growers":{
    cta: 'Show off your Stats',
    link: 'https://chainleaflabs.com/grow',
    steps:[
      {
        title:"Step 1",
        text: <p>Visit <Link className="text-primary-6" href="join/grow">chainleaflabs.com/grow</Link> on your desktop or mobile device</p>,
        img: "/images/chainleaf/app-desktop.png"
      },
      {
        title:"Step 2",
        text: <p>Create an account to get started with Chainleaf</p>,
        img: "/images/chainleaf/login-desktop.png"
      },
      {
        title:"Step 3",
        text: <p>Connect with certified product testing labs in your area</p>,
        img: "/images/chainleaf/connect-desktop.png"
      },
      {
        title:"Step 4",
        text: <p>Save time and money on certifications and consumer outreach</p>,
        img: "/images/chainleaf/save-desktop.png"
      },
      {
        title:"Step 5",
        text: <p>Show off your stats and share your rank with the community</p>,
        img: "/images/chainleaf/compare-desktop.png"
      },

    ],
  },
  "Laboratories":{
    cta: 'Connect with the Community',
    link: 'https://chainleaflabs.com/labs',
    steps:[
      {
        title:"Step 1",
        text: <p>Visit <Link className="text-primary-6" href="/join/labs">chainleaflabs.com/labs</Link> on your desktop or mobile device</p>,
        img: "/images/chainleaf/app-desktop.png"
      },
      {
        title:"Step 2",
        text: <p>Create an account to get started with Chainleaf</p>,
        img: "/images/chainleaf/login-desktop.png"
      },
      {
        title:"Step 3",
        text: <p>Connect with local farms in need of certification</p>,
        img: "/images/chainleaf/connect-desktop.png"
      },
      {
        title:"Step 4",
        text: <p>Expand your customer base and simplify customer communication</p>,
        img: "/images/chainleaf/compare-desktop.png"
      },
      {
        title:"Step 5",
        text: <p>Work with the best in the business and solidify your reputation</p>,
        img: "/images/chainleaf/trust-desktop.png"
      },
    ],
  },
  
}

const animationVariants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 1,
      delay: 0,
    }
  },
  exit: {
    scaleX: 0,
    opacity: 0,
    transition: {
      type: "tween",
      duration: .5,
      delay: 0,
    }
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      type: "tween",
      duration: .5,
      delay: 0,
    }
  }
}


const Banner = () => {
  return (
    <div id="home" className="flex flex-col-reverse lg:flex-row lg:py-20 my-10 md:my-20 items-center justify-evenly w-full max-w-1200 pl-0 lg:pl-12 min-h-[60vh]">
        <div className="flex-col flex-1 text-center lg:text-left p-4 z-10 max-w-[32em] items-center w-full">
          <h2 className="text-dark font-semibold mb-2 text-xs md:text-md w-full">{truth.hero.supheading}</h2>
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-26 mb-6 flex-col md:max-w-[13em] lg:min-w-[13em] text-center md:text-left flex"><span className="w-full">{truth.hero.heading}</span> <span className="text-primary-5 mb-12">{truth.hero.subheading}</span></h3>
         
          {/* <BlastForm placeholder='Enter your email to join the wait list!' /> */}
          <Link passHref href="/join/subscribe">
            <div className={clsx("border border-primary-5 text-primary-5 mb-3 rounded h-min overflow-hidden flex items-center max-w-[32rem] mx-6 md:mx-0 hover:shadow-lg hover:border-primary-4 cursor-pointer group")}>
                <p className="p-2 px-4 md:p-4 w-full dark:group-hover:bg-gray-800 dark:group-hover:text-white duration-200 text-left">Join the Waitlist</p>
                <button className="p-2 md:p-4 hover:bg-primary-5 hover:text-white dark:bg-transparent dark:text-primary-5 dark:hover:text-primary-1 dark:hover:bg-primary-4 duration-200 font-bold text-xl whitespace-nowrap group-hover:bg-primary-5 group-hover:text-white dark:group-hover:text-primary-1">-&gt;</button>
            </div>
          </Link>
          <div className="max-w-[32rem] mx-6 md:mx-0 flex justify-stretch text-sm md:text-lg">
            <a href={links.action.whySubscribe} className="bg-fade py-2 md:py-3 px-4 md:px-6 mr-3 rounded-md bg-fade text-white font-semibold hover:underline flex-1" >Join Beta Program</a>
            <Link href={links.docs.home} className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 duration-300 py-2 md:py-3 px-4 md:px-6 rounded-md  text-primary-5 font-semibold" >Learn More -&gt;</Link>
          </div>
          
        </div>

          <div className="flex-1 flex items-center justify-center ml-6 lg:ml-0 max-w-[20rem] md:max-w-[30rem]">
            <Image
              className="absolute flex-1 z-0 opacity-30 lg:opacity-100 banner-logo lg:mr-8 w-[80vw] h-[80vw] lg:w-[20vw] lg:h-[20vw] mt-[20vh] lg:mt-0"
              src="/icons/logo_no_text_color.svg"
              alt="Chainleaf Labs Services"
              width={200}
              height={200}
              loading="eager"
              priority={true}

              />

          </div>
      </div>
  )
}

const Problem = () => {
  return (
    <section className="w-full relative m-20 max-w-1200 p-6" id="problem">
        <h2 className="relative text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-indigo-200 inline-block text-6xl lg:text-8xl font-bold text-center uppercase w-full opacity-75 z-10">{truth.sections.problem.heading}</h2>
        <h3 className="relative text-center text-4xl -mt-6 z-10 font-semibold tracking-wide dark:text-primary-6">{truth.sections.problem.subheading}</h3>
        <p className="text-dark text-center mt-6 mb-10  dark:text-gray-300">{truth.sections.problem.content}</p>

        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="flex-col flex-1 gap-4">
            {truth.sections.problem.subsections.map(subsec => 
              <div key={subsec.heading}  className="group relative rounded-md p-_1 bg-gradient-to-r from-primary-6 via-primary-1 to-transparent flex items-center mb-6 leading-6 tracking-wide">
                <div className="h-auto px-2 lg:px-4" >
                  <subsec.icon className="h-8 w-8 md:h-16 md:w-16 text-primary-1 group-hover:rotate-6 duration-300"/>
                </div>
                <div className="p-4 md:p-6 bg-white dark:bg-gray-900 w-full rounded-md group-hover:bg-slate-200 dark:group-hover:bg-slate-800 duration-300">
                  <h4 className="text-primary-5 group-hover:text-primary-6 dark:group-hover:text-primary-6 duration-300 mb-2 text-lg text-semibold">{subsec.heading}</h4>
                  <p className="font-sm text-dark dark:text-gray-200">{subsec.content}</p>
                </div>
              </div>
            )}
          </div>
          <div className="relative lg:pr-0 mb-6 lg:ml-12">
            <Image
              className="max-w-[15rem] md:max-w-[25rem]"
              src="/images/Object(2).png"
              alt="Diagram of the supply chain issue"
              width={545}
              height={536}
            />
          </div>
        </div>


      </section>
  )
}

const Vision = () => {
  const [activeFilter, setActiveFilter] = useState('')

  return (
    <section className="w-full relative m-20 max-w-1200 p-6" id="vision">
        <h2 className="relative text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-indigo-200 inline-block text-6xl lg:text-8xl font-bold text-center uppercase w-full opacity-75 z-10">{truth.sections.vision.heading}</h2>
        <h3 className="relative text-center text-4xl -mt-6 z-10 font-semibold tracking-wide dark:text-primary-6">{truth.sections.vision.subheading}</h3>
        <p className="text-dark text-center mt-6 mb-10 dark:text-gray-300">{truth.sections.vision.content}</p>

      <div className='flex justify-center gap-4 mb-5'>
        <button className='bg-green-200 hover:bg-green-300 dark:bg-green-900 dark:hover:bg-green-800 ml-2 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg duration-300' onClick={() => setActiveFilter('growers')}>For Growers</button>
        <button className='bg-purple-200 hover:bg-purple-300 dark:bg-purple-900 dark:hover:bg-purple-800 ml-2 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg duration-300' onClick={() => setActiveFilter('tech')}>For Techs</button>
        <button className='bg-blue-200 hover:bg-blue-300 dark:bg-blue-800 dark:hover:bg-blue-700 ml-2 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg duration-300' onClick={() => setActiveFilter('consumers')}>For Consumers</button>
      </div>

        <div className="grid grid-cols-1 gap-6  lg:grid-cols-3">
          <AnimatePresence>
            {truth.sections.vision.subsections.filter(x => !activeFilter ? true : x.tags.includes(activeFilter))?.map(subsec => 
              <motion.div
                key={subsec.heading} 
                variants={animationVariants}
                initial="hidden"
                animate="visible"
              >
              <div className="rounded-md p-_1 bg-center-fade-to-transparent flex-1 h-full w-full leading-6 tracking-wide"  >
                <div className="relative p-6 md:p-8 bg-white dark:bg-gray-900 hover:bg-slate-200 group dark:hover:bg-indigo-900 duration-300 w-full rounded-md overflow-hidden h-full flex-1  " style={{minHeight: '16rem', 
                // background: activeFilter === 'growers' ? '#dfd' : activeFilter === 'tech' ? '#fdf' : '#ddf' 
                }}>
                  <div className="absolute -bottom-4 -right-3 bg-indigo-100 dark:bg-indigo-900 p-4 rounded-full   duration-300">
                    <subsec.icon className="h-16 w-16 text-primary-6 group-hover:rotate-6 duration-300" style={{
                      color: activeFilter === 'growers' 
                        ? '#0f06' 
                        : activeFilter === 'tech' 
                          ? '#f0f6' 
                          : '#66f6' }}/>
                  </div>
                  <h4 className="mb-2 md:mb-4 text-primary-6 group-hover:text-primary-5 duration-300 text-lg font-semibold">{subsec.heading}</h4>
                  <p className="font-sm text-dark">{subsec.content}</p>
                </div>
              </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>



      </section>
  )
}

const Onboard = () => {
  const [type, setType] = useState("Consumers")
  const [step, setStep] = useState(0)

  const stepUp = () => setStep(s => s < data[type].steps.length - 1 ? ++s : s);
  const stepDown = () => setStep(s => s > 0 ? --s : s);




  return (
    <div id="connect" className="w-full max-w-[1200px] flex-col align-center">
      <h3 className="text-3xl md:text-3xl lg:text-5xl font-bold leading-26 mb-4 md:mb-10 text-center text-primary-5">How to Connect</h3>

      <div className="flex flex-col justify-between min-h-[70vh]">

        <div className="flex w-full justify-between px-6 max-w-[50rem] mx-auto">
          {Object.keys(data).map((x,i) => <button key={i} onClick={() => {setType(x); setStep(0)}} 
          className={clsx(
            "font-semibold text-sm md:text-2xl py-1 px-2 rounded bg-slate-50 shadow dark:bg-slate-800 hover:bg-indigo-300 duration-200", 
            type === x && " bg-indigo-200 ",
            )
          }
            >{x}</button>)}
        </div>
          {/* <AnimatePresence mode='wait'>
            {Object.entries(data).filter(([key]) => key === type).map(([key, val]:any[]) => val.steps.filter((s:any, i:number) => i === step).map((s:any, idx:number) => 
               <motion.div
               key={s.img + idx + 'title'} 
               initial={{ x:30, opacity: 0}}
               animate={{ x:0, opacity: 1}}
               exit={{ x:30, opacity: 0}}
               transition={{ duration: .7, type: 'spring', }}
             >
               <h3 className="font-semibold text-[1rem] opacity-40  text-center pointer-events-none">{val.cta}</h3>
             </motion.div>
            ))}
          </AnimatePresence> */}


        <div className="flex flex-col md:flex-row my-0 md:my-20 justify-between md:justify-center md:gap-10 items-center">
          <AnimatePresence mode='wait'>
            {Object.entries(data).filter(([key]) => key === type).map(([key, val]:any[]) => val.steps.filter((s:any, i:number) => i === step).map((s:any, idx:number) => 
                <motion.img
                  key={s.img + idx + 'img'} 
                  src={s.img}
                  initial={{ x:-30, opacity: 0}}
                  animate={{ x:0, opacity: 1}}
                  exit={{ x:-30, opacity: 0}}
                  transition={{ duration: .7, type: 'spring' }}
                  className="rounded-xl h-[15em] w-[15em] md:h-[25em] md:w-[25em] p-3 md:p-10 object-cover skel"
                  loading='eager'
                />
            ))}
          </AnimatePresence>


          
          <div className="flex flex-col justify-center items-center  md:items-start text-center md:text-left mt-4 md:mt-10 md:flex w-[22em]">
            <AnimatePresence mode='wait'>
              {Object.entries(data).filter(([key]) => key === type).map(([key, val]:any[]) => val.steps.filter((s:any, i:number) => i === step).map((s:any, idx:number) => 
                <motion.div
                  key={s.img + idx + 'title'} 
                  initial={{ x:30, opacity: 0}}
                  animate={{ x:0, opacity: 1}}
                  exit={{ x:30, opacity: 0}}
                  transition={{ duration: .7, type: 'spring', }}
                >
                  <h3 className="bg-primary-2 w-min whitespace-nowrap py-1 px-2 rounded mb-3 font-semibold text-xl shadow-lg">{s.title}</h3>
                </motion.div>
              ))}
            </AnimatePresence>


            <AnimatePresence mode='wait'>
              {Object.entries(data).filter(([key]) => key === type).map(([key, val]:any[]) => val.steps.filter((s:any, i:number) => i === step).map((s:any, idx:number) => 
                <motion.div
                  key={s.img + idx + 'text'} 
                  initial={{ x:50, opacity: 0}}
                  animate={{ x:0, opacity: 1}}
                  exit={{ x:50, opacity: 0}}
                  transition={{ duration: 1, type: 'spring', }}
                >
                  <div className="text-xl leading-6 tracking-wide mt-4">{s.text}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center items-center text-3xl bg-slate-100 dark:bg-slate-900 p-1 w-min mx-auto rounded-3xl shadow-lg text-primary-6 mt-2">
          <button onClick={stepDown} className="rounded-[50%] h-10 w-10 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-primary-4">&lt;-</button>
          {data[type].steps.map((x:any, i:number) => <div key={i} onClick={() => setStep(i)} className={`h-6 w-6 mx-2 rounded-[100%] hover:bg-slate-500 opacity-50 dark:bg-slate-800 cursor-pointer ${step === i ? ' bg-primary-3 dark:bg-slate-200' : ' dark:bg-slate-800 bg-slate-200 '}`} />)}
          <button onClick={stepUp} className="rounded-[50%] h-10 w-10 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-primary-4">-&gt;</button>
        </div>

      </div>
    
    </div>
  )
}

const Solution = () => {
  return (
    <section className="w-full relative my-24 min-h-[90vh] max-w-1200 mb-0 p-6 flex flex-col justify-center" id="solution">
    {/* <h2 className="relative text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-indigo-200 inline-block text-6xl lg:text-8xl font-bold text-center uppercase w-full opacity-75 z-10 mb-4">{truth.sections.solution.heading}</h2> */}
    <h3 className="relative text-center text-3xl md:text-5xl  md:mb-8 z-10 font-bold tracking-wide text-primary-5">{truth.sections.solution.subheading}</h3>
    {/* <p className="text-dark text-center mt-6 mb-10 dark:text-gray-300">{truth.sections.solution.content}</p> */}


    <div className="flex flex-col-reverse lg:flex-row-reverse items-center">
      <div className="relative flex-col flex-1 gap-4 lg:mx-0  justify-center">
        <div className="hidden lg:block bg-gradient-to-r from-transparent via-primary-6 to-transparent opacity-25 absolute top-12 left-9 bottom-28 w2">&nbsp;</div>
        {truth.sections.solution.subsections.map(subsec => 
          <div key={subsec.heading}  className="flex flex-col lg:flex-row justify-start items-center mb-6 lg:mb-0 group duration-300">
            <div className="rounded-md bg-center-fade-to-transparent shadow-lg w-full p-_1 md:w-auto" >
              <div className="relative bg-white dark:bg-gray-900 group-hover:bg-primary-6 duration-300 rounded-md p-4 w-full lg:w-auto flex items-center gap-6 whitespace-nowrap" >
              <subsec.icon className="h-12 w-12 child text-primary-6 group-hover:text-white self-baseline duration-300"/>
              <h4 className="block md:hidden mb-0 md:mb-2 text-primary-6 text-lg font-semibold">{subsec.heading}</h4>

              </div>
            </div>
            <div className="p-6 w-full leading-6 tracking-wide text-center lg:text-left">
              <h4 className="hidden md:block mb-2 text-primary-6 text-lg font-semibold">{subsec.heading}</h4>
              <p className="font-sm text-dark dark:text-gray-200">{subsec.content}</p>
            </div>
          </div>
        )}
        <br />
        <div className="flex justify-center items-center lg:justify-stretch">
        <Link href={links.docs.home} className="bg-slate-300 hover:bg-slate-400 dark:bg-slate-800 dark:hover:bg-slate-700 duration-300 duration-300 ml-2 px-2 py-1 md:py-3 md:px-6 rounded-md  text-primary-6 font-semibold text-md md:text-lg" >Learn More</Link>
        {/* <Link href={'/learn'} className="bg-slate-300 ml-2 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg" >Read Lightpaper -&gt;</Link> */}
        </div>
        
      </div>

      <div className="flex-1 mb-12 flex items-center justify-center mt-[2rem]">


   <picture  className="m-6 max-w-[400px] md:max-w-[600px] flex flex-col">
        <source srcSet='/images/solution_darkmode.png' media="(prefers-color-scheme: dark)" />
   
        <Image
          className="w-full"
          src="/images/solution_lightmode.png"
          alt="Next.js Logo"
          width={713}
          height={580}
        />
 
      </picture>
      </div>
    </div>


    
    


  </section>
  )
}

const Platform = () => {
  return ( 
    <section className="w-full relative m-20 max-w-1200 p-6" id="platform">

    <h2 className="relative text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-indigo-200 inline-block text-6xl lg:text-8xl font-bold text-center uppercase w-full opacity-75 z-10">PLATFORM</h2>
    <h3 className="relative text-center text-4xl -mt-6 z-10 font-semibold tracking-wide dark:text-primary-6">Connecting the Pieces</h3>



    <div className="flex flex-col lg:flex-row-reverse gap-6 mx-auto max-w-[1200px] mt-12 justify-center items-center">
      <picture  className="m-0 md:m-2 max-w-[400px] md:max-w-[600px]">
        <source srcSet='/images/diagram_large_darkmode.png' media="(prefers-color-scheme: dark)" />
   
        <Image
          className="w-full"
          src="/images/diagram_large.png"
          alt="Next.js Logo"
          width={1194}
          height={937}
        />
      </picture>

      <div   className="mt-4 mb-2 leading-8 tracking-wide text-xl max-w-auto text-center lg:text-left lg:max-w-[500px] mx-6">
        {truth.sections.solution.content}
        <div className="flex justify-center lg:justify-stretch items-center mt-8">
        <Link href={'/learn#platform'} className="bg-slate-300 hover:bg-slate-400  dark:bg-slate-800 dark:hover:bg-slate-700 duration-300 duration-300 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg" >Learn More</Link>
        {/* <Link href={'/learn'} className="bg-slate-300 ml-2 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg" >Read Lightpaper -&gt;</Link> */}
        </div>
      </div>

      <div className="flex-1 leading-8 tracking-wide m-6 mx-0 lg:mx-auto bg-white p-6 rounded-lg bg-center-fade-to-transparent p-_1">

      </div>
    </div>
 

  </section>
  )
}

const About = () => {
  return (
    <section className="w-full relative my-20 max-w-1200 p-6" id="about">
        <h2 className="relative text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-indigo-200 inline-block text-6xl lg:text-8xl font-bold text-center uppercase w-full opacity-75 z-10">{truth.sections.about.heading}</h2>
        <h3 className="relative text-center text-4xl -mt-6 z-10 font-semibold tracking-wide mb-10 dark:text-primary-6">{truth.sections.about.subheading}</h3>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start gap-8">
          <div className="flex-1">
            <Gallery />
          </div>
          <div className="flex flex-1 flex-col justify-between items-start mx-0" style={{minHeight:'30rem'}} >
            <div className="flex-1 leading-8 tracking-wide text-lg">
              {truth.sections.about.content}
            </div>
            <div className="flex flex-col gap-2 w-full">

              <Link href={'/learn'} className="border border-primary-6 hover:bg-primary-6 hover:text-white duration-300 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg text-center" >Learn More About our Platform</Link>
              {/* <Link href={'/learn'} className="border border-primary-6 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg text-center" >Read the Technical Lightpaper</Link> */}
              <a href={truth.hero.link.href} className="bg-fade py-3 px-6 rounded-md hover:underline duration-300 text-white font-semibold text-md  w-full text-center">Get Started with Chainleaf Labs -&gt;</a>
            </div>
          </div>
        </div>


      </section>
  )
}

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-primary-6 dark:bg-gray-900 py-12 text-white">
        <div className="w-full flex justify-center">
        <div className="max-w-1200 w-full flex items-center justify-between px-6 md:px-0">
         <Image
          className="relative hidden md:block h-24 w-24 md:h-48 md:w-48"
          src="/icons/white logo.svg"
          alt="Chainleaf Labs Logo"
          width={200}
          height={200}
          />
          <div className="flex gap-12 items-start">
            {truth.footer.sections.map(sect => <div className="flex flex-col gap-4 mx-1 lg:mx-8" key={sect.title}>
              <div className="font-semibold text-primary-1 dark:text-primary-4">{sect.title}</div>
              {sect.links.map(link => <a key={link.href} href={link.href} className="">{link.text}</a>)}</div>)}
          </div>
        </div>
        </div>
        <div className="bg-gradient-to-r from-transparent via-primary-4 to-transparent my-8 max-w-1200 mx-auto w-full" style={{height: '1px'}}></div>
        <div className="w-full max-w-1200 mx-auto flex justify-between">
          <div className="text-[.7rem] text-gray-300 mx-6 md:mx-0">{truth.footer.copyright}</div>
          <div>
            {/* {truth.footer.socials.length && truth.footer.socials.map(soc => <a key={soc.text} href="">{soc.text}</a>)} */}
          </div>
        </div>
      </footer>
  )
}

export default function Home() {
 

  

  return (
    <>
      {/* <Nav links={truth.nav.links}/> */}
      <main className="flex min-h-screen flex-col items-center justify-between pt-32 w-full" id="home">
        <Banner />
        {/* <Problem /> */}
        {/* <Vision /> */}
        <Onboard />
        <Solution />
        {/* <Platform /> */}
        {/* <About /> */}
        <Footer />

      

      


  
        




     





      





      





    </main>
    </>
  )
}
 