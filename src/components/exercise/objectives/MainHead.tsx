import React, { FC, useEffect, useState } from 'react';

const MainHead: FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {


    
    return (
        <th 
            className={`text-[23px] leading-10`} 
            // style={{
            //     minWidth: isTable ? `${CustomTableWidth}px` : '',
            // }}
            >
            <div  className='text-right px-4 py-4'>
                <h1 className='text-[40px] font-bold'>{objective.values[0]?.value}</h1>
            </div>
        </th>
    );
};

export default MainHead;
