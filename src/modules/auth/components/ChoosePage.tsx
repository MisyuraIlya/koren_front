"use client"
import { Box, Typography } from '@mui/material';
import React from 'react';
import AuthCard from './AuthCard';
import Auth from '..';
import House from '@/../public/images/auth/house.svg';
import Avatar from '@/../public/images/auth/avatar.svg';
import Image from 'next/image';
import {AuthURLS} from '@/enums/urls';
const ChoosePage = () => {
    return (
        <Box sx={{marginBottom:'100px'}}>
            <Image src={'/images/frame.svg'} width={43} height={40} alt='frame' priority className='absolute top-40'/>
            <Typography variant='h4' color={'primary'} fontWeight={800} sx={{marginBottom:'50px'}}>איך תרצו להתחבר?</Typography>
            <Box sx={{margin:'20px 0px'}}>
                <AuthCard title='כניסה בית ספרית' image={'images/auth/house'} link={AuthURLS.LOGIN}/>
            </Box>
            <Box sx={{margin:'20px 0px'}}>
                <AuthCard title='משתמש פרטי' image={'images/auth/avatar'} link={AuthURLS.LOGIN}/>
            </Box>
        </Box>
    );
};

export default ChoosePage;