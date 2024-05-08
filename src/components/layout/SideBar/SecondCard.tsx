'use client'
import { Box, Card, Typography } from '@mui/material';
import React, { useState } from 'react';
import ThirdCard from './ThirdCard';
import { useCourses } from '@/provider/CourseProvider';
import { useRouter } from 'next/navigation';

const SecondCard = ({item}: {item: ICourse}) => {
    const router = useRouter()
    const {lvl1,lvl2,setClickedLvl3, clickedLvl3} = useCourses()
    return (
        <Box sx={{width:'90%'}}>
            <Card sx={{backgroundColor:'#0172E8', color:'white', borderRadius:'4px', cursor:'pointer'}} onClick={() => {setClickedLvl3(clickedLvl3 == item?.id ? 0 : item?.id!); router.push(`/teacher/courses/${lvl1}/${lvl2}/${item.id}/0/0`)}}>
                <Typography variant='body1' fontWeight={900} textAlign={'center'} sx={{padding:'10px 0px'}}>{item.name}</Typography>
            </Card>
            {clickedLvl3 === item.id && item?.children?.map((item, key) =>
                <Box key={key}>
                    <ThirdCard item={item}/>
                </Box>
            )}
        </Box>

    );
};

export default SecondCard;