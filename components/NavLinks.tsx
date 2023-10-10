"use client"

import Image from 'next/image'
import truth from '../lib/truth'
import useHash from '@/lib/useHash'

export type Links = {
    href: string;
    text:string;
}

export type NavLinksProps = {
    links: Links[]
}

export default function NavLinks(props:NavLinksProps) {
    const hash = useHash();
    return (
        <div className="hidden lg:flex text-sm gap-10">
            {props.links.map(link => 
                    <a 
                        className={(hash.includes(link.href) ? "px-4 text-primary font-semibold hover:text-primary-6" : "px-4 font-semibold hover:text-primary-6")}
                        key={link.href} 
                        href={link.href}
                    >
                        {link.text}
                    </a>
                )
            }
        </div>
    )
}