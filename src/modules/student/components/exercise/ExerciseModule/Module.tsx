"use client";
import { useStudentExercise } from '@/modules/student/provider/StudentExerciseProvider';
import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import MainModule from './MainModule';
const Module = () => {
    const {exercise, isLoading} = useStudentExercise()
    return (
        <div style={{boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.25)', marginLeft:'15px'}}>
            {(isLoading) &&
                <Box sx={{display:'flex',justifyContent:'center', alignItems:'center', minHeight:'400px'}}>
                    <CircularProgress/>
                </Box>
            }
            {exercise && exercise?.tabs?.map((item, tabIndex) => (
                <MainModule key={tabIndex} item={item} tabIndex={tabIndex} />
            ))}
        </div>
    );
};

export default Module;