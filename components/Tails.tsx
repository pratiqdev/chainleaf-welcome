


const Tails = {
    label: (props:any) => <label {...props} className={`flex flex-col text-sm my-2` + ' ' + props?.className ?? ''}  >{props?.children}</label>,
    input: (props:any) => <input {...props} className={`bg-white text-black p-2 rounded text-lg` + ' ' + props?.className ?? ''}  />,
    button: (props:any) => <button {...props} className={`p-2 px-4 bg-primary-6 dark:bg-primary-3 text-white rounded-lg font-semibold text-lg` + ' ' + props?.className ?? ''} >{props?.children}</button>
}

export default Tails