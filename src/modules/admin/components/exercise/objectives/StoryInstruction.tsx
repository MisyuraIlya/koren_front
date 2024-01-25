import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import Image from 'next/image';
import React, {FC, useEffect} from 'react';

const StoryInstruction:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    const {setValue} = useAdminExercise()
    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective?.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective?.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective?.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective?.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective?.values)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective?.answers)
    }, []);

    return (
        <th className='text-right text-white py-4 disbleTh'>
            <div className='flex items-center mr-5 justify-center '>
                <h4
                style={{ fontSize: '30px', fontWeight: '600', paddingTop: '10px' }}
                dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value }}
                />
            </div>
        </th>
    );
};

export default StoryInstruction;