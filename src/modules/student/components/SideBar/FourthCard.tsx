import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { themeColors } from '@/styles/mui';
import MenuBookIcon from '@mui/icons-material/MenuBook';
const FourthCard = ({item} : {item: ICourse}) => {
    return (
        <Box sx={{marginTop:'10px'}}>
            <Card sx={{
                background:'#EFF7F7',
                color:'black',
                cursor:'pointer',
                '&:hover': {
                    background: themeColors.primary,
                    color:'white',
                }
            }}>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', padding:'20px 0px', gap:'10px'}}>
                    <MenuBookIcon/>
                    <Typography variant='body2'>{item?.name}</Typography>
                </Box>
            </Card>
        </Box>
    );
};

export default FourthCard;