import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import { Box, Grid } from '@mui/material';
import { useStudentCourses } from '../../provider/StudentCoursesProvider';
const CoursesPageComponent = ({ children }: { children: React.ReactNode }) => {
    const {lvl1Id} = useStudentCourses()
    return (
        <Box>
            <Header/>
            <Grid container spacing={2}>
                {lvl1Id &&
                <Grid item xs={2} sx={{position:'relative'}}>
                    <SideBar/>
                </Grid>
                }

                <Grid item xs={lvl1Id ? 10 : 12} sx={{marginTop:'120px'}}>
                {children}
                </Grid>
            </Grid>
        </Box>
    );
};

export default CoursesPageComponent;