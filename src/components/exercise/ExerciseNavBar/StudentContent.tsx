'use client'
import FeedBack from '@/components/feedback';
import useDataConnectionGroup from '@/hooks/useDataConnectionGroup';
import useMailFeedBack from '@/hooks/useMailFeedBack';
import { useExercise } from '@/provider/ExerciseProvider';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import moment from 'moment';
import React, { useState } from 'react';
import Exercise from '..';

const StudentContent = () => {
    const {exercise} = useExercise()
    const [openFeedBack,setOpenFeedBack] = useState(false)
    const { data: mailFeedBack} = useMailFeedBack()
    return (
        <>
        <Grid item xs={2}>
          
        </Grid>
        <Grid item xs={1.5}>
          
        </Grid>
        <Grid item xs={1}>
        
        </Grid>
        <Grid item xs={2}>
            {exercise?.group &&
             <Box>
                <Typography variant='h6' fontWeight={600}>
                    תרגיל {exercise?.group?.exerciseType?.title}
                </Typography>
                <Grid container spacing={0}>
                    <Grid item xs={4}>
                        <Typography color={'#7D7D7D'}>תאריך הגשה:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        {exercise?.group?.fromDate &&
                            <Typography color={'black'}>{moment(exercise?.group?.fromDate).format('DD-MM-YYYY')}</Typography>
                        }
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
            </Box>
            }
           
        </Grid>
        <Divider orientation="vertical" variant="middle" flexItem sx={{background:'#b3bbbf59', margin:'0 20px'}}/>
        <Grid item xs={1} sx={{display:'flex'}}>
            <Box>
                <Typography variant='h6' fontWeight={600} sx={{whiteSpace:'nowrap'}}>
                    ציון זמני: {(exercise?.histories?.[0]?.grade ?? 0).toFixed(2)}
                </Typography>
                <Button variant='outlined' sx={{display:'flex', alignItems:'center', gap:'10px', marginTop:'20px'}} onClick={() => setOpenFeedBack(true)}>
                    <Box sx={{background:mailFeedBack?.id ? '#07FE4C' : '#ED4136', borderRadius:'50%', height:'10px', width:'10px'}}>

                    </Box>
                יש לך משוב
                </Button>
            </Box>
        </Grid>
        <Exercise.TeacherExercise.ExerciseDrawer.FeedBack open={openFeedBack} setOpen={setOpenFeedBack}/>
        </>

    );
};

export default StudentContent;