import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { themeColors } from '@/styles/mui';
import { Box, Typography } from '@mui/material';
import React, {FC, useEffect} from 'react';

const WordModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    
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
        <th key={objectiveIndex}>
            <Box sx={{ margin:'0 20px', borderRadius:'5px' , height:'35px', width:'35px',backgroundColor:objective?.values?.[0]?.value ? themeColors.blueTwo : null, color:'white'}}>
                <Typography variant='h5'>
                {objective?.values?.[0]?.value}
                </Typography>
            </Box>
        </th>
    );
};

export default WordModule;