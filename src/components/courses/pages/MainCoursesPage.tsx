'use client'
import CourseCard from '../CourseCard';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useCourses } from '@/provider/CourseProvider';
import { useAuth } from '@/modules/auth/store/auth.store';

const MainCoursesPage = () => {
    const {data} = useCourses()
    const {user} = useAuth()
    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
            <Box>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Box>
                        <Typography variant='h6' textAlign={'center'}>
                            צהריים טובים, {user?.firstName}
                        </Typography>
                        <Typography variant='body1' textAlign={'center'}>
                        כיף שבאת. מכאן מתחילים
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%', paddingTop:'40px'}}>
                    <Box>
                        <Grid container spacing={4}>
                            {data && Array.isArray(data) && data?.map((course) =>
                            <Grid item xs={4}>
                                <CourseCard course={course}/>
                            </Grid>
                            )}
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
     
    );
};

export default MainCoursesPage;