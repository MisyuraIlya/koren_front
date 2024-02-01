"use-client"
import { Box, Card, Typography } from '@mui/material';
import React, {FC} from 'react';
import { useStudentCourses } from '../../provider/StudentCoursesProvider';
import SecondCard from './SecondCard';

interface SecondSideBarProps {
    courseHovered:number
}

const SecondSideBar:FC<SecondSideBarProps> = ({courseHovered}) => {
    const {lvl1IdCourses} = useStudentCourses()
    const hoveredCourses = lvl1IdCourses?.children.filter((item) => item.id === courseHovered)[0]
    return (
        <Box>
            {hoveredCourses?.children?.map((item) =>
                <Box sx={{marginTop:'10px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <SecondCard item={item}/>
                </Box>
            )}
        </Box>
    );
};

export default SecondSideBar;