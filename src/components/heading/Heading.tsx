import React, { FC, PropsWithChildren } from 'react';
import cn from 'clsx'
interface IHeading {
    className?: string
}
const Heading: FC<PropsWithChildren<IHeading>> = ({ className, children  }) => {
    return (
        <h1 className={cn('font-semibold text-3xl' ,className)}>
            {/* {children} */}
            <div 
                
                // onInput={handleInputChange} 
                dangerouslySetInnerHTML={{ __html: children ?? ''}}
                className='text-right pr-2'
                />
        </h1>
    );
};

export default Heading;