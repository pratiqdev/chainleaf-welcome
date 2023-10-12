"use client"
import { useRef, forwardRef } from 'react'

type InputProps = {
    placeholder?: string;
    className?: string;
    type?: 'text' | 'number';
}

const Input = (props:InputProps) => {

    return <input 
        placeholder={props.placeholder ?? ''}
        type={props.type ?? 'text'}
        className={`p-2 bg-white border border-primary-2 text-primary-2 ${props.className ?? ''}`}
    />
}

export default Input