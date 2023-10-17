"use client"
import { Links } from "./NavLinks"
import Image from "next/image"
import NavLinks from "./NavLinks"
import SmallLogo from '@/public/icons/logo_no_text_white.svg'
import truth from "@/lib/truth"
import { usePathname } from "next/navigation"


const Nav = () => {
  const pathname = usePathname()

  const noNav = [
    '/join'
  ]

  const showNav = noNav.some((x:string) => x.includes(pathname))

    return (
      <>
      <nav className="absolute md:fixed w-screen flex items-center justify-between p-2 px-6 h-16 md:h-20 z-50 shadow md:shadow-lg">
        <a href="../#home" className="flex items-center text-md gap-4 font-bold">
  
          <Image
            className="relative h-[40px] w-[40px] invert dark:invert-0 hidden md:block"
            src={SmallLogo}
            alt="Chainleaf Labs Logo"
            width={40}
            height={40}
                priority={true}
                loading="eager"
            />
          <h1 className="text-gradient text-md md:text-xl hoverline">Chainleaf Labs</h1>
          </a>
          <div className="hidden lg:block">
            <NavLinks links={showNav ? truth.nav.links : []} />
          </div>
          <div className="flex gap-2">
            {/* <a href={truth.nav.external.login} className="hidden sm:block py-1 px-5 bg-fade-outline rounded-md text-sm text-white font-semibold">Log In</a> */}
            <a href={truth.nav.internal.registerUser} className="py-1 px-4 rounded-md bg-gradient-to-r from-primary-6 to-primary-1 text-sm text-white font-semibold hover:shadow-ld duration-200">Sign Up</a>
          </div>
      </nav>
        {showNav && <div className="block lg:hidden absolute top-[5rem] text-sm whitespace-nowrap px-6 w-full">
          <NavLinks links={showNav ? truth.nav.links : []} />
        </div>}
      </>
    )
  
  }

  export default Nav