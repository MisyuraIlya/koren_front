import Grades from '@/components/grades';
import { Box } from '@mui/material';
import React from 'react';

const GragdesPage = () => {
    return (
        <Box sx={{marginTop:'180px'}}>
            <Grades.GradeTabs/>
            <Grades.GradeFilters/>
            <Grades.GradeTable/>
        </Box>
    );
};

export default GragdesPage;