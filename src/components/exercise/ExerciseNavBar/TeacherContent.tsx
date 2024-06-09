'use client'
import { useTeacherWork } from '@/store/work.store';
import { Box, Button, Grid, IconButton, InputBase, Typography } from '@mui/material';
import React, { useState } from 'react';
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


const TeacherContent = () => {
    const {classChoosed, toDate, fromDate,  timeChoosed,sendType} = useTeacherWork()
    const {data, deletGroup, deletAnswerGroup} = useDataConnectionGroup()
    const {exercise, nextError, previousError, nextOpenQuestion, previousOpenQuestion} = useExercise()
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [openFeedBack, setOpenFeedBack] = useState(false)

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
                            <IconButton sx={{padding:'0'}}>
                                <VisibilityOffIcon sx={{fontSize:'20px'}}/>
                            </IconButton>
                            <Typography fontSize={'13px'}>הסתרת השאלות הפתוחות</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={1.5} sx={{display:'flex', justifyContent:'center', position:'relative'}}>
                    <Box sx={{position:'relative'}}>
                        <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                            <Typography sx={{fontSize:'14px'}}>
                            ציון זמני:
                            </Typography>
                            <Box sx={{display:'flex', gap:'5px', border:'1px solid #BACEE9', borderRadius:'5px', justifyContent:'center', alignItems:'center'}}>
                                <IconButton>
                                    <AddIcon sx={{color:'black'}}/>
                                </IconButton>
                                <InputBase value={75} sx={{textAlign:'center', width:'10px',color:'black', fontWeight:700}}/>
                                <IconButton>
                                    <RemoveIcon sx={{color:'black'}}/>
                                </IconButton>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'space-between',mt:'25px' , width:'100%', alignItems:'center'}}>
                            <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                                <Box sx={{background:'red', borderRadius:'50%', height:'10px', width:'10px'}}>
                                </Box>
                                <Typography>משוב</Typography>
                            </Box>
                            <Box>
                                <IconButton>
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
        <FeedBack open={openFeedBack} setOpen={setOpenFeedBack}/>
        </>
    );
};

export default TeacherContent;