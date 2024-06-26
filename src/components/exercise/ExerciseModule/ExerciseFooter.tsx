'use client'
import React, { useEffect, useState } from 'react';
import { Box, Button, IconButton, InputBase, Typography } from '@mui/material';
import { useExercise } from '@/provider/ExerciseProvider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Image from 'next/image';
import { useAuth } from '@/modules/auth/store/auth.store';
import { ExerciseEnum } from '@/enums/exerciseType';
import Exercise from '..';
import FeedBack from '@/components/feedback';
const ExerciseFooter = () => {
    const {handleDone,handleDeleteHistory, handleTeacherGrade,handleFinalGrade,handleResend} = useExercise()
    const [open3,setOpen3] = useState(false)
    const {exercise} = useExercise()
    const [grade,setGrade] = useState(0)
    const {user} = useAuth()
    const isStudent = user?.role === 'student'
    const isSend = (!exercise?.group ? false : (!exercise?.group?.exerciseType?.isAvailableMultipleCheck && exercise?.histories[0]?.isDone)) && !exercise?.userGroup?.isResend 
    
    useEffect(() => {
        if(exercise){
            if(exercise?.histories?.[0]?.teacherGrade > 0) {
                setGrade(exercise?.histories?.[0]?.teacherGrade)
            } else {
                setGrade(exercise?.histories?.[0]?.grade)
            }
        }
    },[exercise])

    useEffect(() => {
        handleTeacherGrade(grade)
    },[grade])

    return (
        <>
         <Box sx={{padding:'20px 10px', display:'flex',justifyContent:'space-between', bgcolor:'#E5F0FE'}}>
            {isStudent &&
                <Box sx={{display:'flex', gap:'15px'}}>
                    {
                        !exercise?.group &&
                        <>
                            <Button 
                                disabled={!exercise?.group ? false : (!exercise?.group?.exerciseType?.isAvailableMultipleCheck && exercise?.histories[0]?.isDone)} 
                                variant='contained' 
                                sx={{bgcolor:'#0172E8', fontSize:'20px', borderRadius:'24px', minWidth:'200px'}} 
                                onClick={() => handleDone()}
                            >
                                בדיקה
                            </Button>
                            <Button 
                                disabled={!exercise?.group ? false : (!exercise?.group?.exerciseType?.isAvailableMultipleCheck && exercise?.histories[0]?.isDone)} 
                                variant='contained' 
                                sx={{bgcolor:'#0172E8',fontSize:'20px', borderRadius:'24px', minWidth:'200px'}} 
                                onClick={() => handleDeleteHistory()}
                            >
                                ניקוי תשובות
                            </Button>
                        </>
                    }
                    {exercise?.group &&
                    <Button 
                        disabled={isSend} 
                        variant='contained' 
                        sx={{bgcolor:'#0172E8',fontSize:'20px', borderRadius:'24px', minWidth:'200px'}} 
                        onClick={() => handleDone()}
                    >
                        שליחה למורה
                    </Button>
                    }
       
                </Box>
            }
            {!isStudent &&
                <Box sx={{display:'flex', gap:'15px'}}>
                    <Button 
                        variant='contained' 
                        sx={{bgcolor:'#0172E8',fontSize:'20px', borderRadius:'24px', minWidth:'200px'}}
                        onClick={() => setOpen3(true)}
                    >
                     שליחת משוב  
                    </Button>
                    <Button 
                        variant='contained' 
                        sx={{bgcolor:'#0172E8',fontSize:'20px', borderRadius:'24px', minWidth:'200px'}} 
                        onClick={() => handleResend()}
                    >
                    החזרה לתיקון
                    </Button> 
                    {exercise?.histories.length !== 0 && 
                    <Box sx={{bgcolor:'white', alignItems:'center', display:'flex', justifyContent:'center', padding:'0 15px', borderRadius:'5px'}}>
                        <Typography variant='body1'>
                        {exercise?.histories[0]?.isFinalGrade ? 'ציון סופי': 'ציון זמני'}
                        </Typography>
                        {!exercise?.histories[0]?.isFinalGrade && 
                            <IconButton onClick={() => setGrade(e => e < 100 ? e + 1 : e)}>
                                <AddIcon sx={{color:'black'}}/>
                            </IconButton>
                        }
                    
                        <InputBase 
                            value={grade} 
                            sx={{width:'50px',color:'black', '& input': {textAlign:'center'}}} 
                            onChange={(e) => setGrade(+e.target.value)}
                            disabled={exercise?.histories[0]?.isFinalGrade} 
                        />
                        {!exercise?.histories[0]?.isFinalGrade && 
                            <IconButton onClick={() => setGrade(e => e > 0 ? e - 1 : e)}>
                                <RemoveIcon sx={{color:'black'}}/>
                            </IconButton>
                        }
                    </Box>
                    
                    }
                  
                    {!exercise?.histories[0]?.isFinalGrade &&  
                        <Box sx={{bgcolor:'white', borderRadius:'6px'}}>
                            <IconButton onClick={() => handleFinalGrade()}>
                                <Image src={'/images/circle.svg'} alt='robo' width={30} height={30}/>
                            </IconButton>
                        </Box>
                    }
                </Box>
            }

        </Box>
        <FeedBack open={open3} setOpen={setOpen3}/>
        </>
       
    );
};

export default ExerciseFooter;