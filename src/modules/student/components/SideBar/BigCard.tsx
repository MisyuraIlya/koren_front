import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { themeColors } from '@/styles/mui';
const BigCard = () => {
    return (
        <Card sx={{
            backgroundColor:'white', 
            width:'100%', 
            height:'70px',
            padding:'10px', 
            background:'#EFF7F7',
            cursor:'pointer',
            transition: 'background 0.2s', 
            borderRadius:'4px',
            '&:hover': {
                background: themeColors.primary,
                border:`1px solid ${themeColors.primary}`,
                color:'white'
            }
        }}>
            <Grid container spacing={9}>
                <Grid item xs={2} sx={{position:'relative'}}>
                    <Typography variant='h6'>פרק א</Typography>
                </Grid>
                <Grid item xs={8} >
                    <Box>
                        <Typography variant='h6'>הבנה והבעה</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>4 יחידות</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
};

export default BigCard;