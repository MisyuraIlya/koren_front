'use client'
import useDataConnectionGroup from '@/hooks/useDataConnectionGroup';
import { useExercise } from '@/provider/ExerciseProvider';
import { Box, Divider, Grid, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';

const StudentContent = () => {
    const {exercise} = useExercise()
    return (
        <>
        <Grid item xs={2}>
          
        </Grid>
        <Grid item xs={1.5}>
          
        </Grid>
        <Grid item xs={1}>
        
        </Grid>
        <Grid item xs={2}>
            <Typography variant='h6' fontWeight={600}>
                תרגיל {exercise?.group?.exerciseType?.title}
            </Typography>
            <Grid container spacing={0}>
                <Grid item xs={4}>
                    <Typography color={'#7D7D7D'}>תאריך הגשה:</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography color={'black'}>{moment(exercise?.group?.fromDate).format('DD-MM-YYYY')}</Typography>
                </Grid>
                {exercise?.group?.time && 
                    <>
                    <Grid item xs={4}>
                        <Typography color={'#7D7D7D'}>שעת הגשה:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography color={'black'}>{moment(exercise?.group?.time).format('HH:mm')}</Typography>
                    </Grid>
                    </>
                }
 
            </Grid>
        </Grid>
        <Grid item xs={1} sx={{display:'flex'}}>
            <Box>
                <Typography variant='h6' fontWeight={600}>
                    ציון זמני: 75
                </Typography>
            </Box>
        </Grid>
        </>

    );
};

export default StudentContent;