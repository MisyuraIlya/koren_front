"use client"
import { Box, Card, Typography } from '@mui/material';
import React, { FC } from 'react';
import { themeColors } from '@/styles/mui';
import { useRouter } from 'next/navigation';
import { useGlobalCourses } from '@/store/globalCourses';
import Image from 'next/image';
interface CourseCardProps {
    course: ICourse;
}
const CourseCard:FC<CourseCardProps> = ({course}) => {
    const {setMainCourse} = useGlobalCourses()
    const router = useRouter()

    return (
        <Card 
            sx={{position:'relative', width:'300px', height:'400px', cursor:'pointer', background:course.bgColor}} 
            elevation={4}
            onClick={() => {router.push(`/teacher/courses/${course?.id}/0/0/0/0`); setMainCourse(course)}}
        >
            <Box sx={{height:'60px', justifyContent:'space-between', width:'100%'}}>
                <Box>
                    <Image src={`/images/licen.svg`} width={50} height={80} alt='licen'/>
                </Box>
             
            </Box>
            <Box sx={{height:'30px', marginTop:'50px'}}>
                <Typography variant='h5' fontWeight={900} textAlign={'center'} sx={{color:'white'}}>
                    {course?.name}
                </Typography>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
                <Image src={`/images/${course.image}`} width={200} height={150} alt='bg'/>
            </Box>
            <Box sx={{backgroundColor:course.color, color:'white', position:'absolute', width:'100%', bottom:'0'}}>
                <Typography variant='body2' fontWeight={700} sx={{textAlign:'center', padding:'10px 0'}}>
                    {`כניסה לקורס >> `}
                </Typography>
            </Box>
        </Card>
    );
};

export default CourseCard;