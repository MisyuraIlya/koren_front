"use client"
import React from 'react';
import { useAdminExercise } from '../../provider/AdminExerciseProvider';
import Heading from '@/components/heading/Heading';

const ExerciseTitle = () => {
    const {exercise} = useAdminExercise()
    return (
        <>
        <Heading>{exercise?.title}</Heading>
        <div className="border-b border-solid border-2 border-gray-400"></div>
        </>
    );
};

export default ExerciseTitle;