"use client"

import Image from 'next/image'
import truth from '../lib/truth'
import useHash from '@/lib/useHash'

export default function NavLinks() {
    const hash = useHash();
    return (
        <div className="hidden lg:flex">
            {truth.nav.links.map(link => 
                    <a 
                        className={hash.includes(link.href) ? "px-4 font-bold text-primary text-sm" : "px-4 text-sm"}
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