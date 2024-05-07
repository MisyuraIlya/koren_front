"use client"
import LeftSide from '@/components/classes/LeftSide';
import RightSide from '@/components/classes/RightSide';
import { Box, Grid } from '@mui/material';
import React from 'react';

const ClassesPage = () => {
    return (
        <Box sx={{height:'100%'}}>
            <Grid container spacing={2} sx={{height:'100%'}}>
                <Grid item xs={6}>
                    <RightSide/>
                </Grid>
                <Grid item xs={6} sx={{ height: '100%', bgcolor: '#F6F8FC' }}>
                    <LeftSide/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ClassesPage;