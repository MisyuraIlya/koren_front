"use client"
import { MenuItem, Paper, Select, SelectChangeEvent, Toolbar } from '@mui/material';
import React, {useState} from 'react';
import { useStudentCourses } from '../provider/StudentCoursesProvider';
import { useRouter } from 'next/navigation';

const NavBar = () => {
    const router = useRouter()
    const {lvl1Id,lvl2Id, lvl3Id, lvl4Id, lvl1IdCourses,lvl2IdCourses,lvl3IdCourses,lvl4IdCourses} = useStudentCourses()
    const [selectedLvl1Id, setSelectedLvl1Id] = useState<string | undefined>(lvl1Id);
    const [selectedLvl2Id, setSelectedLvl2Id] = useState<string | undefined>(lvl2Id);
    const [selectedLvl3Id, setSelectedLvl3Id] = useState<string | undefined>(lvl3Id);
    const [selectedLvl4Id, setSelectedLvl4Id] = useState<string | undefined>(lvl4Id);

    const handleChange = (event: SelectChangeEvent, level: number) => {
        switch (level) {
            case 2:
                setSelectedLvl1Id(event.target.value as string);
                break;
            case 3:
                setSelectedLvl2Id(event.target.value as string);
                break;
            case 4:
                setSelectedLvl3Id(event.target.value as string);
                break;
            case 5:
                setSelectedLvl4Id(event.target.value as string);
                break;
            default:
                break;
        }
    };

    const handleChoose = (lvl: number, id: number) => {
        if(lvl === 2){
            router.push(`/student/courses/${lvl1Id}/${id}`, {scroll: false})
        } else if (lvl === 3) {
            router.push(`/student/courses/${lvl1Id}/${lvl2Id}/${id}`, {scroll: false})
        } else if (lvl === 4) {
            router.push(`/student/courses/${lvl1Id}/${lvl2Id}/${lvl3Id}/${id}`, {scroll: false})
        } else if (lvl === 5) {
            router.push(`/student/exercise/${id}`, {scroll: false})
        } 
    }

    return (
        <Paper elevation={4} sx={{ position: 'fixed', zIndex:'1300', top: '60px', width: '100%', borderRadius: '0', minHeight: '60px', backgroundColor: '#F0FBFF', display: 'flex', alignItems: 'center' }}>
            <Select
                value={selectedLvl1Id}
                placeholder='פרק'
                onChange={(event) => handleChange(event, 2)}
                sx={{ minWidth: '250px', background: 'white', margin: '10px', height: '30px' }}
            >
                {lvl1Id && lvl1IdCourses?.children?.map((course) =>
                    <MenuItem onClick={() => handleChoose(2, +course.id!)} value={course?.id}>{course.name}</MenuItem>
                )}
            </Select>

            <Select
                placeholder='יחידה'
                value={selectedLvl2Id}
                onChange={(event) => handleChange(event, 3)}
                sx={{ minWidth: '250px', background: 'white', margin: '10px', height: '30px' }}
            >
                {lvl2Id && lvl2IdCourses?.children?.map((course) =>
                    <MenuItem onClick={() => handleChoose(3, +course.id!)} value={course?.id}>{course.name}</MenuItem>
                )}
            </Select>

            <Select
                placeholder='שם העצם'
                value={selectedLvl3Id}
                onChange={(event) => handleChange(event, 4)}
                sx={{ minWidth: '250px', background: 'white', margin: '10px', height: '30px' }}
            >
                {lvl3Id && lvl3IdCourses?.children?.map((course) =>
                    <MenuItem onClick={() => handleChoose(4, +course.id!)} value={course?.id}>{course.name}</MenuItem>
                )}
            </Select>

            <Select
                placeholder='תרגיל'
                value={selectedLvl4Id}
                onChange={(event) => handleChange(event, 5)}
                sx={{ minWidth: '250px', background: 'white', margin: '10px', height: '30px' }}
            >
                {lvl4Id && lvl4IdCourses?.children?.map((course) =>
                    <MenuItem onClick={() => handleChoose(5, +course.id!)} value={course?.id}>{course.name}</MenuItem>
                )}
            </Select>

        </Paper>
    );
};

export default NavBar;