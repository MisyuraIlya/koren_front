"use client"
import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
const LoginDescription = () => {
    return (
        <Box>
            <Image src={'/images/frame.svg'}  width={43} height={40} alt='frame' priority />
            <Typography variant='h1' fontSize={40} fontWeight={900}>הי, ברוכים הבאים</Typography>
            <Typography sx={{marginTop:'20px'}} variant='body1'>אתה יכול להיכנס למערכת באמצעות דואר אלקטרוני וסיסמה, מקושר בחשבון או באמצעות כניסה יחידה לחשבון הארגון שלך</Typography>
        </Box>
       
    );
};

export default LoginDescription;