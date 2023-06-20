import Image from 'next/image'
import truth from '../lib/truth'
import NavLinks from '@/components/NavLinks'
import Button from '@/blocks/Button'
import Gallery from '@/components/TeamGallery'

export default function Home() {
  return (
    <>
    <nav className="fixed w-screen flex items-center justify-between p-2 px-6 h-20 z-50">
      <span className="flex items-center text-md gap-4 font-bold">

      <Image
          className="relative"
          src="/icons/logo_no_text_color.svg"
          alt="Chainleaf Labs Logo"
          width={40}
          height={40}
          priority
          />
        <h1 className="text-gradient text-lg">Chainleaf Labs</h1>
        </span>
        <NavLinks />
        <div className="flex gap-2">
          <a href={truth.nav.external.login} className="py-1 px-5 bg-fade-outline rounded-md text-sm text-white font-semibold">Log In</a>
          <a href={truth.nav.external.register} className="py-1 px-5 rounded-md bg-gradient-to-r from-primary-6 to-primary-1 text-sm text-white font-semibold">Sign Up</a>
        </div>
    </nav>
    <main className="flex min-h-screen flex-col items-center justify-between pt-32 w-full" id="home">

      <div className="flex flex-col-reverse lg:flex-row lg:py-20 items-center justify-evenly w-full max-w-1200 pl-0 lg:pl-12">
        <div className="flex-col flex-1 text-center lg:text-left p-4">
          <h3 className="text-dark font-semibold mb-2">{truth.hero.supheading}</h3>
          <h1 className="text-4xl font-bold leading-26 mb-10">{truth.hero.heading} <span className="text-primary-6 font-bold text-4xl mb-12">{truth.hero.subheading}</span></h1>
         
          <a href={truth.hero.link.href} className="bg-fade py-3 px-6 rounded-md bg-fade  text-white font-semibold text-md">{truth.hero.link.text} -&gt;</a>
        </div>
        <div className="flex-1 flex items-center justify-center ml-6 lg:ml-0">
          <Image
            className="absolute flex-1 z-20  banner-logo mr-8 opacity-30 w-200"
            src="/icons/logo_no_text_white.svg"
            alt="Chainleaf Labs Services"
            width={200}
            height={200}
            priority
          />
          <Image
            className="relative flex-1 z-10 w-full banner-logo"
            src="/icons/banner-cube.svg"
            alt="Chainleaf Labs Services"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>


      <section className="w-full relative m-20 max-w-1200 p-6" id="problem">
        <h2 className="relative text-transparent bg-clip-text bg-gradient-to-b from-teal-200 to-indigo-900 inline-block text-7xl font-bold text-center uppercase w-full opacity-75 z-10">{truth.sections.problem.heading}</h2>
        <h3 className="relative text-center text-3xl -mt-6 z-10 font-semibold tracking-wide">{truth.sections.problem.subheading}</h3>
        <p className="text-dark text-center mt-6 mb-10 dark:text-gray-300">{truth.sections.problem.content}</p>

        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-col flex-1 gap-4">
            {truth.sections.problem.subsections.map(subsec => 
              <div key={subsec.heading}  className="relative rounded-md p-_1 bg-gradient-to-r from-primary-6 via-primary-1 to-transparent flex items-center mb-6">
                <div className="h-auto px-4" >
                  <subsec.icon className="h-16 w-16 text-primary-1"/>
                </div>
                <div className="p-8 bg-white dark:bg-gray-900 w-full rounded-md">
                  <h4 className="text-primary-6">{subsec.heading}</h4>
                  <p className="font-sm text-dark dark:text-gray-200">{subsec.content}</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex-1 p-6">
            <Image
              className="dark:invert w-auto"
              src="/icons/diagram-problem.svg"
              alt="Diagram of the supply chain issue"
              width={120}
              height={17}
            />
          </div>
        </div>


      </section>

      <section className="w-full relative m-20 max-w-1200 p-6" id="vision">
        <h2 className="relative text-transparent bg-clip-text bg-gradient-to-b from-teal-200 to-indigo-900 inline-block text-7xl font-bold text-center uppercase w-full opacity-75 z-10">{truth.sections.vision.heading}</h2>
        <h3 className="relative text-center text-3xl -mt-6 z-10 font-semibold tracking-wide">{truth.sections.vision.subheading}</h3>
        <p className="text-dark text-center mt-6 mb-10 dark:text-gray-300">{truth.sections.vision.content}</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {truth.sections.vision.subsections.map(subsec => 
              <div key={subsec.heading}  className="rounded-md p-_1 bg-center-fade-to-transparent flex-1 h-full w-full"  >
                <div className="relative p-8 bg-white dark:bg-gray-900 w-full rounded-md overflow-hidden h-full flex-1 " style={{minHeight: '14rem'}}>
                  <div className="absolute -bottom-3 -right-2 bg-indigo-100 dark:bg-indigo-900 p-4 rounded-full">
                    <subsec.icon className="h-12 w-12 text-primary-6"/>
                  </div>
                  <h4 className="mb-2 text-primary-6 text-lg">{subsec.heading}</h4>
                  <p className="font-sm text-dark">{subsec.content}</p>
                </div>
              </div>
            )}
        </div>


      </section>


      <section className="w-full relative m-20 max-w-1200 mb-20 p-6" id="solution">
        <h2 className="relative text-transparent bg-clip-text bg-gradient-to-b from-teal-200 to-indigo-900 inline-block text-7xl font-bold text-center uppercase w-full opacity-75 z-10">{truth.sections.solution.heading}</h2>
        <h3 className="relative text-center text-3xl -mt-6 z-10 font-semibold tracking-wide">{truth.sections.solution.subheading}</h3>
        <p className="text-dark text-center mt-6 mb-10 dark:text-gray-300">{truth.sections.solution.content}</p>

        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="relative flex-col flex-1 gap-4">
            <div className="bg-gradient-to-r from-transparent via-primary-6 to-transparent opacity-25 absolute top-12 left-9 bottom-12 w2">?</div>
            {truth.sections.solution.subsections.map(subsec => 
              <div key={subsec.heading}  className="relative flex items-center">
                <div className="rounded-md bg-center-fade-to-transparent shadow-lg" style={{padding: '1px'}} >
                  <div className="bg-white dark:bg-gray-900 rounded-md p-4" >
                  <subsec.icon className="h-12 w-12 text-primary-6 "/>
                  </div>
                </div>
                <div className="p-6 w-full">
                  <h4 className="mb-2 text-primary-6">{subsec.heading}</h4>
                  <p className="font-sm text-dark dark:text-gray-200">{subsec.content}</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex-1 p-6">
            <Image
              className="dark:invert w-auto"
              src="/icons/diagram-solution.svg"
              alt="Next.js Logo"
              width={120}
              height={17}
            />
          </div>
        </div>


      </section>


        <div className="flex flex-col lg:flex-row-reverse gap-12 mx-auto max-w-1200">
          <div className="p-6 rounded-3xl bg-gray-950 flex-1">
            <Image
              className="w-auto mx-auto flex-1"
              src="/icons/diagram-large.svg"
              alt="Next.js Logo"
              width={120}
              height={17}
            />
          </div>
          <div className="flex-1 leading-8 text-lg">
            Duis elit id voluptate sint. Deserunt ullamco fugiat Lorem aute magna esse laborum. Consectetur tempor nostrud sint magna Lorem eiusmod velit nulla laborum ullamco. Est pariatur duis laboris enim pariatur deserunt ullamco. Voluptate enim anim voluptate ut.
            Aliqua sunt cillum tempor ipsum. Sint mollit anim nostrud exercitation incididunt nisi ex ut exercitation voluptate. In deserunt aliquip consequat sint duis elit. Laboris reprehenderit eu Lorem cillum sint. Dolor id nisi ipsum id proident voluptate culpa quis incididunt dolore. Adipisicing ut aliquip cillum anim nostrud ea amet amet ea incididunt dolore. Laborum ea consectetur ea ad sit quis duis quis reprehenderit non ut.
          </div>
        </div>





          <section className="w-full relative my-20 max-w-1200 p-6" id="about">
        <h2 className="relative text-transparent bg-clip-text bg-gradient-to-b from-teal-200 to-indigo-900 inline-block text-7xl font-bold text-center uppercase w-full opacity-75 z-10">{truth.sections.about.heading}</h2>
        <h3 className="relative text-center text-3xl -mt-6 z-10 font-semibold tracking-wide mb-10">{truth.sections.about.subheading}</h3>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <Gallery />
          </div>
          <div className="flex flex-1 flex-col justify-between items-start h-full" >
            <div className="leading-8 h-full flex-1 text-lg">
            {truth.sections.about.content}
              
            </div>
            <a href={truth.hero.link.href} className="bg-fade py-3 px-6 rounded-md bg-fade  text-white font-semibold text-md mt-20">{truth.hero.link.text} -&gt;</a>
          </div>
        </div>


      </section>





      <footer className="w-full flex flex-col bg-primary-6 dark:bg-gray-900 py-12 text-white">
        <div className="w-full flex justify-center">
        <div className="max-w-1200 w-full flex items-center justify-between">
         <Image
          className="relative"
          src="/icons/white logo.svg"
          alt="Chainleaf Labs Logo"
          width={200}
          height={200}
          priority
          />
          <div className="flex gap-12 items-start">
            {truth.footer.sections.map(sect => <div className="flex flex-col gap-4" key={sect.title}>
              <div className="font-semibold text-primary-1 dark:text-primary-4">{sect.title}</div>
              {sect.links.map(link => <a key={link.href} href={link.href} className="text-sm">{link.text}</a>)}</div>)}
          </div>
        </div>
        </div>
        <div className="bg-gradient-to-r from-transparent via-primary-4 to-transparent my-8 max-w-1200 mx-auto w-full" style={{height: '1px'}}></div>
        <div className="w-full max-w-1200 mx-auto flex justify-between">
          <div className="test-sm text-gray-300">{truth.footer.copyright}</div>
          <div>
            {truth.footer.socials.map(soc => <a key={soc.text} href=""></a>)}
          </div>
        </div>
      </footer>





    </main>
    </>
  )
}
