'use client'
import CourseCard from '../CourseCard';
import { Box, Grid } from '@mui/material';
import React from 'react';
import { useCourses } from '@/provider/CourseProvider';

const MainCoursesPage = () => {
    const {data} = useCourses()
    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
            <Box sx={{width:'60%'}}>
                <Grid container spacing={4}>
                    {data && Array.isArray(data) && data?.map((course) =>
                    <Grid item xs={4}>
                        <CourseCard course={course}/>
                    </Grid>
                    )}
                </Grid>
            </Box>
        </Box>
    );
};

export default MainCoursesPage;