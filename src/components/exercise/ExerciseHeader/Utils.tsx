'use client'
import { Box, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import BookIcon from '@/../public/images/book.svg';
import VideoIcon from '@/../public/images/video.svg';
import { useModal } from '@/modules/modal/provider/ModalProvider';
import { useExercise } from '@/provider/ExerciseProvider';

const Utils = () => {
    const {handleIframe, handleExplanation} = useModal()
    const {exercise} = useExercise()

    const handleIframeFunc = () => {
        handleIframe(exercise?.youtubeLink!)
    }

    const handleExplanationFunc = () => {
        handleExplanation(exercise?.description1!)
    }
    
    return (
        <Box>
            <Box sx={{ display: 'flex', gap: '20px' }}>
                <Paper elevation={4} sx={{ width: '120px', height: '80px', background: '#F0FBFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor:'pointer' }} onClick={() => handleIframeFunc()}>
                    <Image src={VideoIcon} width={50} height={50} alt='VideoIcon' />
                    <Typography variant='body2' textAlign={'center'} fontWeight={700}>לצפות וללמוד</Typography>
                </Paper>
                <Paper elevation={4} sx={{ width: '120px', height: '80px', background: '#F0FBFF', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onClick={() => handleExplanationFunc()}>
                    <Image src={BookIcon} width={70} height={70} alt='BookIcon' />
                    <Typography variant='body2' textAlign={'center'} fontWeight={700}>הסבר</Typography>
                </Paper>
            </Box>
        </Box>
    );
};

export default Utils;
