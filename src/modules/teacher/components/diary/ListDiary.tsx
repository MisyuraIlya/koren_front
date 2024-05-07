'use client'
import { Box } from '@mui/material';
import React from 'react';
import useDataTeacherConnectionGroup from '../../../../hooks/useDataTeacherConnectionGroup';
import DiaryCard from './DiaryCard';
import { useDiratyStore } from '../../../../store/diary.store';

const ListDiary = () => {
    const {data} = useDataTeacherConnectionGroup()
    const {filter} = useDiratyStore()
 
    return (
        <Box sx={{padding:'20px 30px'}}>
            {data?.map((item) => {
                if(filter == 'הכל' || filter === item.exerciseType.title){
                    return (
                        <DiaryCard item={item}/>
                    )
                } 
            })}
        </Box>
    );
};

export default ListDiary;