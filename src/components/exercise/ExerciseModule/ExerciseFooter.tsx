'use client'
import React from 'react';
import { Box, Button } from '@mui/material';
import { useExercise } from '@/provider/ExerciseProvider';
const ExerciseFooter = () => {
    const {handleDone,handleReset} = useExercise()
    return (
        <Box sx={{padding:'20px 10px', display:'flex', gap:'20px'}}>
            <Button variant='contained' color='primary' sx={{fontSize:'20px', borderRadius:'24px', minWidth:'200px'}} onClick={() => handleDone()}>
                בדיקה
            </Button>
            <Button variant='outlined' color='primary' sx={{fontSize:'20px', borderRadius:'24px', minWidth:'200px'}} onClick={() => handleReset()}>
                נקה
            </Button>
        </Box>
    );
};

export default ExerciseFooter;