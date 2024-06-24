import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Typography } from '@mui/material';
import Image from 'next/image';
import React, {FC, useEffect} from 'react';

const StoryInstruction:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex,storySticky}) => {
    const hidden = storySticky?.values[0]?.value == objective?.values[0]?.value
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
        <th className='disbleTh'>
            {!hidden &&
            <Typography
                variant='h5'
                fontWeight={700}
                sx={{color:'white'}}
                dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value }}
            />
            }
        </th>
    );
};

export default StoryInstruction;