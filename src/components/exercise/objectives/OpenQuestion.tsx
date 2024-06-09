import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { useExercise } from '@/provider/ExerciseProvider';
import { useTeacherWork } from '@/store/work.store';
import ReachTextEditor from '@/utils/ReachTextEditor';
import { Box } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';
import { useDebounce } from 'use-debounce';

const OpenQuestion:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    const [value, setValue] = useState('')
    const {handleAnswer} = useExercise()
    const [debouncedValue] = useDebounce(value, 5000);
    const { studentChoosed } = useTeacherWork();

    useEffect(() => {
        if (debouncedValue) {
        }
      }, [debouncedValue]);

    useEffect(() => {
        setValue(objective?.answers[0]?.answers[0]?.value);
    }, [studentChoosed]);

    return (
        <th id={`${objective.id}`}>
            <Box sx={{padding:'20px'}}>
                <ReachTextEditor value={value} setValue={setValue} placeholder={objective.placeholder}/>
            </Box>
        </th>
    );
};

export default OpenQuestion;