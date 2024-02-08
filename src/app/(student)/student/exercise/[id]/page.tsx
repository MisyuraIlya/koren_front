'use clinet'
import React, {FC} from 'react';
import { StudentExerciseProvider } from '@/modules/student/provider/StudentExerciseProvider';
import Exercise from '@/modules/student/components/exercise';
import { Box } from '@mui/material';
import Options from '@/modules/student/components/exercise/ExerciseHeader/Options';
import ExerciseHeader from '@/modules/student/components/exercise/ExerciseHeader/ExerciseHeader';

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
            <ExerciseHeader/>
            <Box sx={{width:'100%', justifyContent:'left', display:'flex', paddingTop:'130px'}}>
                <Options/>
            </Box>
            <Box sx={{width:'100%'}}>
                <Exercise.ExerciseModule.Tabs/>
                <Exercise.ExerciseModule.Module/>
            </Box>
        </StudentExerciseProvider>
    );
};

export default ExercisePage;