"use client"
import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const HomePage = () => {
    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Box>
                <Image src={'/images/teacher/home.png'} alt='home' width={432} height={432}/>
                <Typography align='center' variant='h5' color={'black'} marginBottom={'20px'} fontWeight={700}>ברוכים הבאים,</Typography>
                <Box sx={{textAlign:'center'}}>
                    <Typography variant='body2' color={'black'}>
                    הגעתם לאזור שבו תוכלו ליצור כיתות וקבוצות למידה.
                    </Typography>
                    <Typography variant='body2' color={'black'}>
                    אם בחרת לא לבצע פעולה זו עכשיו, אל דאגה.
                    </Typography>
                    <Typography variant='body2' color={'black'}>
                    אפשר לבצע אותה מהמסך הראשי באִיקון "קבוצות למידה".
                    </Typography>
                </Box>
                <Box sx={{display:'flex', alignContent:'center', justifyContent:'center', marginTop:'20px'}}>
                    <Image src={'/images/teacher/robo.svg'} alt='robo' width={30} height={30}/>
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;