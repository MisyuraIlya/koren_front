import React, {FC, useEffect} from 'react';
import { themeColors } from '@/styles/mui';
import { Box, Typography } from '@mui/material';
const OrdenModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {


    return (
        <th
        key={objectiveIndex}
            style={{
                minWidth:'70px'
            }}
        >
            <Box className='text-center flex justify-center items-center py-1'>
                <Typography variant='h6' sx={{background:objective.values?.[0]?.value ? themeColors.primary: null, color:'white', height:'35px', width:'35px' , borderRadius:'5px',  margin:'10px 20px'}}>
                    {objective.values?.[0]?.value}
                </Typography>
            </Box>
        </th>
    );
};

export default OrdenModule;