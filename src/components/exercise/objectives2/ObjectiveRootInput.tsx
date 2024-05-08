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
  const {user} = useAuth()

  const handleError = () => {
    if(user?.role === 'teacher'){
      return (
        <Tooltip title={`התשובה היא ${objective?.answers[0]?.value}`}>
          <IconButton>
            <InfoIcon/>
          </IconButton>
        </Tooltip>
      )
    } else {
      if(exercise?.userGroup?.isOpenAnswer && exercise?.userGroup?.isDone){
        return (
          <Tooltip title={`התשובה היא ${objective?.answers[0]?.value}`}>
            <IconButton>
              <InfoIcon/>
            </IconButton>
          </Tooltip>
        )
      }
    }
  }

  const handleBorder = () => {
    if(user?.role === 'teacher'){
      if(objective?.answers[0]?.answers[0]?.isCorrect){
        return '1px solid green'
      } else if(!objective?.answers[0]?.answers[0]?.isCorrect){
        return '1px solid red'
      } else {
        return '1px solid #ced4da'
      }
    } else {
      if(exercise?.userGroup?.isOpenAnswer && exercise?.userGroup?.isDone){
        if(objective?.answers[0]?.answers[0]?.isCorrect){
          return '1px solid green'
        } else if(!objective?.answers[0]?.answers[0]?.isCorrect){
          return '1px solid red'
        } else {
          return '1px solid #ced4da'
        }
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
          border: handleBorder(), 
        }} 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={objective.placeholder}
        
      />  
      {handleError()}
    </th>
  );
};

export default ObjectiveRootInput;
