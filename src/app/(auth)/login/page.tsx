"use client"
import React from 'react';
import Auth from '@/modules/auth';
import { Box } from '@mui/material';

const page = () => {
    return (
      <Box sx={{width:'60%'}}>
          <Auth.Description.LoginDescription/>
          <Auth.Forms.LoginForm/>
      </Box>
    );
};

export default page;