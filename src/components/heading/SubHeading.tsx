import React, { FC,PropsWithChildren } from 'react';
const SubHeading: FC<PropsWithChildren<{
    className?: string
}>> = ({ children, className = '' }) => {
    return (
        <h2 className={`SubHeading ${className}`}>
            {children}
        </h2>
    );
};

export default SubHeading;