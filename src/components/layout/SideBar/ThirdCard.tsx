'use client'
import { Box, Card, Typography } from '@mui/material';
import React, { useState } from 'react';
import FourthCard from './FourthCard';
import { useCourses } from '@/provider/CourseProvider';
import { useRouter } from 'next/navigation';

const ThirdCard = ({item} : {item: ICourse}) => {
    const [clicked, setClicked] = useState(false)
    const {lvl1,lvl2,lvl3} = useCourses()
    const router = useRouter()
    return (
        <Box sx={{marginTop:'10px'}}>
            <Card sx={{background:'#DDEDFF', borderRadius:'4px', cursor:'pointer'}} onClick={() => {setClicked(!clicked);router.push(`/teacher/courses/${lvl1}/${lvl2}/${lvl3}/${item.id}/0`)}}>
                <Typography variant='body1' textAlign={'center'} sx={{padding:'20px 0px'}} fontWeight={900}>{item.name}</Typography>
            </Card>
            {clicked && item?.children?.map((item,key) => 
                <Box key={key}>
                    <FourthCard item={item} />
                </Box>
            )}
        </Box>
    );
};

export default ThirdCard;