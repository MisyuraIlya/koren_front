
import Options from '@/components/exercise/ExerciseHeader/Options';
import NavBar from '@/modules/teacher/components/exercise/NavBar';
import { ExerciseProvider } from '@/provider/ExerciseProvider';
import React from 'react';
import Exercise from '@/components/exercise';

interface ExercisePageProps {
    params: {
        exercise: string[]
    }
    searchParams: any
}



const page = async (page: ExercisePageProps) => {
    return (
        <ExerciseProvider courseId={page.params.exercise[4]}>
            <NavBar/>
            <Exercise.ExerciseModule.Tabs/>
            <Exercise.ExerciseModule.Module/>
        </ExerciseProvider>
    );
};

export default page;