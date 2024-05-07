"use client"
import { Box, Grid } from '@mui/material';
import React from 'react';
import Groups from '@/components/groups/inedx'

const MixedTeacherPage = () => {
    return (
        <Box sx={{height:'100%'}}>
            <Grid container spacing={2} sx={{height:'100%'}}>
                <Grid item xs={6}>
                    <Groups.MixedRightSide/>
                </Grid>
                <Grid item xs={6} sx={{ height: '100%', bgcolor: '#F6F8FC' }}>
                    <Groups.MixedLeftSide/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MixedTeacherPage;