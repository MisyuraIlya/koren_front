import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { themeColors } from '@/styles/mui';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useStudentCourses } from '../../../modules/student/provider/StudentCoursesProvider';
import { useRouter } from 'next/navigation';
import { useCourses } from '@/provider/CourseProvider';
const FourthCard = ({item} : {item: ICourse}) => {
    const router = useRouter()
    const {lvl5IdCourses} = useCourses()
    const {lvl1,lvl2,lvl3,lvl4} = useCourses()
    const handlePush = () => {
        router.push(`/teacher/exercise/${lvl1}/${lvl2}/${lvl3}/${lvl4}/${item.id}`, {scroll: false})
    }
    const isDisabled = (lvl5IdCourses?.confirmations?.length ?? 0) > 0;
    return (
        <Box sx={{marginTop:'10px'}}> 
            <Card sx={{
                background: '#EFF7F7',
                color:'black',
                cursor:'pointer',
                opacity: isDisabled ? 1 : 0.5,
                '&:hover': {
                    background: isDisabled ? themeColors.primary  : 'none',
                    color:isDisabled ? 'white' : 'black',
                }
            }}
            onClick={() => isDisabled && handlePush()}
            >
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', padding:'20px 0px', gap:'10px'}}>
                    <MenuBookIcon/>
                    <Typography variant='body2'>{item?.name}</Typography>
                </Box>
            </Card>
        </Box>
    );
};

export default FourthCard;