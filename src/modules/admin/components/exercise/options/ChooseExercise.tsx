'use client'
import React, {useState} from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
const ChooseExercise = () => {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
      };
    return (
        <Box>
            <FormControl fullWidth>
                <Select
                    value={age}
                    onChange={handleChange}
                    placeholder='מודול'
                    sx={{background:'white'}}
                >
                    <MenuItem value={10}>מודול שני</MenuItem>
                    <MenuItem value={20}>מודול שני - בנתיבי הצורות</MenuItem>
                    <MenuItem value={30}>מודול שלישי</MenuItem>
                    <MenuItem value={30}>מודול שלישי טאבים</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default ChooseExercise;