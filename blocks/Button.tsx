import clsx from 'clsx'

export type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'light' | 'link';
    outline?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const Button = (props:ButtonProps = { variant:'secondary' }) => {

    const style = clsx(
        props.className,
        "p-2 px-4 duration-200 rounded-md shadow-md",
        {
            "bg-fade text-white": props?.variant === 'primary',
            "bg-slate-300 text-slate-800": props?.variant === 'secondary',
            "bg-slate-50": props?.variant === 'light',
        }
    )

    return(
        <button 
            {...props} 
            className={style} 
        >
            {props?.children}
        </button>
    )
}


export default Button;