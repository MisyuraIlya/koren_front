import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';

const StudentLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header/>
            {children}
        </Box>
    );
};

export default StudentLayout;