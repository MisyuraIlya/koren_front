import { useTeacherWork } from '@/store/work.store';
import { useExercise } from '@/provider/ExerciseProvider';
import { IconButton, Input, InputBase, Tooltip } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import InfoIcon from '@mui/icons-material/Info';
import { useAuth } from '@/modules/auth/store/auth.store';

const ObjectiveInput: FC<IObjectiveModule>  = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

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
          if(objective?.answers[0]?.value === 'E'){
            if(objective?.answers[0].answers.length === 0 || objective?.answers[0].answers[0]?.value == '') {
              return '1px solid green'
            }
          }
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
      if(debouncedValue && debouncedValue !== objective?.answers[0]?.answers[0]?.value ){
        handleAnswer(objective.answers[0],debouncedValue)
      }
      handleError()
    },[debouncedValue])
    
    useEffect(() => {
      setValue(objective?.answers[0]?.answers[0]?.value ?? '')
    },[studentChoosed])

    return (
        <th key={objectiveIndex} id={`${objective.id}`}>
          <InputBase 
            sx={{
                background:'white', 
                borderRadius:'5px', 
                padding:'5px', 
                margin:'10px',
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

export default ObjectiveInput;