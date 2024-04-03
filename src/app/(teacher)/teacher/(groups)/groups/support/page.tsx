"use client"
import LeftSide from '@/modules/teacher/components/classes/LeftSide';
import RightSide from '@/modules/teacher/components/classes/RightSide';
import { Box, Grid } from '@mui/material';
import React from 'react';
import Groups from '@/modules/teacher/components/groups/inedx'
const SuppoertPage = () => {
    return (
        <Box sx={{height:'100%'}}>
            <Grid container spacing={2} sx={{height:'100%'}}>
                <Grid item xs={6}>
                    <Groups.SupportRightSide/>
                </Grid>
                <Grid item xs={6} sx={{ height: '100%', bgcolor: '#F6F8FC' }}>
                    <Groups.SupportLeftSide/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SuppoertPage;