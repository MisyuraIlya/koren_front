import React, {FC, useEffect} from 'react';
import ReactSelect from 'react-select'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, FormHelperText, IconButton, InputLabel, MenuItem, styled, Tooltip } from '@mui/material';
import { useExercise } from '@/provider/ExerciseProvider';
import { useAuth } from '@/modules/auth/store/auth.store';
import InfoIcon from '@mui/icons-material/Info';

const CustomSelect = styled(Select)(({ borderColor }: { borderColor: string }) => ({
    width: 250,
    height: 70,
    fontSize:'23px',
    '&.MuiOutlinedInput-root': {

      '& fieldset': {
        borderColor: borderColor,
      },
    },
    '& .MuiInputBase-input': {
      paddingTop: '38px',
    },
    '& .MuiSvgIcon-root': {
      top: '50%',
    },
  }));
  

const SelectModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    const {exercise,handleAnswer, borderHandler} = useExercise()
    const isCorrect = objective?.answers?.[0]?.answers?.[0]?.isCorrect ?? false;
    const isDone = exercise?.histories[0]?.isDone ?? false;
    const {user} = useAuth()
    const [answer, setAnswer] = React.useState('');
    
    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setAnswer(event.target.value as string);
        handleAnswer(objective.answers[0],event.target.value as string)
    };

    useEffect(() => {
        const StudentAnswer = objective?.answers?.[0]?.answers[0]?.value 
        setAnswer(StudentAnswer)
    },[exercise])

    return (
        <>
            <th className={`p-4 `} key={objectiveIndex} id={`${objective.id}`}>
                {(user?.role === 'teacher' || exercise?.group?.students[0]?.isOpenAnswer) &&
                <Tooltip title={`תשובה: ${objective?.answers[0]?.value}`} sx={{mt:'20px'}}>
                    <IconButton>
                        <InfoIcon color='info'/>
                    </IconButton>
                </Tooltip>

                }
                <FormControl error={!isCorrect && exercise?.histories[0]?.isDone}>
                    <CustomSelect
                        placeholder={objective.placeholder}
                        value={answer}
                        onChange={handleChange}
                        borderColor={borderHandler(objective)}
                    >
                        <MenuItem value="">
                            <em>בחירה</em>
                        </MenuItem>
                        {objective?.values?.map((item, key) =>
                        <MenuItem value={item.value} key={key}>{item.value}</MenuItem>
                        )}
                    </CustomSelect>
                    {!isCorrect &&  exercise?.histories[0]?.isDone &&
                        <FormHelperText>שגיאה</FormHelperText>
                    }
                </FormControl>
            </th>
        </>
    );
};

export default SelectModule;