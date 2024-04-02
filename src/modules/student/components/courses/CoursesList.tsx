"use client"
import { Box, Grid } from '@mui/material';
import React from 'react';
import { useStudentCourses } from '../../provider/StudentCoursesProvider';
import CourseCard from '../../../../components/work/courses/CourseCard';

const CoursesList = () => {
    const {courses} = useStudentCourses()
    return (
        <Box sx={{width:'100%', marginTop:'50px'}}>
            <Grid container spacing={4}>
                {courses?.map((course) =>
                 <Grid item xs={4}>
                    <CourseCard course={course}/>
                </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default CoursesList;