"use client"
import { Box } from '@mui/material';
import React from 'react';
import Courses from '@/modules/student/components/courses';

const CoursesPage = () => {
    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Box sx={{marginTop:'5%'}}>
                <Courses.CoursesTitle/>
                <Courses.CoursesList/>
            </Box>
        </Box>
    );
};

export default CoursesPage;