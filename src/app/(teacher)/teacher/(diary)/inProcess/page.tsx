'use client'
import { Box } from '@mui/material';
import React from 'react';
import InProcess from '@/modules/teacher/components/diary/InProcess';

const page = () => {

    return (
        <Box sx={{width:'585px', bgcolor:'#F6F8FC', height:'100%'}}>
            <InProcess.Header/>
            <InProcess.InProcessList/>
        </Box>
    );
};

export default page;