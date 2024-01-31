"use client"
import { useAuth } from '@/modules/auth/store/auth.store';
import { Box, Typography } from '@mui/material';
import React from 'react';

const CoursesTitle = () => {
    const {user} = useAuth()
    return (
        <Box>
            <Typography textAlign={'center'} fontWeight={500} fontSize={25} variant='h4'>צהריים טובים, {user?.firstName}</Typography>
            <Typography textAlign={'center'} fontWeight={500} fontSize={25} variant='h4'>כיף שבאת. מכאן מתחילים</Typography>
        </Box>
    );
};

export default CoursesTitle;