'use client'
import React, {forwardRef, InputHTMLAttributes} from 'react';
import cn from 'clsx'

interface LoginInputTypes extends 
InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    error?: string
    heading?: string
}

const LoginInput = forwardRef<HTMLInputElement, LoginInputTypes>(
    ({placeholder, heading, error, className, type='text', 
    style, ...rest} , ref) => {
        return (
            <div className={cn('mb-4',className)} style={style}>
                <h2 className='font-medium text-md'>{heading}</h2>
                <label>
                    <input placeholder={placeholder} className={cn('border border-auth_card_image_border px-4 py-2 w-full outline-none transition-all placeholder:text-gray rounded-md', 
                    {
                        'border-red': !!error
                        
                    })} ref={ref} type={type} {...rest} />
                </label>
                {error && <div className='text-red mt-1 text-sm'>{error}</div>}
            </div>
        );
    }
)

LoginInput.displayName = 'Input'
export default LoginInput;