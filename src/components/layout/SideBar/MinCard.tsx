import { Box, Card, Typography } from '@mui/material';
import React, {FC} from 'react';
import { themeColors } from '@/styles/mui';
import { useCourses } from '@/provider/CourseProvider';

interface MinCardProps {
    index: number
    item:ICourse
    onClick: () => void
}

const MinCard:FC<MinCardProps> = ({index, item, onClick}) => {
    const {lvl2} = useCourses()
    const convertToHebrew = (index: number) => {
        const hebrewAlphabet = 'אבגדהוזחטיכלמנסעפצקרשת';
        return hebrewAlphabet[index];
    };

      
    return (
        <Card sx={{
            background:lvl2 == item.id ? themeColors.primary :'none', 
            color:'white', 
            border: lvl2 == item.id ? `1px solid ${themeColors.primary}` :'1px solid white', 
            transition: 'background 0.2s', 
            marginTop:'10px',
            minHeight:'80px',
            display:'flex',
            borderRadius:'8px',
            justifyContent:'center',
            alignItems:'center',
            cursor:'pointer',
            '&:hover': {
                background: themeColors.primary,
                border:`1px solid ${themeColors.primary}`,
            }
        }}
        onClick={() => onClick()}
        >
            <Box sx={{padding:'0 2px'}}>
                <Box sx={{textAlign:'center'}}>
                    <Typography variant='h5' fontWeight={900}>{convertToHebrew(index)}</Typography>
                </Box>
                <Box sx={{textAlign:'center'}}>
                    <Typography variant='body2' fontSize={'12px'} lineHeight={'12px'} fontWeight={500} sx={{whiteSpace:'break-spaces'}}>{item.name}</Typography>
                </Box>
            </Box>
        </Card>
    );
};

export default MinCard;