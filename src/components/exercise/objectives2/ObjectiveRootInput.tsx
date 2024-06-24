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
  const { handleAnswer, exercise, borderHandler } = useExercise();
  const { studentChoosed } = useTeacherWork();
  const { user } = useAuth();
  const length = objective?.answers[0]?.value.split('-').length;

  const handleError = () => {
    if (user?.role === 'teacher' || (exercise?.userGroup?.isOpenAnswer && exercise?.userGroup?.isDone)) {
      return (
        <Tooltip title={`התשובה היא ${objective?.answers[0]?.value}`}>
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      );
    }
    return null;
  };



  useEffect(() => {
    if (debouncedValue && debouncedValue !== objective?.answers[0]?.answers[0]?.value) {
      handleAnswer(objective.answers[0], debouncedValue);
    }
    handleError();
  }, [debouncedValue]);

  useEffect(() => {
    setValue(objective?.answers[0]?.answers[0]?.value ?? '');
  }, [studentChoosed]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const deletHyphens = value.replace(/-/g, '')
    const data = deletHyphens.split('').join('-');
    setValue(data)
  };
  
  return (
    <th key={objectiveIndex} id={`${objective.id}`}>
      <InputBase
        sx={{
          background: 'white',
          borderRadius: '5px',
          padding: '5px',
          margin: '10px',
          border: `1px solid ${borderHandler(objective)}`,
          '& input': {
            textAlign: 'center',
            fontSize: '20px'
          }
        }}
        value={value}
        onChange={handleChange}
        placeholder={Array(length).fill('x').join('-')}
      />
      {handleError()}
    </th>
  );
};

export default ObjectiveRootInput;
