'use client'
import useDataUnreadedMails from '@/hooks/useDataUnreadedMails';
import { useAuth } from '@/modules/auth/store/auth.store';
import { Badge, Box, IconButton, Tooltip } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const StudentBar = () => {
    const {user} = useAuth()
    const router = useRouter()
    const {data: dataMail } = useDataUnreadedMails()

    const handleToMail = () => {
        if(user?.role === 'student'){
            router.push(`/student/mailbox`)
        }

        if(user?.role === 'teacher'){
            router.push(`/teacher/mailbox`)
        }
    }

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
                <Badge badgeContent={dataMail?.length} color="secondary">
                    <IconButton onClick={() => handleToMail()} id="fade-button" >
                        <Image src={'/images/teacher/messages.svg'} alt='' width={30} height={30}/>
                    </IconButton>
                </Badge>
            </Tooltip>

        </Box>
    );
};

export default StudentBar;