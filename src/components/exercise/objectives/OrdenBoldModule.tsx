import React, {FC, useEffect} from 'react';

const OrdenBoldModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <th  style={{
            minWidth:'70px', 
            maxWidth:'70px',
            verticalAlign: 'top', // Align text to the top
            textAlign: 'right', 
            paddingTop:'25px',

            
            }} 
            // className={`${checkIsThereImage ? '' : 'specific-th'} ${(isTable || isClearTable) ? '' : ''} pt-4 ${isExplanationRowSplited && 'bg-white'}`} 
            >
            <div className='text-center flex justify-center items-center py-1'>
                <div className='rounded-md bg-primary text-white px-2'>
                    {objective?.values[0]?.value}
                </div>
            </div>
        </th>
    );
};

export default OrdenBoldModule;