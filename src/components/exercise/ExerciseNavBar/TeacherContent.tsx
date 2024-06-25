'use client'
import { useTeacherWork } from '@/store/work.store';
import { Box, Button, Grid, IconButton, InputBase, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import useDataConnectionGroup from '@/hooks/useDataConnectionGroup';
import { onAsk } from '@/utils/sweetAlert';
import ExerciseDrawer from '../TeacherExercise/ExerciseDrawer';
import Exercise from '..';
import FeedBack from '@/components/feedback';
import { useExercise } from '@/provider/ExerciseProvider';
import VisibilityIcon from '@mui/icons-material/Visibility';
import useMailFeedBack from '@/hooks/useMailFeedBack';

const TeacherContent = () => {
    const {classChoosed, toDate, fromDate,  timeChoosed,sendType} = useTeacherWork()
    const {data, deletGroup, deletAnswerGroup} = useDataConnectionGroup()
    const {exercise, nextError, previousError, nextOpenQuestion, previousOpenQuestion, showOpenQuestions, setShowOpenQuestions, handleTeacherGrade} = useExercise()
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3,setOpen3] = useState(false)
    const [openFeedBack, setOpenFeedBack] = useState(false)
    const { data: mailFeedBack} = useMailFeedBack()

    const [grade,setGrade] = useState(0)

    const handleDelete = async () => {
        const ask = await onAsk(`למחוק ${sendType}?`,'')
        if(ask){
            deletGroup(data?.id!)
        }
    }

    const handleDeleteAnswer = async () => {
        const ask = await onAsk(`לאפס תשובות?`,'')
        if(ask){
            deletAnswerGroup(data?.id!)
        } 
    }

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

    console.log(exercise?.histories.length === 0)

    return (
        <>
        {
            classChoosed &&
            <>
                <Grid item xs={2} sx={{display:'flex', justifyContent:'center'}}>
                    <Box sx={{position:'relative'}}>
                        <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}> 
                            <Typography color={'error'} sx={{fontSize:'14px', fontWeight:700}}>{exercise?.histories?.[0]?.totalUncorrect}</Typography>
                            <Typography sx={{fontSize:'14px'}}>תשובות שגויות</Typography>
                            <IconButton sx={{background:'#EDF2F9', borderRadius:'3px', ml:'3px',height:'20px', width:'20px'}} onClick={() => nextError()}>
                                <ArrowForwardIosIcon sx={{fontSize:'15px'}}/>
                            </IconButton>
                            <IconButton sx={{background:'#EDF2F9', borderRadius:'3px',height:'20px', width:'20px'}} onClick={() => previousError()}>
                                <ArrowBackIosNewIcon sx={{fontSize:'15px'}}/>
                            </IconButton>
                        </Box>
                        <Box sx={{display:'flex', gap:'10px', alignItems:'center', marginTop:'10px'}}> 
                            <Typography color={'error'} sx={{fontSize:'14px', fontWeight:700}}>{exercise?.histories?.[0]?.openQuestions}</Typography>
                            <Typography sx={{fontSize:'14px'}}>שאלות פתוחות</Typography>
                            <IconButton sx={{background:'#EDF2F9', borderRadius:'3px',height:'20px', width:'20px'}} onClick={() => nextOpenQuestion()}>
                                <ArrowForwardIosIcon sx={{fontSize:'15px'}}/>
                            </IconButton>
                            <IconButton sx={{background:'#EDF2F9', borderRadius:'3px', display:'flex',height:'20px', width:'20px'}} onClick={() => previousOpenQuestion()}>
                                <ArrowBackIosNewIcon sx={{fontSize:'15px'}}/>
                            </IconButton>
                        </Box>
                        <Box sx={{display:'flex', gap:'10px', alignItems:'center',width:'100%', mt:'25px'}}> 
                            <IconButton sx={{padding:'0'}} onClick={() => setShowOpenQuestions(!showOpenQuestions)}>
                                {showOpenQuestions ?
                                    <VisibilityOffIcon sx={{fontSize:'20px'}}/>
                                :
                                    <VisibilityIcon sx={{fontSize:'20px'}}/>
                                }
                            </IconButton>
                            <Typography fontSize={'13px'}>הסתרת השאלות הפתוחות</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={1.5} sx={{display:'flex', justifyContent:'center', position:'relative'}}>
                    <Box sx={{position:'relative'}}>
                        {exercise?.histories.length !== 0  &&
                            <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                                <Typography sx={{fontSize:'14px'}}>
                                {exercise?.histories[0]?.isFinalGrade ? 'ציון סופי': 'ציון זמני'}
                                </Typography>
                                <Box sx={{display:'flex', gap:'5px', border:'1px solid #BACEE9', borderRadius:'5px', justifyContent:'center', alignItems:'center'}}>
                                    {!exercise?.histories[0]?.isFinalGrade &&  
                                        <IconButton onClick={() => setGrade(e => e < 100 ? e + 1 : e)}>
                                            <AddIcon sx={{color:'black'}}/>
                                        </IconButton>
                                    }
                                    <InputBase 
                                        value={grade} 
                                        sx={{width:'80px',color:'black', '& input': {textAlign:'center'}}} 
                                        onChange={(e) => setGrade(+e.target.value)}
                                        disabled={exercise?.histories[0]?.isFinalGrade  }
                                    />
                                    {!exercise?.histories[0]?.isFinalGrade &&  
                                        <IconButton onClick={() => setGrade(e => e > 0 ? e - 1 : e)}>
                                            <RemoveIcon sx={{color:'black'}}/>
                                        </IconButton>
                                    }
                                
                                </Box>
                            </Box>
                        }
                        
                        <Box sx={{display:'flex', justifyContent:'space-between',mt:'25px' , width:'100%', alignItems:'center'}}>
                            <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                                <Box sx={{background:mailFeedBack?.id ? '#07FE4C' : '#ED4136', borderRadius:'50%', height:'10px', width:'10px'}}>
                                </Box>
                                <Typography>משוב</Typography>
                            </Box>
                            <Box>
                                <IconButton onClick={() => setOpen3(true)}>
                                    <RemoveRedEyeIcon sx={{color:'black'}}/>
                                </IconButton>
                                <IconButton onClick={() => setOpenFeedBack(true)}>
                                    <Image src={'/images/editExercise.svg'} width={20} height={20} alt='edit'/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={2} sx={{display:'flex', justifyContent:'center', position:'relative'}}>
                    <Box >
                        <Box sx={{display:'flex', alignItems:'center'}}>
                            <Typography>סוג התרגיל: {sendType}</Typography>
                            <IconButton onClick={() => setOpen(true)}>
                                <Image src={'/images/editExercise.svg'} width={20} height={20} alt='edit'/>
                            </IconButton>
                            <IconButton onClick={() => handleDelete()}>
                                <DeleteIcon sx={{color:'black'}}/>
                            </IconButton>
                        </Box>
                    
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <Button startIcon={<Box sx={{borderRadius:'50%', bgcolor: data?.id ? '#07FE4C' : '#ED4136',width:'9px', height:'9px' }}/>} sx={{bgcolor:'#EDF2F9', borderRadius:'60px', padding:'2px 16px'}}>
                                    {data?.id  ? 'נשלח' : 'טרם נשלח'}
                                </Button>
                            </Box>
                
                        </Box>
                        <Box sx={{display:'flex', gap:'10px', mt:'8px'}}>
                            {data?.toDate && 
                                <Typography variant='body1'>{`${moment(data?.toDate).format('DD-MM-YYYY')}`}</Typography>
                            }
                            {(data?.time || timeChoosed) &&
                                <Typography variant='body1'>{`${moment(data?.time ).format('HH:mm')}`}</Typography>
                            }
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={2} sx={{display:'flex', justifyContent:'center'}}>
                    <Box>
                        <Button  startIcon={<Box sx={{borderRadius:'50%', bgcolor: data?.answerType ? '#07FE4C' : '#ED4136',width:'9px', height:'9px' }}/>} sx={{bgcolor:'#EDF2F9', borderRadius:'60px', padding:'2px 16px'}}>
                            {data?.answerType ? 'התשובות פתוחות':'התשובות סגורות'}
                        </Button>
                        <IconButton onClick={() => setOpen2(true)}>
                            <Image src={'/images/editExercise.svg'} width={20} height={20} alt='edit'/>
                        </IconButton>
                        <IconButton onClick={() => handleDeleteAnswer()}>
                            <DeleteIcon sx={{color:'black'}}/>
                        </IconButton>
                    </Box>
                </Grid>
            </>
        }
        <Exercise.TeacherExercise.ExerciseDrawer.Send open={open} setOpen={setOpen}/>
        <Exercise.TeacherExercise.ExerciseDrawer.Answer open={open2} setOpen={setOpen2}/>
        <Exercise.TeacherExercise.ExerciseDrawer.FeedBack open={open3} setOpen={setOpen3}/>
        <FeedBack open={openFeedBack} setOpen={setOpenFeedBack}/>
        </>
    );
};

export default TeacherContent;