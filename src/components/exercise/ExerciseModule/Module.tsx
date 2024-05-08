"use client";
import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import MainModule from './MainModule';
import ExerciseFooter from './ExerciseFooter';
import { useExercise } from '@/provider/ExerciseProvider';
const Module = () => {
    const {exercise, isLoading} = useExercise()
    console.log('exercise',exercise)
    return (
        <div style={{boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.25)', marginLeft:'15px'}}>
            {(exercise?.id === 3691 || exercise?.id === 36) &&
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
            
            }

        </div>
    );
};

export default Module;