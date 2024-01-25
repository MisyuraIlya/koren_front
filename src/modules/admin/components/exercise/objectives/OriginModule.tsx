import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import React, {FC, useEffect} from 'react';

const OriginModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

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
        // style={{
        //     verticalAlign: 'top', // Align text to the top
        //     textAlign: 'right',   // Align text to the right
        //     width:`${widthText}%`,
        //     paddingRight:paddingRight ? `${paddingRight}px` : '', paddingLeft:paddingLeft ? `${paddingLeft}px` : ''
        // }}
        >   
            <div 
            // className={` ${textBgColor == 'לבן' && 'bg-white mt-10 mb-10 rounded-md shadow-xl px-8 shadow-black/10'}`}
            >

            </div>
            <div className='px-4 pt-5 pb-7' 
            // style={{color:'#00000080', width: widthText ? `${widthText}%` : '100%', marginRight:textMargin ? `${textMargin}%` : ''}} 
            dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value }}/>
        </th>
    );
};

export default OriginModule;