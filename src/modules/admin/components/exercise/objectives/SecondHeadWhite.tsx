import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import React, { FC, useEffect, useState } from 'react';


const SecondHeadWhiteModule: FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    const {setValue} = useAdminExercise()
    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective.values)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
    }, [tabIndex,taskIndex,rowIndex,objectiveIndex,objective]);
    
    return (
        <th 
        className='disbleTh'
            // className={`bg-white w-full pt-5 pb-5 ${(isTable || isClearTable) ? 'tableModule' : ''} ${checkIsIcon && 'bg-[#005CBB] text-white'} text-[23px] leading-10`} 
            // style={{
            //     minWidth: isTable ? `${CustomTableWidth}px` : '',
            // }}
            >
            <div  className='text-right px-4'>
                <h3 className='text-[26px] font-semibold'>{objective?.values[0]?.value}</h3>
            </div>
        </th>
    );
};

export default SecondHeadWhiteModule;
