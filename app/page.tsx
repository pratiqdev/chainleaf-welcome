import Image from 'next/image'
import truth from '../lib/truth'
import NavLinks from '@/components/NavLinks'
import Button from '@/blocks/Button'

export default function Home() {
  return (
    <>
    <nav className="fixed w-screen flex items-center justify-between p-2 px-6 h-20 z-50">
    <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={17}
          priority
        />
        <NavLinks />
        <div className="flex gap-2">
          <button className="py-1 px-5  bg-fade-outline rounded-md text-sm text-white font-semibold">Log In</button>
          <button className="py-1 px-5 rounded-md bg-fade text-sm text-white font-semibold">Sign Up</button>
        </div>
    </nav>
    <main className="flex min-h-screen flex-col items-center justify-between p-6 pt-32 w-full">

      <div className="flex flex-col-reverse lg:flex-row py-20 items-center justify-evenly w-full max-w-1200">
        <div className="flex-col flex-1 text-center lg:text-left">
          <h3 className="text-dark font-semibold mb-2">{truth.hero.supheading}</h3>
          <h1 className="text-4xl font-bold leading-26 mb-10">{truth.hero.heading} <span className="text-primary font-bold text-4xl mb-12">{truth.hero.subheading}</span></h1>
         
          <a href={truth.hero.link.href} className="bg-fade py-3 px-6 rounded-md bg-fade  text-white font-semibold text-md">{truth.hero.link.text} -&gt;</a>
        </div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert flex-1 z-10 mb-20 w-auto lg:w-full mx-6 lg:mx-0"
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={17}
          priority
        />
      </div>


      <section className="w-full relative m-20 max-w-1200">
        <h2 className="relative text-transparent bg-clip-text bg-gradient-to-b from-teal-200 to-indigo-900 inline-block text-7xl font-bold text-center uppercase w-full opacity-75 z-10">{truth.sections.problem.heading}</h2>
        <h3 className="relative text-center text-3xl -mt-6 z-10 font-semibold tracking-wide">{truth.sections.problem.subheading}</h3>
        <p className="text-dark text-center mt-6 mb-10">{truth.sections.problem.content}</p>

        <div className="flex flex-col md:flex-row">
          <div className="flex-col flex-1 gap-4">
            {truth.sections.problem.subsections.map(subsec => 
              <div key={subsec.heading}  className="relative rounded-md p-_1 bg-fade-to-transparent flex items-center mb-6">
                <div className="h-auto px-4" >
                  <subsec.icon className="h-16 w-16 text-primary-dark"/>
                </div>
                <div className="p-6 bg-white dark:bg-gray-900 w-full rounded-md">
                  <h4>{subsec.heading}</h4>
                  <p className="font-sm text-dark">{subsec.content}</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex-1 p-6">
            <Image
              className="dark:invert w-auto"
              src="/next.svg"
              alt="Next.js Logo"
              width={120}
              height={17}
            />
          </div>
        </div>


      </section>

      <section className="w-full relative m-20 max-w-1200">
        <h2 className="relative text-transparent bg-clip-text bg-gradient-to-b from-teal-200 to-indigo-900 inline-block text-7xl font-bold text-center uppercase w-full opacity-75 z-10">{truth.sections.vision.heading}</h2>
        <h3 className="relative text-center text-3xl -mt-6 z-10 font-semibold tracking-wide">{truth.sections.vision.subheading}</h3>
        <p className="text-dark text-center mt-6 mb-10">{truth.sections.vision.content}</p>

        <div className="flex flex-col md:flex-row justify-evenly gap-0 md:gap-6">
            {truth.sections.vision.subsections.map(subsec => 
              <div key={subsec.heading}  className="relative rounded-md p-_1 bg-center-fade-to-transparent  flex items-center mb-6" style={{minWidth: '250px'}}>
                <div className="relative p-6 bg-white dark:bg-gray-900 w-full rounded-md overflow-hidden">
                  <div className="absolute -bottom-3 -right-2 bg-indigo-100 dark:bg-indigo-900 p-4 rounded-full">
                    <subsec.icon className="h-10 w-10 text-indigo-500"/>
                  </div>
                  <h4>{subsec.heading}</h4>
                  <p className="font-sm text-dark">{subsec.content}</p>
                </div>
              </div>
            )}
        </div>


      </section>





      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      <div className="h-32">...</div>
      <div className="h-32">...</div>
      <div className="h-32">...</div>
      <div className="h-32">...</div>
      <div className="h-32">...</div>
      <div className="h-32">...</div>
      <div className="h-32">...</div>
      <div className="h-32">...</div>
      <div className="h-32">...</div>
      <div className="h-32">...</div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
    </>
  )
}
