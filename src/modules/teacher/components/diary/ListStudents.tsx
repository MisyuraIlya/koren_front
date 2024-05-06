'use client'
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ListStudentCard from './ListStudentCard';
import { useDiratyStore } from '../../store/diary.store';
import { usePathname } from 'next/navigation';
import { TeacherURLS } from '@/enums/urls';
import moment from 'moment';


const ListStudents = () => {
    const {openStudents, setOpenStudents,connectionGroup} = useDiratyStore()
    const location = usePathname()
    const handleStudents = (): IExerciseUserConnection[] | undefined => {
        if(location === TeacherURLS.CLASSES_MISSIONS) {
            return connectionGroup?.students
        } else if(location === TeacherURLS.TO_CHECK) {
            return connectionGroup?.students?.filter((studnt) => studnt.isDone)
        } else if(location === TeacherURLS.RESTORE) {
            return connectionGroup?.students?.filter((studnt) => studnt.isResend)
        } else if(location === TeacherURLS.IN_PROCESS) {
            return connectionGroup?.students?.filter((studnt) => !studnt.isDone)
        } else if(location === TeacherURLS.LATE_SUBMISSION) {
            const currentTime = moment();
            const lateStudents = connectionGroup?.students?.filter((student) => {
                if (student.dueDate) {
                    const dueDate = moment(student.dueDate);
                    return dueDate.isBefore(currentTime);
                }
                return false;
            });
            return lateStudents;
        } else {
            return []
        }
    }
    return (
        <>
        {openStudents &&
            <Box sx={{width:'500px',bgcolor:'#F6F8FC', height:'100%', borderLeft:'1px solid #DCDDDE'}}>
                <Box sx={{bgcolor:'white', padding:'0 20px', display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center', height:'75px'}}>
                    <Typography variant='h5' >
                    כיתה
                    </Typography>
                    <IconButton onClick={() => setOpenStudents(false)}> 
                        <CloseIcon/>
                    </IconButton>
                </Box>
                <Box sx={{padding:'0 20px'}}>
                    {connectionGroup &&
                      handleStudents()?.map((item) => 
                        <ListStudentCard element={item} item={connectionGroup}/>
                      )
                    }
                  
                </Box>
            </Box>
        }
        </>

    );
};

export default ListStudents;