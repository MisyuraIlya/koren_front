"use client"
import React, { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Button, CircularProgress, IconButton, TextField, Typography } from '@mui/material';
import SideBars from '../../../../../utils/SideBars';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import InputFileUpload from '../../layout/VisuallyHiddenInput';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import { onAsk } from '@/utils/sweetAlert';
import { MainService } from '@/modules/admin/services/main.service';

const SideBar = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    const [openLink, setOpenLink] = useState(false)
    const {exercise, updateExercise, isLoading} = useAdminExercise()
    const [loading, setLoading] = useState(false)

    const handleSaveLink = async () => {
        try {
            setLoading(true)
            if(exercise){
                updateExercise(exercise.id!.toString(), {youtubeLink: value})
                setValue('')
            }
        } catch(e) {
            console.log('[SideBar]',e)
        } finally {
            setLoading(false)
        }

    }

    const handleDeleteLink = async () => {
        try {
            setLoading(true)
            if(exercise){
                const ask = await onAsk('בטוח למחוק לינק','')
                if(ask){
                    updateExercise(exercise.id!.toString(), {youtubeLink:null})
                }
            }
        } catch(e) {
            console.log('[SideBar]',e)
        } finally {
            setLoading(false)
        }

    }

    const handleUploadPdf = async (file:File) => {
        try {
            setLoading(true)
            if(exercise){
                const filePath = await MainService.UploadMedia(file)
                updateExercise(exercise.id!.toString(), {pdf:filePath?.path})
            }
        } catch(e) {
            console.log('[SideBar]',e)
        } finally {
            setLoading(false)
        }

    }

    const deletePdf = async () => {
        try {
            setLoading(true)
            if(exercise){
                const ask = await onAsk('בטוח למחוק PDF?','')
                if(ask){
                    updateExercise(exercise.id!.toString(), {pdf:null})
                }
            }
        } catch(e) {
            console.log('[SideBar]',e)
        } finally {
            setLoading(false)
        }

    }


    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>

            <Box sx={{display:'flex', gap:'20px'}}>
                {exercise?.pdf &&
                    <Box>
                        <Typography variant='body2'>PDF</Typography>
                        <CheckIcon/>
                    </Box>
                }
                {exercise?.youtubeLink &&
                    <Box>
                        <Typography variant='body2'>לינק</Typography>
                        <CheckIcon/>
                    </Box>
                }
            </Box>

            <IconButton>
                <SettingsIcon fontSize='large' onClick={() => setOpen(!open)}/>
            </IconButton>



            <SideBars anchor='right' isOpen={open} onClose={() => setOpen(false)} isPrimaryBg={false}>
                {(loading || isLoading)?
                    <CircularProgress />
                :
                    <>
                        <Box sx={{width:'600px', margin:'50px 10px'}}>
                            <Typography variant='h4' fontWeight={800}>{exercise?.title}</Typography>
                            <Typography variant='h6' fontWeight={400}>{exercise?.description1}</Typography>
                            <Typography variant='h6' fontWeight={400}>{exercise?.description2}</Typography>
                        </Box>
                        <Box sx={{margin:'10px'}}>
                            <Button component="label" variant="contained" startIcon={<PictureAsPdfIcon />}>
                                העלאת קובץ PDF
                                <InputFileUpload handleOnChange={handleUploadPdf}/>
                            </Button>
                        </Box>
                        {exercise?.pdf &&
                        <Box sx={{margin:'10px', display:'flex', gap:'10px'}}>
                            <IconButton>
                                <DeleteIcon onClick={() => deletePdf()}/>
                            </IconButton>
                            <IconButton>
                                <VisibilityIcon onClick={() => setOpen(!open)}/>
                            </IconButton>
                            <Typography sx={{display:'flex', justifyContent:'center', alignItems:'center'}} variant='body2' fontWeight={800}>{'לינק לPDF'}</Typography>
                        </Box>
                        }
                        <Box sx={{margin:'10px'}}>
                            <Button component="label" variant="contained" startIcon={<YouTubeIcon />} onClick={() => setOpenLink(!openLink)}>
                                העלאת סרטון
                            </Button>
                        </Box>
                        {openLink &&
                        <Box sx={{margin:'10px', display:'flex', gap:'10px'}}>
                            <TextField id="standard-basic" value={value} onChange={(e) => setValue(e.target.value)} label="לינק לסרטון" sx={{width:'70%'}} variant="standard" />
                            <Button  component="label" variant="contained"  onClick={() => handleSaveLink()}>
                                שמירה
                            </Button>
                        </Box>
                        }
                        {exercise?.youtubeLink &&
                        <Box sx={{margin:'10px', display:'flex', gap:'10px'}}>
                            <IconButton>
                                <DeleteIcon onClick={() => handleDeleteLink()}/>
                            </IconButton>
                            <IconButton>
                                <VisibilityIcon onClick={() => setOpen(!open)}/>
                            </IconButton>
                            <Typography sx={{display:'flex', justifyContent:'center', alignItems:'center'}} variant='body2' fontWeight={800}>{exercise?.youtubeLink}</Typography>
                        </Box>
                        }
                    </>
                }


            </SideBars>
        </Box>
    );
};

export default SideBar;