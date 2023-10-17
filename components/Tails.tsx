


const Tails = {
    label: (props:any) => <label {...props} className={`flex flex-col text-sm my-2` + ' ' + props?.className ?? ''}  >{props?.children}</label>,
    input: (props:any) => <input {...props} className={`bg-white text-black p-2 rounded text-lg` + ' ' + props?.className ?? ''}  />,
    button: (props:any) => <button {...props} className={`p-2 px-4 bg-indigo-200 hover:bg-primary-5 hover:text-white dark:bg-primary-2 dark:text-white dark:hover:bg-primary-3 text-primary-5 rounded-lg font-semibold text-lg duration-200` + ' ' + props?.className ?? ''} >{props?.children}</button>
}

export default Tails