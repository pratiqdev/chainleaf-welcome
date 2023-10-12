"use client"
import Link from "next/link"
import { useRef } from 'react'
import Input from '@/components/Input'


const Join = () => {

    const emailRef = useRef(null)

    return (
        <form>
            <input
                ref={emailRef}
                placeholder="Email"
                className={`p-2 bg-white border border-primary-2 text-primary-2`}
            />
            <input
                ref={passRef}
                placeholder="Email"
                className={`p-2 bg-white border border-primary-2 text-primary-2`}
            />
            <div className="flex flex-col gap-4 w-full">
                <button>Join Now</button>
                <button>Join Now</button>
            </div>
        </form>
    )
}

export default Join