
import clsx from "clsx"
import Link from "next/link"

export type LinkProps = {
    href:string;
    className?:string;
    children?:React.ReactNode
}

const Tails = {
    label: (props:any) => <label {...props} className={`flex flex-col text-xs my-2 gap-1 text-left text-primary-5` + ' ' + props?.className ?? ''}  >{props?.children}</label>,
    input: (props:any) => <input {...props} className={`bg-white text-black placeholder:text-gray-500 border-[1px] border-gray-300 p-2 py-1 rounded text-lg` + ' ' + props?.className ?? ''}  />,
    textarea: (props:any) => <textarea {...props} className={`bg-white text-black placeholder:text-gray-500 border-[1px] border-gray-300 p-2 py-1 rounded text-lg` + ' ' + props?.className ?? ''}  />,
    checkbox: (props:any) => <input {...props} type='checkbox' className={clsx(`form-checkbox`, props?.className)}  />,
    button: (props: any) => <button {...props} className={clsx(`p-2 px-4 bg-indigo-200 hover:bg-primary-5 hover:text-white dark:bg-primary-2 dark:text-white dark:hover:bg-primary-3 text-primary-5 rounded-lg font-semibold text-md md:text-lg duration-200`, props?.className)} >{props?.children}</button>,
    h1: (props: any) => <h1 {...props} className={`text-2xl md:text-3xl lg:text-5xl text-primary-5 duration-200` + ' ' + props?.className ?? ''} >{props?.children}</h1>,
    h2: (props: any) => <h2 {...props} className={`text-xl md:text-2xl lg:text-3xl text-primary-5 duration-200` + ' ' + props?.className ?? ''} >{props?.children}</h2>,
    h3: (props: any) => <h3 {...props} className={`text-lg md:text-xl lg:text-2xl text-primary-5 duration-200` + ' ' + props?.className ?? ''} >{props?.children}</h3>,
    h4: (props: any) => <h4 {...props} className={`text-lg md:text-lg lg:text-xl text-primary-5 duration-200` + ' ' + props?.className ?? ''} >{props?.children}</h4>,
    link: (props: LinkProps) => <Link {...props} className={clsx(`md:text-md lg:text-md text-primary-5 underline hover:text-primary-4 duration-200`, props?.className)} passHref>{props?.children}</Link>,
    br: (props: any) => <div className="w-full px-6 mt-4 hidden md:block"><div className="h-[1px] w-full bg-primary-5" /></div>,

}

export default Tails