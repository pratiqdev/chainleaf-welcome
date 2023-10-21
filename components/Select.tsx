"use client";

import clsx from 'clsx';
import React, { KeyboardEventHandler, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';

export type Option = {
    label:string;
    value:string;
}
const components = {
    DropdownIndicator: null,
};


const createOption = (label: string) => ({
    label,
    value: label,
});

const Select = ({ 
    options, 
    className, 
    onChange, 
    placeholder,
    maxOptions = 10,
    defaultValue,
 }:{ 
    options:string[], 
    className?:string, 
    onChange:Function,
    placeholder:string,
    maxOptions?:number,
    defaultValue?:string[]
}) => {
    const [error, setError] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');
    const [value, setValue] = React.useState<readonly Option[]>([]);


    const normalize = (str: string) => {
        
        return str.toLowerCase()
            .replace(/[^0-9a-z_]/g, ' ')
            .replace(/--/g, ' ')
    }

    const handleKeyDown: KeyboardEventHandler = (event) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                
                let val = normalize(inputValue)
                if(value.map(x => x.value).join(',').includes(val)) return

                let newOptions = [...value, createOption(val)]
                // props.onInputChange && props.onInputChange(newOptions);
                setNewValues(newOptions);
                setInputValue('');
                event.preventDefault();
        }
    };

    const setNewValues = (newValue:any) => {
        console.log('new value:', newValue)
        if(value.length < 10){
            setValue(newValue)
            onChange(newValue.map((x:Option) => x.value))
            setError('')
        }else{
            setError(`${maxOptions} options maximum. You can add or edit these from your profile at any time.`)
        }
    }

    const handleNewInputValue = (newValue:string) => {
        let val = normalize(newValue)
        setInputValue(val)
    }


    return (
        <>
        <CreatableSelect
            autoFocus
            className={clsx('select text-black', className)}
            classNamePrefix='select-inner'
            // components={components}
            inputValue={inputValue}
            isClearable
            isMulti
            // defaultValue={{
            //     label: defaultValue,
            //     value: defaultValue
            // }}
            defaultInputValue=''
            // menuIsOpen={false}
            options={options.map(createOption)}
            onChange={(newValue) => setNewValues(newValue)}
            onInputChange={handleNewInputValue}
            onKeyDown={handleKeyDown}
            placeholder="Select all that apply"
            value={!value.length && defaultValue ?  defaultValue.map((x:any) => ({ value:x, label:x })) : value }
            maxMenuHeight={300}
            />
            <small className="text-left">{error}</small>
        </>
    );
};


export default Select