import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import React, {FC, useEffect} from 'react';

const TextCopy:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

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
        <th>
            <div className='text-right  px-4 py-4 fontSizeExercise'>
                <div
                    dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value }}
                    className="text-center"
                    style={{background:(objective?.moduleType === 'textCopy' || objective?.moduleType === 'copy') ? 'white' : ''}}
                />
            </div>
        </th>
    );
};

export default TextCopy;