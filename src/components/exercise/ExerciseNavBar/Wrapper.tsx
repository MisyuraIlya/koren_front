'use client'
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoIcon from '@/../public/images/video.svg';
import BookIcon from '@/../public/images/book.svg';
import { useExercise } from '@/provider/ExerciseProvider';
import ExerciseModal from '../ExerciseModal';
import PdfUtil from '@/utils/PdfUtil';
import YoutubeIframe from '@/utils/YoutubeIframe';
import { ExerciseEnum } from '@/enums/exerciseType';
import { useAuth } from '@/modules/auth/store/auth.store';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const {exercise,showNavBar} = useExercise()
    const { user } = useAuth()
    const [openModalDescription1, setOpenModalDescription1] = useState(false)
    const [openModalDescription2, setOpenModalDescription2] = useState(false)
    const [openModalPdf, setOpenModalPdf] = useState(false)
    const [openModalLink, setOpenModalLink] = useState(false)

    const isOpenLink = exercise?.youtubeLink !== '' && (!(exercise?.group?.exerciseType?.title === ExerciseEnum.EXAME) || user?.role === 'teacher') 
    const isOpenPdf = exercise?.pdf !== '' && (!(exercise?.group?.exerciseType?.title === ExerciseEnum.EXAME) || user?.role === 'teacher') 

    return (
        <>
        {showNavBar &&
            <Paper elevation={2} sx={{width:'100%', bgcolor:'white', height:'160px', padding:'0 30px', marginTop:'130px', display:'flex', alignItems:'center'}}>
                <Grid container sx={{height:'100%', alignItems:'center'}}>
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
                                <Paper 
                                    elevation={4} 
                                    sx={{ opacity: isOpenLink ? '1' : '0.5' , width: '120px', height: '80px', background: '#E7F3E8', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor:'pointer', border:'0.63px solid #378CF54D'}} 
                                    onClick={() => {isOpenLink && setOpenModalLink(true)}}
                                >
                                    <Image src={VideoIcon} width={50} height={50} alt='VideoIcon' />
                                    <Typography variant='body2' textAlign={'center'} fontWeight={700}>לצפות וללמוד</Typography>
                                </Paper>
                                <Paper 
                                    elevation={4} 
                                    sx={{ opacity:isOpenPdf ? '1' : '0.5', width: '120px', height: '80px', background: '#E7F3E8', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border:'0.63px solid #378CF54D', cursor:'pointer'}} 
                                    onClick={() => {isOpenPdf && setOpenModalPdf(true)}}
                                >
                                    <Image src={BookIcon} width={70} height={70} alt='BookIcon' />
                                    <Typography variant='body2' textAlign={'center'} fontWeight={700}>הסבר</Typography>
                                </Paper>
                            </Box>
                        </Box>
                    </Grid>
                    {children}
                </Grid>
            </Paper>
        }

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

export default Wrapper;