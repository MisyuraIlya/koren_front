'use client'
import useDataConfirmation from '@/hooks/useDataConfirmation';
import { useCourses } from '@/provider/CourseProvider';
import { onSuccessAlert } from '@/utils/sweetAlert';
import { CheckBox } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';

interface CoursePageProps {
    params: {
        courses: string[]
    }
    searchParams: any
}

  
const page = () => {
    const {lvl5IdCourses, mutate} = useCourses()
    const {data,create} = useDataConfirmation()

    const handleIsRead = async () => {
        await create(lvl5IdCourses?.id!)
        mutate()
        onSuccessAlert('נשמר בהצלחה','ניתן להמשיך לתרגול')
    }
    console.log('lvl5IdCourses',lvl5IdCourses)
    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
            {lvl5IdCourses?.pdf &&
                <Box sx={{boxShadow:'0px 4px 30px 0px #00000099', padding:'20px', marginTop:'10px'}}>
                <iframe 
                width='1100px' 
                height='600px'  
                title='pdf-link' 
                src={`http://localhost:4001/${lvl5IdCourses?.pdf}`}  
               />
               {lvl5IdCourses?.confirmations?.length === 0 &&
                <Button variant='contained' onClick={() => handleIsRead()} sx={{padding:'10px 20px', fontSize:'20px', marginTop:'20px',  color:'white' ,background:'linear-gradient(226.61deg, #2E68F7 0%, #45C3F3 109.92%)'}}>
                    קראתי והבנתי, אפשר להמשיך לתרגול
                </Button>
               }
    
                </Box>
            }
        </Box>
    );
};

export default page;