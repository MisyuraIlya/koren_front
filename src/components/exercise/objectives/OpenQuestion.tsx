import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import ReachTextEditor from '@/utils/ReachTextEditor';
import { Box } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';

const OpenQuestion:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    const [value, setValue] = useState('')
    
    return (
        <th id={`${objective.id}`}>
            <Box sx={{padding:'20px'}}>
                <ReachTextEditor value={value} setValue={setValue} placholder={objective.placeholder}/>
            </Box>
        </th>
    );
};

export default OpenQuestion;