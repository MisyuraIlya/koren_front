import { useStudentExercise } from '@/modules/student/provider/StudentExerciseProvider';
import { Box } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';


const TextModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <th>
            <Box className='fontSizeExercise ' sx={{textAlign:'left'}}>
                <div
                    style={{paddingRight:'10px'}}
                    dangerouslySetInnerHTML={{ __html: objective?.values[0].value }}
                />
            </Box>
        </th>
    );
};

export default TextModule;