import Diary from '@/modules/teacher/components/diary';
import { Box } from '@mui/material';
import React from 'react';
const page = () => {
    return (
        <>
        <Box sx={{width:'585px', bgcolor:'#F6F8FC', height:'100%'}}>
            <Diary.Header/>
            <Diary.ListDiary/>
        </Box>
        <Diary.ListStudents/>
        </>

    );
};

export default page;