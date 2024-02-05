import React, {FC} from 'react';
import ReactSelect from 'react-select'
import { useStudentExercise } from '@/modules/student/provider/StudentExerciseProvider';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, FormHelperText, InputLabel, MenuItem, styled } from '@mui/material';

const CustomSelect = styled(Select)(({ isCorrect }: { isCorrect: boolean }) => ({
    width: 300,
    height: 70,
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
    const {exercise} = useStudentExercise()
    const {setValue} = useStudentExercise()
    const [age, setAge] = React.useState('');
    const isCorrect = objective?.answers?.[0]?.answers?.[0]?.isCorrect ?? false;
    console.log('exercise',exercise)

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setAge(event.target.value as string);
    };

    return (
        <>
            <th className={`p-4`} >
       
                <FormControl error={!isCorrect && exercise?.histories[0]?.isDone} >
                    <CustomSelect
                        placeholder={objective.placeholder}
                        value={age}
                        onChange={handleChange}
                        isCorrect={isCorrect && exercise?.histories[0]?.isDone}
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