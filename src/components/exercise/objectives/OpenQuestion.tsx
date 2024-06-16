import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { useExercise } from '@/provider/ExerciseProvider';
import { useTeacherWork } from '@/store/work.store';
import ReachTextEditor from '@/utils/ReachTextEditor';
import { Box, IconButton, InputBase, Typography } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';
import { useDebounce } from 'use-debounce';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const OpenQuestion:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    const [value, setValue] = useState('')
    const {handleAnswer, handleManualGrade} = useExercise()
    const [debouncedValue] = useDebounce(value, 5000);
    const { studentChoosed } = useTeacherWork();
    const [grade, setGrade] = useState(objective?.answers[0]?.answers[0]?.gradeToShow ?? 0)

    const handleChangeGrade = async (grade:number) => {
        handleManualGrade(grade,objective?.answers[0]?.answers[0]?.id!)
        setGrade(grade)
    }

    useEffect(() => {
        if (debouncedValue) {
            handleAnswer(
                // @ts-ignore
                objective, 
                debouncedValue,
                false,
                objective?.moduleType
            );
        }
      }, [debouncedValue]);

    useEffect(() => {
        setValue(objective?.answers[0]?.answers[0]?.value);
    }, [studentChoosed]);

    return (
        <th id={`${objective.id}`} className='disbleTh'>
            <Box sx={{padding:'20px'}}>
                <ReachTextEditor value={value} setValue={setValue} placeholder={objective.placeholder}/>

                <Box sx={{position:'absolute', right:'20px', top:'50px'}}>
                    <Box sx={{display:'flex', gap:'5px', border:'1px solid #BACEE9', borderRadius:'5px', justifyContent:'center', alignItems:'center'}}>
                        <IconButton>
                            <AddIcon sx={{color:'black'}}/>
                        </IconButton>
                        <InputBase value={grade}  sx={{textAlign:'center', width:'20px',color:'black', fontWeight:700}} onChange={(e) => handleChangeGrade(+e.target.value)}/>
                        <IconButton>
                            <RemoveIcon sx={{color:'black'}}/>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            
        </th>
    );
};

export default OpenQuestion;