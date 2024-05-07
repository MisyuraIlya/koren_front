'use client'
import { Box, Card, Typography } from '@mui/material';
import React, { useState } from 'react';
import ThirdCard from './ThirdCard';
import { useCourses } from '@/provider/CourseProvider';
import { useRouter } from 'next/navigation';

const SecondCard = ({item}: {item: ICourse}) => {
    const [clicked, setClicked] = useState(false)
    const router = useRouter()
    const {lvl1,lvl2} = useCourses()
    return (
        <Box sx={{width:'90%'}}>
            <Card sx={{backgroundColor:'#0172E8', color:'white', borderRadius:'4px', cursor:'pointer'}} onClick={() => {setClicked(!clicked); router.push(`/teacher/courses/${lvl1}/${lvl2}/${item.id}/0/0`)}}>
                <Typography variant='body1' fontWeight={900} textAlign={'center'} sx={{padding:'10px 0px'}}>{item.name}</Typography>
            </Card>
            {clicked && item?.children?.map((item, key) =>
                <Box key={key}>
                    <ThirdCard item={item}/>
                </Box>
            )}
        </Box>

    );
};

export default SecondCard;