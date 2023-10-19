


const Tails = {
    label: (props:any) => <label {...props} className={`flex flex-col text-sm my-2` + ' ' + props?.className ?? ''}  >{props?.children}</label>,
    input: (props:any) => <input {...props} className={`bg-white text-black p-2 rounded text-lg` + ' ' + props?.className ?? ''}  />,
    button: (props: any) => <button {...props} className={`p-2 px-4 bg-indigo-200 hover:bg-primary-5 hover:text-white dark:bg-primary-2 dark:text-white dark:hover:bg-primary-3 text-primary-5 rounded-lg font-semibold text-md md:text-lg duration-200` + ' ' + props?.className ?? ''} >{props?.children}</button>,
    h1: (props: any) => <h1 {...props} className={`text-2xl md:text-3xl lg:text-5xl text-primary-5 duration-200` + ' ' + props?.className ?? ''} >{props?.children}</h1>,
    h2: (props: any) => <h2 {...props} className={`text-xl md:text-2xl lg:text-3xl text-primary-5 duration-200` + ' ' + props?.className ?? ''} >{props?.children}</h2>,
    h3: (props: any) => <h3 {...props} className={`text-lg md:text-xl lg:text-2xl text-primary-5 duration-200` + ' ' + props?.className ?? ''} >{props?.children}</h3>,
}

export default Tails