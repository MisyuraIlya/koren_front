'use client'
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useExercise } from '@/provider/ExerciseProvider';

const Description = () => {
    const {exercise} = useExercise()
    return (
        <Box>
            <Typography variant='h5' fontWeight={900} >
                {exercise && <div dangerouslySetInnerHTML={{ __html: exercise.title }} />}
            </Typography>
            <Box sx={{display:'flex', gap:'20px'}}>
                <Button variant='contained'>הוראות תרגיל</Button>
                <Button variant='contained'>הדרכה</Button>
            </Box>
        </Box>
    );
};

export default Description;