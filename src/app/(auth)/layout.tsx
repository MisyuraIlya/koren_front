import React from 'react';
import { Inter } from 'next/font/google'
import { Box,Grid } from '@mui/material';
import RightLayOut from '@/modules/auth/components/RightLayOut';

const inter = Inter({ subsets: ['latin'] })

const AuthLayout = ({children}:{children: React.ReactNode }) => {
    return (
        <body className={inter.className}>
            <Grid container spacing={0}>
                <Grid item xs={4}>
                    <RightLayOut/>
                </Grid>
                <Grid item xs={8} >
                    <Box sx={{background:'white', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </body>
    );
};

export default AuthLayout;