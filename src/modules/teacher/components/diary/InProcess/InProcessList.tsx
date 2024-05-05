import React, { useState } from 'react';
import useDataTeacherConnectionGroup from '../../../hooks/useDataTeacherConnectionGroup';
import { Box } from '@mui/material';
import InProcessCard from './InProcessCard';
import { useDiratyStore } from '@/modules/teacher/store/diary.store';

const InProcessList = () => {
    const {data} = useDataTeacherConnectionGroup()
    return (
        <Box sx={{padding:'20px 30px'}}>
            {data?.map((item) => 
                <InProcessCard item={item}/>
            )}
        </Box> 

    );
};

export default InProcessList;