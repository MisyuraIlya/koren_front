import React, { FC, useEffect, useState } from 'react';
import { IconButton, InputBase, Tooltip, Typography } from '@mui/material';
import { useDebounce } from 'use-debounce';
import { useExercise } from '@/provider/ExerciseProvider';
import { useTeacherWork } from '@/store/work.store';
import InfoIcon from '@mui/icons-material/Info';
import { useAuth } from '@/modules/auth/store/auth.store';
const ObjectiveRootInput: FC<IObjectiveModule> = ({ objective, tabIndex, taskIndex, rowIndex, objectiveIndex }) => {
  const [value, setValue] = useState('');
  const [debouncedValue] = useDebounce(value, 5000);
  const {handleAnswer,exercise} = useExercise()
  const {studentChoosed} = useTeacherWork()
  const [error, setError] = useState(false);
  const {user} = useAuth()

  const handleError = () => {
    if(user?.role === 'teacher'){
      setError(!objective?.answers[0]?.answers[0]?.isCorrect)
    } else {
      if(exercise?.userGroup?.isOpenAnswer){
        setError(!objective?.answers[0]?.answers[0]?.isCorrect)
      }
    }
  }


  useEffect(() => {
    if(debouncedValue && debouncedValue !== objective?.answers[0]?.answers[0]?.value){
      handleAnswer(objective.answers[0],debouncedValue)
    }
    handleError()
  },[debouncedValue])
  
  useEffect(() => {
    setValue(objective?.answers[0]?.answers[0]?.value ?? '')
  },[studentChoosed])

  return (
    <th key={objectiveIndex}>
      <InputBase 
        sx={{
          background: 'white', 
          borderRadius: '5px', 
          padding: '5px', 
          margin: '10px',
          border: error ? '1px solid red' : '1px solid #ced4da', 
        }} 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={objective.placeholder}
        
      />  
      {error && 
      <Tooltip title={`התשובה היא ${objective?.answers[0]?.value}`}>
        <IconButton>
          <InfoIcon/>
        </IconButton>
      </Tooltip>
      }
    </th>
  );
};

export default ObjectiveRootInput;
