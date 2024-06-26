'use client'
import useDataTeacherGroups from '@/hooks/useDataTeacherGroups';
import { useCourses } from '@/provider/CourseProvider';
import { useTeacherWork } from '@/store/work.store';
import { Box, Button, Grid, ListItemText, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useState } from 'react';
import CourseCard from '../courses/CourseCard';
import { useParams,useRouter } from 'next/navigation';
import { useAuth } from '@/modules/auth/store/auth.store';
import { useStatistic } from '@/store/useStatistic';

const GradeFilters = () => {
    const {data} = useDataTeacherGroups()
    const {exercise, courses} = useParams()
    const router = useRouter()
    const {user} = useAuth()
    const lvl1 = exercise ? exercise?.[0] : courses?.[0];
    const lvl2 = exercise ? exercise?.[1] : courses?.[1];
    const lvl3 = exercise ? exercise?.[2] : courses?.[2];
    const lvl4 = exercise ? exercise?.[3] : courses?.[3];
    const lvl5 = exercise ? exercise?.[4] : courses?.[4];
    const {lvl2IdCourses,lvl3IdCourses,lvl4IdCourses,lvl5IdCourses} = useCourses()
    const {classChoosed,setSelectedGroup,setClassesChoosed,setStudentChoosed,setSendType} = useTeacherWork()
    const {getStatistic, data:statistic} = useStatistic()

    const handleClassChoose = (uuid:string) => {
        const find = data?.find((item) => item.uuid === uuid)
        if(find) {
            setSelectedGroup(find)
            setClassesChoosed(find)
            setStudentChoosed(null)
            setSendType(find.connection.exerciseType?.title as sendExerciseType)
        }
    }
    
    const handleChange = (lvl: number, event:SelectChangeEvent) => {
        const role = user?.role === 'teacher' ? 'teacher' : 'student'
        if(lvl === 2 ) {
            router.push(`/${role}/grades/${lvl1}/${event.target.value}/0/0/0`)
        } else if(lvl === 3) {
            router.push(`/${role}/grades/${lvl1}/${lvl2}/${event.target.value}/0/0`)
        } else if(lvl === 4) {
            router.push(`/${role}/grades/${lvl1}/${lvl2}/${lvl3}/${event.target.value}/0`)
        } else if(lvl === 5) {
            router.push(`/${role}/grades/${lvl1}/${lvl2}/${lvl3}/${lvl4}/${event.target.value}`)
        } 
    }


    return (
        <Box sx={{display:'flex', gap:'10px'}}>
                <Box sx={{display:'flex'}}>
                    <Select
                        sx={{bgcolor:'#F0FBFF', minWidth:'150px', height:'35px'}}
                        value={classChoosed?.uuid ?? ''}
                        onChange={(e) => handleClassChoose(e.target.value)}
                        autoWidth
                    >
                        {data && Array.isArray(data) &&  data?.map((item,index) => 
                            <MenuItem sx={{minWidth:'150px'}} key={index} value={item.uuid}>{item.title}</MenuItem>
                        )}
                    </Select>
                    <Select
                        value={lvl2}
                        onChange={(event) => handleChange(2,event)}
                        placeholder='פרק'
                        sx={{ width:'160px', background: 'white', margin: '10px', height: '30px' }}
                    >
                        {lvl2IdCourses?.children?.map((course,index) =>
                            <MenuItem key={index} value={course.id}>{course.name}</MenuItem>
                        )}
                    </Select>
                    <Select
                        value={lvl3}
                        onChange={(event) => handleChange(3,event)}
                        placeholder='יחידה'
                        sx={{ width:'160px',background: 'white', margin: '10px', height: '30px' }}
                    >
                        {lvl3IdCourses?.children?.map((course,index) =>
                            <MenuItem  value={course.id} key={index}>{course.name}</MenuItem>
                        )}
                    </Select>
                    <Select
                        value={lvl4}
                        onChange={(event) => handleChange(4,event)}
                        placeholder='שם העצם'
                        sx={{ width:'160px', background: 'white', margin: '10px', height: '30px' }}
                    >
                        {lvl4IdCourses?.children?.map((course,index) =>
                            <MenuItem  value={course.id}  key={index}>{course.name}</MenuItem>
                        )}
                    </Select>
                    <Select
                        value={lvl5}
                        onChange={(event) => handleChange(5,event)}
                        placeholder='תרגיל'
                        sx={{ width:'160px', background: 'white', margin: '10px', height: '30px' }}
                    >
                        {lvl5IdCourses?.children?.map((course,index) =>
                            <MenuItem  value={course.id}   key={index}>{course.name}</MenuItem>
                        )}
                    </Select>
                    <Button onClick={() => getStatistic(classChoosed?.uuid!,+lvl1,+lvl2,+lvl3,+lvl4,+lvl5,)}>
                        הצגת גיליון
                    </Button>
                </Box>
        </Box>
    );
};

export default GradeFilters;