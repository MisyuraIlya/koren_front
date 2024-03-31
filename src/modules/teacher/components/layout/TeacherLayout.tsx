import { Box, Grid } from '@mui/material';
import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header/>
            <Box sx={{ flex: 1 }}>
                <Grid container spacing={2} sx={{ marginTop: '70px', height: '100%' }}>
                    <Grid item xs={3} sx={{ background: '#F6F8FC', height: '100%' }}>
                        <SideBar/>
                    </Grid>
                    <Grid item xs={9} sx={{ background: 'white', height: '100%' }}>
                        {children}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default TeacherLayout;
