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
                <Typography variant='h6' sx={{background:themeColors.primary, color:'white', paddingRight:'9px', paddingLeft:'9px', borderRadius:'5px'}}>
                    {objective.values?.[0]?.value}
                </Typography>
            </Box>
        </th>
    );
};

export default OrdenModule;