import React from 'react';
import useDataTeacherConnectionGroup from '../../../hooks/useDataTeacherConnectionGroup';
import { Box } from '@mui/material';
import ToCheckCard from './ToCheckCard';

const ToCheckList = () => {
    const {data} = useDataTeacherConnectionGroup()
    return (
        <Box sx={{padding:'20px 30px'}}>
            {data?.map((item) => 
                <ToCheckCard item={item}/>
            )}
        </Box>
    );
};

export default ToCheckList;