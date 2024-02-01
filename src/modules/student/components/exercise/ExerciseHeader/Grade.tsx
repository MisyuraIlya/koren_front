'use client'
import { Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';

const Grade = () => {
    return (
        <Box sx={{display:'flex', gap:'20px', height:'100%'}}>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:"center"}}>
                <Box>
                    <Typography variant='body1' fontWeight={900}>מבדק</Typography>
                    <Typography variant='body2'>תאריך הגשה: 13/3/2023</Typography>
                    <Typography variant='body2'>שעת הגשה: 14:00</Typography>
                </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box sx={{display:'flex', justifyContent:'center', alignItems:"center"}}>
                <Box >
                    <Typography variant='body2'>ציון זמני: 75</Typography>
                    <Paper sx={{background:'none', border:'1px solid #BDD0EA', borderRadius:'4px'}} elevation={0}>
                        <Typography sx={{padding:'3px 15px'}}>יש לך משוב</Typography>
                    </Paper> 
                </Box>
            </Box>
        </Box>
    );
};

export default Grade;