'use client'
import React from 'react';
import Module from './module';
import { useAdminExercise } from '../../provider/AdminExerciseProvider';
const ExerciseModule = () => {
    const {exercise} = useAdminExercise()
    return (
        <div style={{boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.25)', marginLeft:'15px'}}>
            {exercise?.tabs.length > 0 && <Module.ExerciseTabs />}
            {exercise?.tabs.map((item, tabIndex) => (
                <Module.MainModule key={tabIndex} item={item} tabIndex={tabIndex} />
            ))}
        </div>
    );
};

export default ExerciseModule;