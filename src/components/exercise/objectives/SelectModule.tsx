import React, {FC} from 'react';
import ReactSelect from 'react-select'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, FormHelperText, InputLabel, MenuItem, styled } from '@mui/material';
import { useExercise } from '@/provider/ExerciseProvider';

const CustomSelect = styled(Select)(({ isCorrect }: { isCorrect: boolean }) => ({
    width: 400,
    height: 70,
    fontSize:'23px',
    '&.MuiOutlinedInput-root': {

      '& fieldset': {
        borderColor: isCorrect ? 'green' : 'initial',
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
    const {exercise,handleAnswer} = useExercise()
    const isCorrect = objective?.answers?.[0]?.answers?.[0]?.isCorrect ?? false;
    const isDone = exercise?.histories[0]?.isDone ?? false;
    const StudentAnswer = objective?.answers?.[0]?.answers[0]?.value ?? ''


    const [answer, setAnswer] = React.useState(StudentAnswer);
    
    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setAnswer(event.target.value as string);
        handleAnswer(objective.answers[0],event.target.value as string)
    };

    return (
        <>
            <th className={`p-4`} key={objectiveIndex}>
       
                <FormControl error={!isCorrect && exercise?.histories[0]?.isDone} >
                    <CustomSelect
                        placeholder={objective.placeholder}
                        value={answer}
                        onChange={handleChange}
                        isCorrect={isCorrect && isDone}
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