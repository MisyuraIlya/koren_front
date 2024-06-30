'use client'
import { Alert, Box, Snackbar } from '@mui/material';
import React, { useEffect } from 'react';
import Mailer from '../../../../../../components/mailer';
import { useMailStore } from '@/store/mail.store';
import MailerChat from '@/components/mailerChat';
import { useAuth } from '@/modules/auth/store/auth.store';
import { MailService } from '@/services/mailService';
import { useParams } from 'next/navigation';

const page = () => {
    const {user} = useAuth()
    const { id } = useParams()
    const handleRead = async () => {  
        await MailService.updateReadMail(id! as string ,user?.id!)
    }

    useEffect(() => {
        handleRead()
    },[]) 

    return (
        <Box sx={{height:'75vh'}}>
            <Box sx={{height:'90%', overflow:'auto'}}>
                <MailerChat.List/>
            </Box>
            <Box sx={{height:'10%'}}>
                <MailerChat.Add/>
            </Box>
        </Box>
    );
};

export default page;