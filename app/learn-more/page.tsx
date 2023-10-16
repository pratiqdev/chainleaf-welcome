import Image from 'next/image'
import truth from '../../lib/truth'
import NavLinks from '@/components/NavLinks'
import Button from '@/blocks/Button'
import Gallery from '@/components/TeamGallery'
import SmallLogo from '@/public/icons/logo_no_text_color.svg'
import Link from 'next/link'
import Head from 'next/head'

const safeId = (value:string = '') => {
  return value.replace(/ /g, '-').toLowerCase()
}


export default function Home() {
  return (
    <>

   
    <main className="flex min-h-screen flex-col items-center justify-between pt-32 w-full" id="home" style={{scrollPaddingTop: '-5rem'}}>

      <h2 className="font-bold text-4xl text-left mb-12 w-[1200px]">Learn More about Chainleaf Labs</h2>

      <div style={{flex:1}} className="max-w-[1200px] mx-auto">
        {Object.entries(truth.learnMore).map(([heading, contentMap]:any) => 
          <div key={heading} className="border-red-500 mb-24">
            <hr className="border border-primary-6"/>
            <h3 className="text-primary-6 text-3xl uppercase font-bold" id={safeId(heading)}>{heading}</h3>
            {Object.entries(contentMap).map(([subheading, content]:any) =>
            <>
              <h4 className="text-primary-6 text-xl font-semibold mt-6" id={safeId(subheading)}>{subheading}</h4>
              <p className="leading-8 text-lg">{content}</p>
            </>
            )}
          </div>
        )}
      </div>





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
 