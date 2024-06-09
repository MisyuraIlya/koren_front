import { themeColors } from '@/styles/mui';
import { Box, Typography } from '@mui/material';
import React, {FC, useEffect} from 'react';

const WordModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    
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