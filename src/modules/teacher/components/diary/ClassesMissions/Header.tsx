import useDataExerciseTypes from '@/modules/teacher/hooks/useDataExerciseTypes';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
    const {data} = useDataExerciseTypes()
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };

    return (
        <Box sx={{bgcolor:'white', padding:'0 20px', display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center', height:'75px'}}>
            <Typography variant='h5' >
            משימות כיתתיות
            </Typography>
            <FormControl sx={{width:'250px'}}>
                <InputLabel id="demo-simple-select-label">סוג מסמך</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="סוג מסמך"
                    onChange={handleChange}
                >
                    {data?.map((item,index) =>
                        <MenuItem key={index} value={10}>{item?.title}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Header;