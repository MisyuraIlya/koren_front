import React from 'react';

interface ExercisePageProps {
    params: {
        exercise: string[]
    }
    searchParams: any
}



const page = async (page: ExercisePageProps) => {
    return (
        <div>
            exercise
        </div>
    );
};

export default page;