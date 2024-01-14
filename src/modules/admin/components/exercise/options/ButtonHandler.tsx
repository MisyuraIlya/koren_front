"use client"
import React from 'react';
import { Button, Box } from '@mui/material';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
const ButtonHandler = () => {
    const {uploadXl, setFileChoosed} = useAdminExercise()
    return (
        <Box sx={{display:'flex', gap:'10px'}}>
            <Button color='primary' sx={{minWidth:'150px', fontSize:'18px'}} variant='contained' >בחר קובץ</Button>
            <Button color='primary' sx={{minWidth:'150px', fontSize:'18px'}} variant='contained' onClick={() => uploadXl()}>העלה</Button>
            <Button color='success' sx={{minWidth:'150px', fontSize:'18px'}} variant='contained' type='submit'>שמור</Button>
        </Box>
    );
};

export default ButtonHandler;