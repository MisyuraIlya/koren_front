'use client'
import useDataExerciseTypes from '@/hooks/useDataExerciseTypes';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useDiratyStore } from '../../store/diary.store';
import { TeacherURLS } from '@/enums/urls';

const Header = () => {
    const {data} = useDataExerciseTypes()
    const location = usePathname()
    const {filter,setFilter} = useDiratyStore()
    
    const handleTitle = () => {
        if(location === TeacherURLS.CLASSES_MISSIONS) {
            return 'משימות כיתתיות'
        } else if(location === TeacherURLS.TO_CHECK) {
            return 'ממתין לבדיקה'
        } else if(location === TeacherURLS.RESTORE) {
            return 'הוחזר לתיקון'
        } else if(location === TeacherURLS.IN_PROCESS) {
            return 'בתהליך עבודה'
        } else if(location === TeacherURLS.LATE_SUBMISSION) {
            return 'באיחור הגשה'
        }
    }

    return (
        <Box sx={{bgcolor:'white', padding:'0 20px', display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center', height:'75px'}}>
            <Typography variant='h5' >
            {handleTitle()}
            </Typography>
            <FormControl sx={{width:'250px'}}>
                <InputLabel id="demo-simple-select-label">סוג מסמך</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="סוג מסמך"
                    onChange={(e) => setFilter(e.target.value as IExerciseEnum )}
                >
                    <MenuItem  value={'הכל'}>{'הכל'}</MenuItem>
                    {data?.map((item,index) =>
                        <MenuItem key={index} value={item?.title}>{item?.title}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Header;