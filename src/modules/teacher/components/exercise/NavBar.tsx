'use client'
import { Box, Button, Chip, Divider, Drawer, FormControl, FormControlLabel, FormLabel, Grid, IconButton, InputBase, MenuItem, Paper, Radio, RadioGroup, Select, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import BookIcon from '@/../public/images/book.svg';
import VideoIcon from '@/../public/images/video.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import BorderColorIcon from '@mui/icons-material/BorderColor';
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
    const [choosedType, setChoosedType] = useState('')
    const [open, setOpen] = React.useState(false);
    const [openModalPdf, setOpenModalPdf] = useState(false)
    const [openModalLink, setOpenModalLink] = useState(false)
    const [openModalDescription1, setOpenModalDescription1] = useState(false)
    const [openModalDescription2, setOpenModalDescription2] = useState(false)
    const {exercise} = useExercise()
    const {classChoosed} = useTeacherWork()
    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };
    return (
        <>
        <Paper elevation={2} sx={{height:'160px', width:'100%', padding:'20px 30px', bgcolor:'white'}}>
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
                {
                    classChoosed &&
                    <>
                        <Divider orientation="vertical" flexItem sx={{color:'#BDD0EA'}}/>
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
                        <Divider orientation="vertical" flexItem sx={{color:'#BDD0EA'}}/>
                        <Grid item xs={2} sx={{display:'flex', justifyContent:'center'}}>
                            <Box>
                                <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}> 
                                    <Typography color={'error'} sx={{fontSize:'14px', fontWeight:700}}>12</Typography>
                                    <Typography sx={{fontSize:'14px'}}>תשובות שגויות</Typography>
                                    <IconButton sx={{background:'#EDF2F9', borderRadius:'3px', ml:'3px'}}>
                                        <ArrowForwardIosIcon sx={{fontSize:'20px'}}/>
                                    </IconButton>
                                    <IconButton sx={{background:'#EDF2F9', borderRadius:'3px'}}>
                                        <ArrowBackIosNewIcon sx={{fontSize:'20px'}}/>
                                    </IconButton>
                                </Box>
                                <Box sx={{display:'flex', gap:'10px', alignItems:'center', marginTop:'10px'}}> 
                                    <Typography color={'error'} sx={{fontSize:'14px', fontWeight:700}}>12</Typography>
                                    <Typography sx={{fontSize:'14px'}}>שאלות פתוחות</Typography>
                                    <IconButton sx={{background:'#EDF2F9', borderRadius:'3px'}}>
                                        <ArrowForwardIosIcon sx={{fontSize:'20px'}}/>
                                    </IconButton>
                                    <IconButton sx={{background:'#EDF2F9', borderRadius:'3px', display:'flex'}}>
                                        <ArrowBackIosNewIcon sx={{fontSize:'20px'}}/>
                                    </IconButton>
                                </Box>
                                <Box sx={{display:'flex', gap:'10px', alignItems:'center', marginTop:'10px'}}> 
                                    <IconButton sx={{padding:'0'}}>
                                        <VisibilityOffIcon/>
                                    </IconButton>
                                    <Typography>הסתרת השאלות הפתוחות</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Divider orientation="vertical" flexItem sx={{color:'#BDD0EA'}}/>
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
                                            <BorderColorIcon sx={{color:'black'}}/>
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Divider orientation="vertical" flexItem sx={{color:'#BDD0EA'}}/>
                        <Grid item xs={2.5} sx={{display:'flex', justifyContent:'center', position:'relative'}}>
                            <Box>
                                <Box sx={{display:'flex', alignItems:'center'}}>
                                    <Typography>סוג התרגיל:</Typography>
                                    <Select
                                        value={choosedType}
                                        onChange={(event) => setChoosedType(event.target.value)}
                                        placeholder='יחידה'
                                        sx={{ width:'160px',background: 'white', margin: '10px', height: '30px', border:'1px solid #BACEE9'}}
                                    >
                                        {type?.map((item) =>
                                            <MenuItem  value={item.name}>{item.name}</MenuItem>
                                        )}
                                    </Select>
                                </Box>
                                <Box sx={{display:'flex', gap:'20px'}}>
                                    <Chip
                                        label="טרם נשלח"
                                        sx={{background:'#EDF2F9', pl:'5px'}}
                                        avatar={<Box sx={{ bgcolor: 'red', borderRadius: '50%', height: '10px !important', width: '10px !important' , pb:'3px'}} />}
                                    />
                                    <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                                        <CalendarTodayIcon sx={{fontSize:'20px'}}/>
                                        <Typography variant='body1'>13.3.2023</Typography>
                                    </Box>
                                    <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                                        <AccessTimeIcon/>
                                        <Typography variant='body1'>14:00</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Divider orientation="vertical" flexItem sx={{color:'#BDD0EA'}}/>
                        <Grid item xs={1.5} sx={{display:'flex', justifyContent:'center'}}>
                            <Box>
                                <Chip
                                    label="התשובות סגורות"
                                    sx={{background:'#EDF2F9', pl:'5px'}}
                                    avatar={<Box sx={{ bgcolor: 'red', borderRadius: '50%', height: '10px !important', width: '10px !important' , pb:'3px'}} />}
                                />
                                <IconButton onClick={() => setOpen(true)}>
                                    <BorderColorIcon sx={{color:'black'}}/>
                                </IconButton>
                            </Box>
                        </Grid>
                    </>
                }

            </Grid>
        </Paper>
        <Drawer 
            open={open} 
            onClose={toggleDrawer(false)} 
            anchor='right'
            sx={{
                '& .MuiDrawer-paper': {
                border: 'none',
                marginTop: '132px',
                backgroundColor: 'white', 
                },
                '& .MuiBackdrop-root': {
                    backgroundColor: 'transparent', // Set backdrop color to transparent
                  },
            }}
        >
           <Box sx={{minWidth:'300px'}}>
                <Box sx={{background:themeColors.primary, display:'flex', gap:'10px', alignItems:'center', padding:'10px 20px'}}>
                    <IconButton onClick={toggleDrawer(false)}>
                        <CloseIcon sx={{color:'white'}}/>
                    </IconButton>
                    <Typography variant='h6' sx={{color:'white', fontWeight:700}}>שליחת תרגיל</Typography>
                </Box>
                <Box sx={{margin:'20px 40px'}}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label" sx={{color:'black'}}>סוג התרגיל:</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="תרגול - ללא תזמון" />
                            <FormControlLabel value="male" control={<Radio />} label="מבדק" />


                            <FormControlLabel value="other" control={<Radio />} label="מבחן" />
                            <Button variant='contained'>
                                שליחה
                            </Button>
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
        </Drawer>
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