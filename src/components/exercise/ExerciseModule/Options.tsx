'use client'
import { useExercise } from '@/provider/ExerciseProvider';
import SideBars from '@/utils/SideBars';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ExerciseModal from '../ExerciseModal';
import PdfUtil from '@/utils/PdfUtil';

const Options = () => {
    const {exercise} = useExercise()
    const [openPdf, setOpenPdf] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [choosedLink, setChoosedLink] = useState('')

    return (
        <>
        <Box sx={{display:'flex', justifyContent:'end', padding:'10px', gap:'5px'}}>
            <IconButton>
                <Image src={'/images/option_4.svg'} alt='robo' width={30} height={30}/>
            </IconButton>
            <IconButton onClick={() => setOpenPdf(true)}>
                <Image src={'/images/option_3.svg'} alt='robo' width={25} height={25}/>
            </IconButton>
            <IconButton>
                <Image src={'/images/option_2.svg'} alt='robo' width={40} height={40}/>
            </IconButton>
            <IconButton>
                <Image src={'/images/option_1.svg'} alt='robo' width={30} height={30}/>
            </IconButton>
        </Box>
        <Drawer
            open={openPdf}
            onClose={() => setOpenPdf(false)}
            anchor='right'
            SlideProps={{
                direction: 'right'
            }}
            sx={{
                '& .MuiDrawer-paper': {
                    border: 'none',
                    marginTop: '132px',
                    backgroundColor: 'white',
                },
                '& .MuiBackdrop-root': {
                    backgroundColor: 'transparent',
                },
            }}
        >
            <Box sx={{
                width: '400px',
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '0 5%',
            }}>
                <Box sx={{padding:'10px 0'}}>
                    <IconButton onClick={() => setOpenPdf(false)}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Typography variant='h5'>
                    קבצי עזר
                </Typography>
                <List>
                    {exercise?.pdfs?.map((item) =>
                    <ListItem disablePadding>
                       <ListItemButton onClick={() => {setChoosedLink(item?.pdf);setOpenModal(true)}}>
                            <ListItemIcon>
                                <PictureAsPdfIcon />
                            </ListItemIcon>
                            <ListItemText primary={item?.name} />
                        </ListItemButton>
                    </ListItem>   
                    )}
                </List>
            </Box>
        </Drawer>
        <ExerciseModal open={openModal} setOpen={setOpenModal}> 
            <Box>
                <PdfUtil link={`/${choosedLink}`} />
            </Box>
        </ExerciseModal>
        </>

    );
};

export default Options;