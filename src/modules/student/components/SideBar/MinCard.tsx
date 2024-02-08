import { Box, Card, Typography } from '@mui/material';
import React, {FC} from 'react';
import { themeColors } from '@/styles/mui';

interface MinCardProps {
    type: string
    title:string
    onClick: () => void
}

const MinCard:FC<MinCardProps> = ({type, title,onClick}) => {
    return (
        <Card sx={{
            padding:'15px 0px',
            background:'none', 
            color:'white', 
            border:'1px solid white',
            transition: 'background 0.2s', 
            marginTop:'10px',
            cursor:'pointer',
            '&:hover': {
                background: themeColors.primary,
                border:`1px solid ${themeColors.primary}`,
            }
        }}
        onClick={() => onClick()}
        >
            <Box sx={{textAlign:'center'}}>
                <Typography variant='h5' fontWeight={900}>{type}</Typography>
            </Box>
            <Box sx={{textAlign:'center'}}>
                <Typography variant='body2' fontWeight={700}>{title}</Typography>
            </Box>
        </Card>
    );
};

export default MinCard;