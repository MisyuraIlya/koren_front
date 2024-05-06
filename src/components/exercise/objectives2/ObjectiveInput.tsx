import { useTeacherWork } from '@/modules/teacher/store/work.store';
import { useExercise } from '@/provider/ExerciseProvider';
import { Input, InputBase } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const ObjectiveInput: FC<IObjectiveModule>  = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    const [value, setValue] = useState('');
    const [debouncedValue] = useDebounce(value, 5000);
    const {handleAnswer} = useExercise()
    const {studentChoosed} = useTeacherWork()
    useEffect(() => {
      if(debouncedValue){
        handleAnswer(objective.answers[0],debouncedValue)
      }
    },[debouncedValue])
    
    useEffect(() => {
      setValue(objective?.answers[0]?.answers[0]?.value ?? '')
    },[studentChoosed])

    return (
        <th key={objectiveIndex}>
          <InputBase 
            sx={{
                background:'white', 
                borderRadius:'5px', 
                padding:'5px', 
                margin:'10px',
            }} 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={objective.placeholder}
          />  
        </th>
    );
};

export default ObjectiveInput;