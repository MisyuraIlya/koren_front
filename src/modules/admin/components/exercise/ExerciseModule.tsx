'use client'
import React from 'react';
import Module from './module';
import { useAdminExercise } from '../../provider/AdminExerciseProvider';
import { Box, CircularProgress } from '@mui/material';
const ExerciseModule = () => {
    const {exercise, isLoading} = useAdminExercise()
    return (
        <div style={{boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.25)', marginLeft:'15px'}}>
            {isLoading &&
                <Box sx={{display:'flex',justifyContent:'center', alignItems:'center', minHeight:'400px'}}>
                    <CircularProgress/>
                </Box>
            }
            {exercise && exercise?.tabs?.length > 1 && <Module.ExerciseTabs />}
            {exercise && exercise?.tabs?.map((item, tabIndex) => (
                <Module.MainModule key={tabIndex} item={item} tabIndex={tabIndex} />
            ))}
        </div>
    );
};

export default ExerciseModule;