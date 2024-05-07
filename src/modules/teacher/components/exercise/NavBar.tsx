'use client'
import { Box, Button, Chip, Divider, Drawer, FormControl, FormControlLabel, FormLabel, Grid, Icon, IconButton, InputBase, MenuItem, Paper, Radio, RadioGroup, Select, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import BookIcon from '@/../public/images/book.svg';
import VideoIcon from '@/../public/images/video.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { themeColors } from '@/styles/mui';
import CloseIcon from '@mui/icons-material/Close';
import { useExercise } from '@/provider/ExerciseProvider';
import ExerciseModal from '@/utils/Modals/ExerciseModal';
import PdfUtil from '@/utils/PdfUtil';
import YoutubeIframe from '@/utils/YoutubeIframe';
import { useTeacherWork } from '../../store/work.store';
import Send from './ExerciseDrawer/Send';
import Answer from './ExerciseDrawer/Answer';
import ExerciseDrawer from './ExerciseDrawer';
import moment from 'moment';
import useDataConnectionGroup from '../../hooks/useDataConnectionGroup';
import { onAsk, onInfoAlert } from '@/utils/sweetAlert';
import DeleteIcon from '@mui/icons-material/Delete';

const type = [
    {
        type:'exercise',
        name:'תרגול ללא תזמון',
    },
    {
        type:'test',
        name:'מבדק',
    },
    {
        type:'exam',
        name:'מבחן',
    },
]

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [openModalPdf, setOpenModalPdf] = useState(false)
    const [openModalLink, setOpenModalLink] = useState(false)
    const [openModalDescription1, setOpenModalDescription1] = useState(false)
    const [openModalDescription2, setOpenModalDescription2] = useState(false)
    const {exercise} = useExercise()
    const {classChoosed, toDate, fromDate,  timeChoosed} = useTeacherWork()
    const {sendType} = useTeacherWork()
    const {data, deletGroup, deletAnswerGroup} = useDataConnectionGroup()
    
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
        <Paper elevation={2} sx={{height:'160px', width:'100%', padding:'20px 30px', bgcolor:'white', marginTop:'130px'}}>
            <Grid container>
                <Grid item xs={2}>
                    <Typography variant='h5' fontWeight={900}>{exercise?.title}</Typography>
                    <Box sx={{display:'flex', gap:'20px', marginTop:'10px'}}>
                        <Button variant='contained' sx={{borderRadius:'60px', fontWeight:600, fontSize:'16px'}} onClick={() => setOpenModalDescription1(true)} disabled={!exercise?.description1}>
                        הוראות תרגיל
                        </Button>
                        <Button variant='contained' sx={{borderRadius:'60px', fontWeight:600, fontSize:'16px'}} onClick={() => setOpenModalDescription2(true)} disabled={!exercise?.description2}>
                        הדרכה   
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={2} sx={{display:'flex', justifyContent:'center'}}>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Box sx={{ display: 'flex', gap: '20px' }}>
                            <Paper elevation={4} sx={{ opacity: exercise?.youtubeLink ? '1' : '0.5' , width: '120px', height: '80px', background: '#E7F3E8', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor:'pointer', border:'0.63px solid #378CF54D'}} onClick={() => {exercise?.youtubeLink && setOpenModalLink(true)}}>
                                <Image src={VideoIcon} width={50} height={50} alt='VideoIcon' />
                                <Typography variant='body2' textAlign={'center'} fontWeight={700}>לצפות וללמוד</Typography>
                            </Paper>
                            <Paper elevation={4} sx={{ opacity:exercise?.pdf ? '1' : '0.5', width: '120px', height: '80px', background: '#E7F3E8', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border:'0.63px solid #378CF54D', cursor:'pointer'}} onClick={() => {exercise?.pdf && setOpenModalPdf(true)}}>
                                <Image src={BookIcon} width={70} height={70} alt='BookIcon' />
                                <Typography variant='body2' textAlign={'center'} fontWeight={700}>הסבר</Typography>
                            </Paper>
                        </Box>
                    </Box>
                </Grid>
                {
                    classChoosed &&
                    <>
                        <Grid item xs={2} sx={{display:'flex', justifyContent:'center'}}>
                            <Box sx={{position:'relative'}}>
                                <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}> 
                                    <Typography color={'error'} sx={{fontSize:'14px', fontWeight:700}}>12</Typography>
                                    <Typography sx={{fontSize:'14px'}}>תשובות שגויות</Typography>
                                    <IconButton sx={{background:'#EDF2F9', borderRadius:'3px', ml:'3px',height:'20px', width:'20px'}}>
                                        <ArrowForwardIosIcon sx={{fontSize:'15px'}}/>
                                    </IconButton>
                                    <IconButton sx={{background:'#EDF2F9', borderRadius:'3px',height:'20px', width:'20px'}}>
                                        <ArrowBackIosNewIcon sx={{fontSize:'15px'}}/>
                                    </IconButton>
                                </Box>
                                <Box sx={{display:'flex', gap:'10px', alignItems:'center', marginTop:'10px'}}> 
                                    <Typography color={'error'} sx={{fontSize:'14px', fontWeight:700}}>12</Typography>
                                    <Typography sx={{fontSize:'14px'}}>שאלות פתוחות</Typography>
                                    <IconButton sx={{background:'#EDF2F9', borderRadius:'3px',height:'20px', width:'20px'}}>
                                        <ArrowForwardIosIcon sx={{fontSize:'15px'}}/>
                                    </IconButton>
                                    <IconButton sx={{background:'#EDF2F9', borderRadius:'3px', display:'flex',height:'20px', width:'20px'}}>
                                        <ArrowBackIosNewIcon sx={{fontSize:'15px'}}/>
                                    </IconButton>
                                </Box>
                                <Box sx={{display:'flex', gap:'10px', alignItems:'center', position:'absolute', bottom:'10px', width:'100%'}}> 
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
                                <Box sx={{display:'flex', justifyContent:'space-between', position:'absolute', bottom:'0', width:'100%'}}>
                                    <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                                        <Box sx={{background:'red', borderRadius:'50%', height:'10px', width:'10px'}}>
                                        </Box>
                                        <Typography>משוב</Typography>
                                    </Box>
                                    <Box>
                                        <IconButton>
                                            <RemoveRedEyeIcon sx={{color:'black'}}/>
                                        </IconButton>
                                        <IconButton>
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
                          
                                <Box sx={{display:'flex', gap:'20px'}}>
                                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                                        <Button  startIcon={<Box sx={{borderRadius:'50%', bgcolor: data?.id ? '#07FE4C' : '#ED4136',width:'9px', height:'9px' }}/>} sx={{bgcolor:'#EDF2F9', borderRadius:'60px', padding:'2px 16px'}}>
                                            טרם נשלח
                                        </Button>
                                    </Box>
                                    <Box>
                                        <Typography variant='body1'>{`מ.תאריך ${moment(data?.fromDate ? data?.fromDate : fromDate).format('DD-MM-YYYY')}`}</Typography>
                                        <Typography variant='body1'>{`עד.תאריך ${moment(data?.toDate ? data?.toDate : toDate).format('DD-MM-YYYY')}`}</Typography>
                                        {(data?.time || timeChoosed) &&
                                            <Typography variant='body1'>{`שעה ${moment(data?.time ? data?.time: timeChoosed).format('HH:mm')}`}</Typography>
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sx={{display:'flex', justifyContent:'center'}}>
                            <Box>
                                <Button  startIcon={<Box sx={{borderRadius:'50%', bgcolor: data?.answerType ? '#07FE4C' : '#ED4136',width:'9px', height:'9px' }}/>} sx={{bgcolor:'#EDF2F9', borderRadius:'60px', padding:'2px 16px'}}>
                                    {data?.answerType ? 'הוגדר':'לא הוגדר'}
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

            </Grid>
        </Paper>
        <ExerciseDrawer.Send open={open} setOpen={setOpen}/>
        <ExerciseDrawer.Answer open={open2} setOpen={setOpen2}/>
        <ExerciseModal open={openModalPdf} setOpen={setOpenModalPdf}> 
            <Box>
                <PdfUtil link={`/${exercise?.pdf}`} />
            </Box>
        </ExerciseModal>
        <ExerciseModal open={openModalLink} setOpen={setOpenModalLink}>
            <Box >
                <YoutubeIframe link={exercise?.youtubeLink!}/>
            </Box>
        </ExerciseModal>
        <ExerciseModal open={openModalDescription1} setOpen={setOpenModalDescription1}>
                <Typography variant='h4'>
                    {exercise?.description1}
                </Typography>
        </ExerciseModal>
        <ExerciseModal open={openModalDescription2} setOpen={setOpenModalDescription2}>
            <Box >
                <Typography variant='h4'>
                    {exercise?.description2}
                </Typography>
            </Box>
        </ExerciseModal>
        </>

    );
};

export default NavBar;