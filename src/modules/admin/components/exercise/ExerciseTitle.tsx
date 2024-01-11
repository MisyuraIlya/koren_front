"use client"
import React from 'react';
import { useAdminExerciseProvider } from '../../provider/AdminExerciseProvider';
import Heading from '@/components/heading/Heading';

const ExerciseTitle = () => {
    const {exercise} = useAdminExerciseProvider()
    return (
        <>
        <Heading>{exercise?.title}</Heading>
        <div className="border-b border-solid border-2 border-gray-400"></div>
        </>
    );
};

export default ExerciseTitle;