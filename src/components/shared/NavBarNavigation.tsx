import React from 'react';
import { Box, MenuItem, Select, SelectChangeEvent, Toolbar } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import { useTeacherCourses } from '@/modules/teacher/provider/TeacherCoursesProvider';
const NavBarNavigation = () => {
    const {exercise, courses} = useParams()

    const router = useRouter()
    const lvl1 = exercise ? exercise?.[0] : courses?.[0];
    const lvl2 = exercise ? exercise?.[1] : courses?.[1];
    const lvl3 = exercise ? exercise?.[2] : courses?.[2];
    const lvl4 = exercise ? exercise?.[3] : courses?.[3];
    const lvl5 = exercise ? exercise?.[4] : courses?.[4];

    const {lvl2IdCourses,lvl3IdCourses,lvl4IdCourses,lvl5IdCourses} = useTeacherCourses()
    
    const handleChange = (lvl: number, event:SelectChangeEvent) => {
        if(lvl === 2 ) {
            router.push(`/teacher/courses/${lvl1}/${event.target.value}/0/0/0`)
        } else if(lvl === 3) {
            router.push(`/teacher/courses/${lvl1}/${lvl2}/${event.target.value}/0/0`)
        } else if(lvl === 4) {
            router.push(`/teacher/courses/${lvl1}/${lvl2}/${lvl3}/${event.target.value}/0`)
        } else if(lvl === 5) {
            router.push(`/teacher/exercise/${lvl1}/${lvl2}/${lvl3}/${lvl4}/${event.target.value}`)
        } 
    }

    const isDisabled = (lvl5IdCourses?.confirmations?.length ?? 0) > 0;
    return (
        <>
        {(exercise || courses) && 
        <Box sx={{display:'flex'}}>
            <Select
                value={lvl2}
                onChange={(event) => handleChange(2,event)}
                placeholder='פרק'
                sx={{ width:'160px', background: 'white', margin: '10px', height: '30px' }}
            >
                {lvl2IdCourses?.children?.map((course) =>
                    <MenuItem  value={course.id}>{course.name}</MenuItem>
                )}
            </Select>
            <Select
                value={lvl3}
                onChange={(event) => handleChange(3,event)}
                placeholder='יחידה'
                sx={{ width:'160px',background: 'white', margin: '10px', height: '30px' }}
            >
                {lvl3IdCourses?.children?.map((course) =>
                    <MenuItem  value={course.id}>{course.name}</MenuItem>
                )}
            </Select>
            <Select
                value={lvl4}
                onChange={(event) => handleChange(4,event)}
                placeholder='שם העצם'
                sx={{ width:'160px', background: 'white', margin: '10px', height: '30px' }}
            >
                {lvl4IdCourses?.children?.map((course) =>
                    <MenuItem  value={course.id}>{course.name}</MenuItem>
                )}
            </Select>
            <Select
                value={lvl5}
                onChange={(event) => handleChange(5,event)}
                placeholder='תרגיל'
                sx={{ width:'160px', background: 'white', margin: '10px', height: '30px' }}
            >
                {lvl5IdCourses?.children?.map((course) =>
                    <MenuItem  value={course.id} disabled={!isDisabled}>{course.name}</MenuItem>
                )}
            </Select>
        </Box>
        
        }
    
        </>
    );
};

export default NavBarNavigation;