"use-client"
import { Box } from '@mui/material';
import React, {FC} from 'react';
import SecondCard from './SecondCard';
import { useCourses } from '@/provider/CourseProvider';

interface SecondSideBarProps {
    courseHovered:number
}

const SecondSideBar:FC<SecondSideBarProps> = ({courseHovered}) => {
    const {lvl2IdCourses} = useCourses()
    const hoveredCourses = lvl2IdCourses?.children.filter((item) => item.id === courseHovered)[0]
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