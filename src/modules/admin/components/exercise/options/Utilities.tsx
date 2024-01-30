"use client"
import { Box, Button, IconButton, Paper, Typography, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import IconUtil from '@/../public/images/utilities.svg'
import Image from 'next/image';
import SideBars from '@/utils/SideBars';
import InputFileUpload from '../../layout/VisuallyHiddenInput';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import DeleteIcon from '@mui/icons-material/Delete';
import { MainService } from '@/modules/admin/services/main.service';
import { PdfUtilitiesService } from '@/modules/admin/services/adminPdfUtilities';
import { onAsk } from '@/utils/sweetAlert';

const Utilities = () => {
    const [open, setOpen] = useState(false)
    const {exercise, createPdfUtilities, deletePdfUtilities} = useAdminExercise()
    const [loading, setLoading] = useState(false)
    const [pdfUtilities, setPdfUtilities] = useState<IPdfUtilities[]>([])
    const openPdf = (pdf: string) => {
        window.open(`http://3.74.228.194:4000/${pdf}`, '_blank', 'noopener');
    }   

    const handleUploadPdf = async (file:File) => {
        try {
            setLoading(true)
            if(exercise){
                const filePath = await MainService.UploadMedia(file)
                if(filePath?.path) {
                    createPdfUtilities(exercise?.course!?.id!.toString(), {pdf:filePath.path, title:file.name})
                }
            }
        } catch(e) {
            console.log('[SideBar]',e)
        } finally {
            setLoading(false)
        }
    }

    const onDragEnd = (result:any) => {
        if (!result.destination) {
            return;
        }
        if(exercise){
            const reorderedUtilities = Array.from(pdfUtilities);
    
            const [movedItem] = reorderedUtilities.splice(result.source.index, 1);
            reorderedUtilities.splice(result.destination.index, 0, movedItem);
            setPdfUtilities(reorderedUtilities);
    
            reorderedUtilities.forEach((item, index) => {
                item.orden = index + 1;
            });
    
            PdfUtilitiesService.sortabelPdfUtilities(reorderedUtilities)
        }
    

    };

    const handleDelete = async (id: string | number) => {
        const ask = await onAsk('בטוח למחוק PDF זה?','');
        if(ask){
            deletePdfUtilities(id)
        }
    }

    useEffect(() => {
        if(exercise){
            setPdfUtilities(exercise?.course!?.pdfUtilities!)
        }
    },[exercise])

    return (
        <>
        <Box>
            <IconButton>
                <Image src={IconUtil} width={30} height={30} alt='util' onClick={() => setOpen(true)}/>
            </IconButton>
        </Box>
        <SideBars anchor='right' isOpen={open} onClose={() => setOpen(false)} isPrimaryBg={false}>
            <Box sx={{width:'500px', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'100px'}}>
                <Box>
                    <Button component="label" variant="contained" startIcon={<PictureAsPdfIcon />}>
                        העלאת קובץ PDF
                        <InputFileUpload handleOnChange={handleUploadPdf}/>
                    </Button>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="pdfUtilitiesList" direction="vertical">
                            {(provided) => (
                                <Box ref={provided.innerRef} {...provided.droppableProps}>
                                    {pdfUtilities?.map((item, index) => (
                                        <Draggable key={item.id} draggableId={`pdf-${item.id}`} index={index}>
                                            {(provided) => (
                                                <Box
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    sx={{display:'flex', marginTop:'20px', gap:'20px'}}
                                                >
                                                    <Card onClick={() => openPdf(item.pdf)} sx={{display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer', minWidth:'100px',maxWidth:'150px'}}>
                                                        <Typography variant='h6' textAlign={'center'}>{item.name}</Typography>
                                                    </Card>
                                                    
                                                    <IconButton aria-label="delete" size="large" onClick={() => handleDelete(item!?.id!)}>
                                                        <DeleteIcon fontSize="inherit" />
                                                    </IconButton>

                                                </Box>
                                            )}
                                        </Draggable>
                                    ))}
                                </Box>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Box>
            </Box>
        </SideBars>
        
        </>

    );
};

export default Utilities;