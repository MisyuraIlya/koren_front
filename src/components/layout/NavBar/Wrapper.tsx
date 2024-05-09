import { useAuth } from '@/modules/auth/store/auth.store';
import { useCourses } from '@/provider/CourseProvider';
import { Box, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

const Wrapper = ({ children }: { children: React.ReactNode}) => {
    const {exercise, courses} = useParams()
    const {user} = useAuth()
    const router = useRouter()
    const lvl1 = exercise ? exercise?.[0] : courses?.[0];
    const lvl2 = exercise ? exercise?.[1] : courses?.[1];
    const lvl3 = exercise ? exercise?.[2] : courses?.[2];
    const lvl4 = exercise ? exercise?.[3] : courses?.[3];
    const lvl5 = exercise ? exercise?.[4] : courses?.[4];

    const {lvl2IdCourses,lvl3IdCourses,lvl4IdCourses,lvl5IdCourses} = useCourses()
    
    const handleChange = (lvl: number, event:SelectChangeEvent) => {
        const role = user?.role === 'teacher' ? 'teacher' : 'student'
        if(lvl === 2 ) {
            router.push(`/${role}/courses/${lvl1}/${event.target.value}/0/0/0`)
        } else if(lvl === 3) {
            router.push(`/${role}/courses/${lvl1}/${lvl2}/${event.target.value}/0/0`)
        } else if(lvl === 4) {
            router.push(`/${role}/courses/${lvl1}/${lvl2}/${lvl3}/${event.target.value}/0`)
        } else if(lvl === 5) {
            router.push(`/${role}/exercise/${lvl1}/${lvl2}/${lvl3}/${lvl4}/${event.target.value}`)
        } 
    }
    const isDisabled = (lvl5IdCourses?.confirmations?.length ?? 0) > 0;
    
    return (
        <Box sx={{bgcolor:'#F0FBFF', height:'60px', width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 40px'}}>
            <Box sx={{width:'50%', display:'flex'}}>
            {(exercise || courses) && 
                <Box sx={{display:'flex'}}>
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
                            <MenuItem  value={course.id} disabled={!isDisabled}  key={index}>{course.name}</MenuItem>
                        )}
                    </Select>
                </Box>
            }
            </Box>
            {children}
        </Box>
    );
};

export default Wrapper;