import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Typography } from '@mui/material';
import React, {FC, useEffect} from 'react';
import { useState } from 'react';

const ClearText:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
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
        key={objectiveIndex}
        className='disbleTh'
        >
            <Typography
                dangerouslySetInnerHTML={{ __html: objective.values[0]?.value }}
                sx={{
                    textAlign:'justify',
                    padding:'10px 30px'
                }}
            />
        </th>
    );
};

export default ClearText;