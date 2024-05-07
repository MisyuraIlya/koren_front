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
            <Exercise.ExerciseNavBar.Wrapper>
                <Exercise.ExerciseNavBar.StudentContent/>
            </Exercise.ExerciseNavBar.Wrapper>
            <Exercise.ExerciseModule.Tabs/>
            <Exercise.ExerciseModule.Module/>
        </ExerciseProvider>
    );
};

export default page;