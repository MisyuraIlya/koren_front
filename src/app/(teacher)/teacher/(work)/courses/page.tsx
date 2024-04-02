'use client'
import CourseCard from '@/components/work/courses/CourseCard';
import { useCourses } from '@/provider/CourseProvider';
import { Box, Grid } from '@mui/material';
import React from 'react';

const page = () => {
    const {data} = useCourses()
    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
            <Box sx={{width:'60%'}}>
                <Grid container spacing={4}>
                    {data?.map((course) =>
                    <Grid item xs={4}>
                        <CourseCard course={course}/>
                    </Grid>
                    )}
                </Grid>
            </Box>
        </Box>
    );
};

export default page;