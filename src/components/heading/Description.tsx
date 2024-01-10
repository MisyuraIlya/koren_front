import React, { FC, PropsWithChildren } from 'react';
const Description: FC<PropsWithChildren<{
    children: string
    className?: string
}>> = ({ children, className = '' }) => {
    return (
        <p className={`Description ${className}`}>
            {children}
        </p>
    );
};

export default Description;