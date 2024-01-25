import React from 'react';
import Options from './options';
const ExerciseOptions = () => {
    
    return (
        <div className='grid grid-cols-2 py-10 px-2 relative'>
            <Options.ChooseExercise/>
            <Options.ButtonHandler/>
            <Options.ExistFiles/>
            <Options.SideBar/>
        </div>
    );
};

export default ExerciseOptions;