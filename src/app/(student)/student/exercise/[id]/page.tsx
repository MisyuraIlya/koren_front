'use clinet'
import React, {FC} from 'react';
import { StudentExerciseProvider } from '@/modules/student/provider/StudentExerciseProvider';
import Exercise from '@/modules/student/components/exercise';
import { Box, Grid, Paper } from '@mui/material';

interface ExercisePageProps {
    params: {
        id: string
    }
    searchParams: {
 
    }
}

const ExercisePage:FC<ExercisePageProps> =  async ({params}) => {
    return (
        <StudentExerciseProvider courseId={params.id}>
            <Paper elevation={4} sx={{padding:'20px 50px'}}>
                <Grid container spacing={2}>
                    <Grid item md={5}>
                        <Exercise.ExerciseHeader.Description/>
                    </Grid>
                    <Grid item  md={4}>
                        <Exercise.ExerciseHeader.Utils/>
                    </Grid>
                    <Grid item md={3}>
                        <Exercise.ExerciseHeader.Grade/>
                    </Grid>
                </Grid>
            </Paper>
            <Box sx={{width:'100%', justifyContent:'left', display:'flex'}}>
                <Exercise.ExerciseHeader.Options/>
            </Box>
            <Exercise.ExerciseModule.Tabs/>
        </StudentExerciseProvider>
    );
};

export default ExercisePage;