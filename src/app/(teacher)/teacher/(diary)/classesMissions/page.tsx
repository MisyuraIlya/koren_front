'use client'
import useDataExerciseTypes from '@/modules/teacher/hooks/useDataExerciseTypes';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import React from 'react';
import ClassesMissions from '@/modules/teacher/components/diary/ClassesMissions';
import ToCheck from '@/modules/teacher/components/diary/toCheck';
const page = () => {

    return (
        <Box sx={{width:'585px', bgcolor:'#F6F8FC', height:'100%'}}>
            <ToCheck.Header/>
            <ToCheck.ToCheckList/>
        </Box>
    );
};

export default page;