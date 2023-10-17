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
        <div className="flex justify-between w-full md:min-w-[32rem]">
            {props.links.map(link => 
                    <a 
                    className={(hash.includes(link.href) ? "p-1 px-2 text-primary font-semibold hover:text-primary-6" : "p-1 px-2 font-semibold hover:text-primary-6 bg-slate-200 rounded hover:bg-primary-2 hover:text-white")}
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