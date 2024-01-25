import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import React, {FC, useEffect, useState} from 'react';

const SubInstruction:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    const {setValue} = useAdminExercise()


    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective.values)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
    }, []);

    return (
        <th 
        // className={`${checkIsThereImage ? 'm-1 px-4 py-4 ' : 'm-1 px-4 py-4'} text-[23px] leading-10`}   
        >
        
            <div className='text-right' >
                {/* {!isOnlineXml &&
                    <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
                } */}

                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value }}
                    className="fontSizeExercise"
                />
            </div>
        </th>
    );
};

export default SubInstruction;