import Grades from '@/components/grades';
import { Box, Typography } from '@mui/material';
import React from 'react';

const GragdesPage = () => {
    return (
        <Box sx={{padding:'180px 40px'}}>
            <Typography variant='h2' fontWeight={700} fontSize={'24px'}>
                ציונים
            </Typography>
            <Grades.GradeTabs/>
            <Grades.GradeFilters/>
            <Grades.GradeColors/>
            <Grades.GradeTable/>
        </Box>
    );
};

export default GragdesPage;