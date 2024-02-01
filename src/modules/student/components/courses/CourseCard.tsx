"use client"
import { Box, Card, Typography } from '@mui/material';
import React, { FC } from 'react';
import { themeColors } from '@/styles/mui';
import { useRouter } from 'next/navigation';
interface CourseCardProps {
    course: ICourse;
}
const CourseCard:FC<CourseCardProps> = ({course}) => {

    const router = useRouter()

    const dropShadowStyle = {
        background: '#39C7BB21',
    };

    return (
        <Card 
            style={dropShadowStyle} 
            sx={{position:'relative', width:'300px', height:'300px', cursor:'pointer'}} 
            elevation={4}
            onClick={() => router.push(`/student/courses/${course?.id}`)}
        >
            <Box sx={{marginTop:'50px'}}>
                <Typography variant='h5' fontWeight={900} textAlign={'center'}>
                    {course?.name}
                </Typography>
            </Box>
            <Box sx={{
                    position:'absolute', 
                    bottom:'0', 
                    height: '50px', 
                    background:themeColors.primary, 
                    width:'100%',
                    color:'white',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
            }}>
                <Typography variant='body2' fontWeight={700} sx={{textAlign:'center'}}>
                    {`כניסה לקורס >> `}
                </Typography>
            </Box>
        </Card>
    );
};

export default CourseCard;