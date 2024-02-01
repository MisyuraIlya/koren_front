import { Box, Card, Grid, Typography } from '@mui/material';
import React, {FC} from 'react';
import { themeColors } from '@/styles/mui';

interface BigCardProps {
    type:string
    title:string
    totalChildren:number
}

const BigCard:FC<BigCardProps> = ({type,title, totalChildren}) => {
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
            marginTop:'10px',
            '&:hover': {
                background: themeColors.primary,
                border:`1px solid ${themeColors.primary}`,
                color:'white'
            }
        }}>
            <Grid container spacing={9}>
                <Grid item xs={2} sx={{position:'relative'}}>
                    <Typography variant='h6'>{type}</Typography>
                </Grid>
                <Grid item xs={8} >
                    <Box>
                        <Typography variant='h6'>{title}</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>{totalChildren} יחידות</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
};

export default BigCard;