import { Alert, Box, Snackbar } from '@mui/material';
import React from 'react';
import Mailer from '@/components/mailer';
import { useMailStore } from '@/store/mail.store';
import MailerChat from '@/components/mailerChat';

const page = () => {
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