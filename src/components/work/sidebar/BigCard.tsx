'use client'
import { Box, Card, Grid, Typography } from '@mui/material';
import React, {FC} from 'react';
import { themeColors } from '@/styles/mui';
import { useCourses } from '@/provider/CourseProvider';
import { useRouter } from 'next/navigation';

interface BigCardProps {
    index: number
    item: ICourse
    totalChildren: number
}

const BigCard:FC<BigCardProps> = ({index,item, totalChildren}) => {
    const router = useRouter()
    const {lvl1} = useCourses()
        const convertToHebrew = (index: number) => {
        const hebrewAlphabet = 'אבגדהוזחטיכלמנסעפצקרשת';
        return hebrewAlphabet[index];
    };
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
        }}
        onClick={() => router.push(`/teacher/courses/${lvl1}/${item.id}/0/0/0`)}
        >
            <Grid container spacing={9}>
                <Grid item xs={2} sx={{position:'relative'}}>
                    <Typography variant='h6'>{convertToHebrew(index)}</Typography>
                </Grid>
                <Grid item xs={8} >
                    <Box>
                        <Typography variant='h6'>{item.name}</Typography>
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