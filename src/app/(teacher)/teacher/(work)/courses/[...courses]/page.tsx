'use client'
import useDataConfirmation from '@/hooks/useDataConfirmation';
import { useCourses } from '@/provider/CourseProvider';
import { Alert, Box, Button, Snackbar } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface CoursePageProps {
    params: {
        courses: string[]
    }
    searchParams: any
}

  
const page = () => {
    const [openSnack, setOpenSnack] = useState(false)
    const {lvl1,lvl2,lvl3,lvl4,} = useCourses()
    const {lvl5IdCourses, mutate} = useCourses()
    const router = useRouter()
    const {data,create} = useDataConfirmation()

    const handleIsRead = async () => {
        setOpenSnack(true)
        await create(lvl5IdCourses?.id!)
        if(lvl5IdCourses?.children?.[0].id){
            router.push(`/teacher/exercise/${lvl1}/${lvl2}/${lvl3}/${lvl4}/${lvl5IdCourses?.children?.[0].id}`)
        }
        mutate()
    }
    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
            {lvl5IdCourses?.pdf &&
                <Box sx={{padding:'20px', marginTop:'10px'}}>
                <iframe 
                width='1400px' 
                height='600px'  
                title='pdf-link' 
                src={`/${lvl5IdCourses?.pdf}`}  
               />
               {lvl5IdCourses?.confirmations?.length === 0 &&
                <Button variant='contained' onClick={() => handleIsRead()} sx={{padding:'10px 20px', fontSize:'20px', marginTop:'20px',  color:'white' ,background:'linear-gradient(226.61deg, #2E68F7 0%, #45C3F3 109.92%)'}}>
                    קראתי והבנתי, אפשר להמשיך לתרגול
                </Button>
               }
    
                </Box>
            }
                <Snackbar autoHideDuration={2000} open={openSnack}  onClose={() => setOpenSnack(false)}>
                <Alert
                    onClose={() => setOpenSnack(false)}
                    severity="success"
                    variant="filled"
                    
                    sx={{ width: '100%' }}
                >
                    נתונים נשמרו בהצלחה
                </Alert>
                </Snackbar>
        </Box>
    );
};

export default page;