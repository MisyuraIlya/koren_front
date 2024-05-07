'use client'
import { Box, Divider, Grid, InputBase, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import TeacherForm from '../classes/TeacherForm';
import { useGroups } from '@/store/groups.store';
import { useClasses } from '@/store/classes.store';
import ClassForm from '../classes/ClassForm';


const MixedRightSide = () => {
    const {setTeachers, groupNameMixed, setGroupNameMixed, typeMixed, teachers} = useGroups()
    const {setClasses, classes} = useClasses()
    const handleFunc = (arr: IClass[]) => {
        setClasses(arr)
    }

    const handleTeacher = (arr: IUser[]) => {
        setTeachers(arr)
    }

    return (
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{width:'60%'}}>
                <Box sx={{display:'flex', gap:'10px', marginBottom:'10px'}}>
                    <Image src={'/images/teacher/computer.svg'} width={30} height={30} alt='computer' />
                    <Typography variant='h6' color={'#0172E8'} fontWeight={700}>
                        {typeMixed == 1 ?
                        <>יצירת קבוצות לימוד מכיתת אם אחת</>
                        :
                        <>יצירת קבוצות למידה עם שני מורים</>
                        }
                    </Typography>
                </Box>
                <Divider sx={{background:'#0172E84D', color:'#0172E84D'}}/>
                <Box sx={{marginTop:'20px'}}>
                    <Grid container sx={{marginTop:'10px'}}>
                        <Grid item xs={4}>
                            <Typography variant='h6' sx={{color:'#0F0B2F80', fontWeight:600}}>{'שם הקבוצה:'}</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <InputBase value={groupNameMixed} sx={{background:'#f6f6f6', padding:'0 14px'}} onChange={(e) => setGroupNameMixed(e.target.value)}/>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{marginTop:'20px'}}>
                    <ClassForm handle={handleFunc} classes={classes}/>
                    {typeMixed == 2 &&
                        <TeacherForm handle={handleTeacher} teachers={teachers}/>
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default MixedRightSide;