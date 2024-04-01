import NavBar from '@/modules/teacher/components/exercise/NavBar';
import React from 'react';

interface ExercisePageProps {
    params: {
        exercise: string[]
    }
    searchParams: any
}



const page = async (page: ExercisePageProps) => {
    return (
        <>
            <NavBar/>
        </>
    );
};

export default page;