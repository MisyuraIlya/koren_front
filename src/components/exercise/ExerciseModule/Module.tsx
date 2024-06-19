"use client";
import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import MainModule from './MainModule';
import ExerciseFooter from './ExerciseFooter';
import { useExercise } from '@/provider/ExerciseProvider';
const Module = () => {
    const {exercise, isLoading} = useExercise()
    return (
        <div style={{marginLeft:'15px'}}>
            <>
                {(isLoading) &&
                    <Box sx={{display:'flex',justifyContent:'center', alignItems:'center', minHeight:'400px'}}>
                        <CircularProgress/>
                    </Box>
                }
                {exercise && exercise?.tabs?.map((item, tabIndex) => (
                    <MainModule key={tabIndex} item={item} tabIndex={tabIndex} />
                ))}
                <ExerciseFooter/>
            </>
        </div>
    );
};

export default Module;