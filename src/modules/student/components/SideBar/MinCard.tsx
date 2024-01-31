import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { themeColors } from '@/styles/mui';

const MinCard = () => {
    return (
        <Card sx={{
            padding:'15px 0px',
            background:'none', 
            color:'white', 
            border:'1px solid white',
            transition: 'background 0.2s', 
            cursor:'pointer',
            '&:hover': {
                background: themeColors.primary,
                border:`1px solid ${themeColors.primary}`,
            }
        }}>
            <Box sx={{textAlign:'center'}}>
                <Typography variant='h5' fontWeight={900}>א</Typography>
            </Box>
            <Box sx={{textAlign:'center'}}>
                <Typography variant='body2' fontWeight={700}>הבנה והבעה</Typography>
            </Box>
        </Card>
    );
};

export default MinCard;