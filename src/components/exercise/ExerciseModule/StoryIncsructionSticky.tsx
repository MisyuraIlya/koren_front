'use client'
import { Box, Typography } from '@mui/material';
import React, {FC, useEffect} from 'react';
import IconModule from '../objectives/IconModule';
import { themeColors } from '@/styles/mui';

interface StoryIncsructionStickyProps {
    objective:IObjective | null
    icon:IObjective | null
}

const StoryIncsructionSticky:FC<StoryIncsructionStickyProps> = ({objective,icon}) => {
    console.log('objective',objective)

    useEffect(() => {

    },[])
    return (
        <Box sx={{display:'flex', gap:'5px', bgcolor:icon?.moduleType=='icon2' ? themeColors?.blueTwo : themeColors.blueOne, alignItems:'center', padding:'0 60px', height:'60px'}}>
            {/* <Typography
                variant='h5'
                fontWeight={700}
                sx={{color:'white'}}
                dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value ?? '' }}
            /> */}
            {icon &&
            <IconModule objective={icon} tabIndex={1} taskIndex={1} rowIndex={1} objectiveIndex={1}/>
            }
            <Typography sx={{color:'white'}} variant='h5' fontWeight={700}>
                {objective?.values[0]?.value}
            </Typography>

        </Box>
    );
};

export default StoryIncsructionSticky;