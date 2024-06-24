import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Box, IconButton } from '@mui/material';
import React, {FC, useEffect} from 'react';
import ReachTextEditor from '@/utils/ReachTextEditor';
const OpenQuestion:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
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
        <th id={`${objective.id}`} className='disbleTh'>
            <Box sx={{padding:'20px'}}>
                <ReachTextEditor value={''} setValue={() => console.log('')} placeholder={objective.placeholder}/>
            </Box>
        </th>
    );
};

export default OpenQuestion;