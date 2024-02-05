'use client'
import { Grid, Paper } from '@mui/material';
import React from 'react';
import Description from './Description';
import Utils from './Utils';
import Grade from './Grade';
import { useStudentExercise } from '@/modules/student/provider/StudentExerciseProvider';

const ExerciseHeader = () => {
    const {closeHeaderExercise} = useStudentExercise()
    return (
        <>
            {
                closeHeaderExercise &&
                <Paper elevation={4} sx={{padding:'20px 50px'}}>
                    <Grid container spacing={2}>
                        <Grid item md={5}>
                            <Description/>
                        </Grid>
                        <Grid item  md={4}>
                            <Utils/>
                        </Grid>
                        <Grid item md={3}>
                            <Grade/>
                        </Grid>
                    </Grid>
                </Paper>
            }
        </>

    );
};

export default ExerciseHeader;