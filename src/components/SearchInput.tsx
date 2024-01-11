import Image from 'next/image';
import React, {FC} from 'react';
import { InputHTMLAttributes } from "react";

interface SearchInputProps extends 
InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    
}

const SearchInput: FC<SearchInputProps> = ({placeholder, ...rest}) => {
    return (
        <div className='flex border border-black/50 px-2 rounded-md'>
            <input placeholder={placeholder} {...rest} className='hover:border-none' style={{width:'95%'}}/>
            <Image src={'/images/search.svg'} width={15} height={15} alt='search' priority/>
        </div>
    );
};

export default SearchInput;