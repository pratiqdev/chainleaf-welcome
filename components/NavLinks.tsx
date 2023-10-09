"use client"

import Image from 'next/image'
import truth from '../lib/truth'
import useHash from '@/lib/useHash'

export default function NavLinks() {
    const hash = useHash();
    return (
        <div className="hidden lg:flex text-sm gap-10">
            {truth.nav.links.map(link => 
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