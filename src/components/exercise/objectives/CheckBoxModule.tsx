import { useExercise } from '@/provider/ExerciseProvider';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import React, { FC, useState, useEffect } from 'react';

const CheckBoxModule: FC<IObjectiveModule> = ({ objective }) => {
    const {handleAnswer,exercise} = useExercise()

    const [checkboxState, setCheckboxState] = useState(
        objective.values?.map(item => ({
            id: item.id,
            isChecked: false,
            value: item.value
        })) || []
    );

    const handleAnswers = () => {
        const answers = objective?.answers[0]?.answers[0]?.value?.split(';') || [];
    
        const updatedCheckboxState = checkboxState.map(item => {
            if (answers.includes(item.value)) {
                return { ...item, isChecked: true };
            } else {
                return item;
            }
        });
        setCheckboxState(updatedCheckboxState);
    }

    useEffect(() => {
        handleAnswers()
    }, [checkboxState]);

    const handleCheckboxChange = (id: number) => {
        const newState = checkboxState.map(item =>
            item.id === id ? { ...item, isChecked: !item.isChecked } : item
        );
        setCheckboxState(newState);
        const checkedValues = newState
        .filter(item => item.isChecked)
        .map(item => item.value)
        .join(';');

        handleAnswer(objective.answers[0],checkedValues)
    };

    return (
        <th className='disableTh' id={`${objective.id}`}>
            <Box sx={{ padding: '0 20px' }}>
                {checkboxState.map((item, index) => (
                    <Box key={index} sx={{ width: '100%' }}>
                        <FormControlLabel
                            sx={{ width: '100%' }}
                            control={
                                <Checkbox
                                    checked={item.isChecked}
                                    onChange={() => handleCheckboxChange(item.id!)}
                                />
                            }
                            label={item.value}
                        />
                    </Box>
                ))}
            </Box>
        </th>
    );
};

export default CheckBoxModule;
