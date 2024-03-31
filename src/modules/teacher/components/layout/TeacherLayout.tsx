import { Box, Grid } from '@mui/material';
import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header/>
            {children}
        </Box>
    );
};

export default TeacherLayout;
