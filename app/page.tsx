"use client"
import { useState } from 'react'
import Image from 'next/image'
import truth from '../lib/truth'
import NavLinks from '@/components/NavLinks'
import Link from 'next/link'
import Button from '@/blocks/Button'
import Gallery from '@/components/TeamGallery'
import SmallLogo from '@/public/icons/logo_no_text_color.svg'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
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

  const [activeFilter, setActiveFilter] = useState('')

  return (
    <>
    <nav className="fixed w-screen flex items-center justify-between p-2 px-6 h-20 z-50">
      <span className="flex items-center text-md gap-4 font-bold">

        <Image
          className="relative h-[40px] w-[40px]"
          src={SmallLogo}
          alt="Chainleaf Labs Logo"
          width={40}
          height={40}
              priority={true}
              loading="eager"
          />
        <h1 className="text-gradient text-xl">Chainleaf Labs</h1>
        </span>
        <NavLinks />
        <div className="flex gap-2">
          <a href={truth.nav.external.login} className="hidden sm:block py-1 px-5 bg-fade-outline rounded-md text-sm text-white font-semibold">Log In</a>
          <a href={truth.nav.external.register} className="py-1 px-5 rounded-md bg-gradient-to-r from-primary-6 to-primary-1 text-sm text-white font-semibold">Sign Up</a>
        </div>
    </nav>
    <main className="flex min-h-screen flex-col items-center justify-between pt-32 w-full" id="home">

      <div className="flex flex-col-reverse lg:flex-row lg:py-20 items-center justify-evenly w-full max-w-1200 pl-0 lg:pl-12">
        <div className="flex-col flex-1 text-center lg:text-left p-4">
          <h2 className="text-dark font-semibold mb-2">{truth.hero.supheading}</h2>
          <h3 className="text-4xl font-bold leading-26 mb-10">{truth.hero.heading} <span className="text-primary-6 font-bold text-4xl mb-12">{truth.hero.subheading}</span></h3>
         
          <Link href={'/learn-more'} className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 duration-300 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg" >Learn More</Link>
          {/* <Link href={'/learn-more'} className="bg-slate-200 ml-2 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg" >Read Lightpaper</Link> */}
          <a href={truth.hero.link.href} className="bg-fade py-3 px-6 ml-2 rounded-md bg-fade  text-white font-semibold text-lg hover:underline" >{truth.hero.link.text} -&gt;</a>
        </div>

          <div className="flex-1 flex items-center justify-center ml-6 lg:ml-0 max-w-[20rem] md:max-w-[30rem]">
            <Image
              className="absolute flex-1 z-20  banner-logo mr-8 opacity-30 w-[200px] h-[200px]"
              src="/icons/logo_no_text_white.svg"
              alt="Chainleaf Labs Services"
              width={200}
              height={200}
              loading="eager"
              priority={true}

              />
            <Image
              className="relative flex-1 z-10 banner-logo  w-[300px] h-[300px]"
              src="/icons/banner-cube.svg"
              alt="Chainleaf Labs Services"
              width={300}
              height={300}
              loading="eager"
              priority={true}

              />
          </div>
      </div>


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


      <section className="w-full relative m-20 max-w-1200 mb-0 p-6" id="solution">
        <h2 className="relative text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-indigo-200 inline-block text-6xl lg:text-8xl font-bold text-center uppercase w-full opacity-75 z-10">{truth.sections.solution.heading}</h2>
        <h3 className="relative text-center text-4xl -mt-6 -mb-12 z-10 font-semibold tracking-wide dark:text-primary-6">{truth.sections.solution.subheading}</h3>
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
            <Link href={'/learn-more#a-groundbreaking-approach'} className="bg-slate-300 hover:bg-slate-400 dark:bg-slate-800 dark:hover:bg-slate-700 duration-300 duration-300 ml-2 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg" >Learn More</Link>
            {/* <Link href={'/learn-more'} className="bg-slate-300 ml-2 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg" >Read Lightpaper -&gt;</Link> */}
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
            <Link href={'/learn-more#platform'} className="bg-slate-300 hover:bg-slate-400  dark:bg-slate-800 dark:hover:bg-slate-700 duration-300 duration-300 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg" >Learn More</Link>
            {/* <Link href={'/learn-more'} className="bg-slate-300 ml-2 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg" >Read Lightpaper -&gt;</Link> */}
            </div>
          </div>

          <div className="flex-1 leading-8 tracking-wide m-6 mx-0 lg:mx-auto bg-white p-6 rounded-lg bg-center-fade-to-transparent p-_1">

          </div>
        </div>
     

      </section>





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

              <Link href={'/learn-more'} className="border border-primary-6 hover:bg-primary-6 hover:text-white duration-300 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg text-center" >Learn More About our Platform</Link>
              {/* <Link href={'/learn-more'} className="border border-primary-6 py-3 px-6 rounded-md  text-primary-6 font-semibold text-lg text-center" >Read the Technical Lightpaper</Link> */}
              <a href={truth.hero.link.href} className="bg-fade py-3 px-6 rounded-md hover:underline duration-300 text-white font-semibold text-md  w-full text-center">Get Started with Chainleaf Labs -&gt;</a>
            </div>
          </div>
        </div>


      </section>





      <footer className="w-full flex flex-col bg-primary-6 dark:bg-gray-900 py-12 text-white">
        <div className="w-full flex justify-center">
        <div className="max-w-1200 w-full flex items-center justify-between px-6 md:px-0">
         <Image
          className="relative h-24 w-24 md:h-48 md:w-48"
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





    </main>
    </>
  )
}
 