'use client'
import { Box, IconButton, Tooltip } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const StudentBar = () => {

    const router = useRouter()

    return (
        <Box sx={{display:'flex', justifyContent:'end', alignItems:'center', height:'100%'}}>
            <Tooltip title="QR">
                <IconButton >
                    <Image src={'/images/qr.svg'} alt='' width={30} height={30}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="">
                <IconButton >
                    <Image src={'/images/dash.svg'} alt='' width={20} height={20}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="">
                <IconButton >
                    <Image src={'/images/group.svg'} alt='' width={30} height={30}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="הודעות">
                <IconButton onClick={() => router.push('/teacher/mailbox')}>
                    <Image src={'/images/bill.svg'} alt='' width={25} height={25}/>
                </IconButton>
            </Tooltip>
        </Box>
    );
};

export default StudentBar;