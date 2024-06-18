'use client'
import { Alert, Box, Snackbar } from '@mui/material';
import React from 'react';
import Mailer from '@/components/mailer';
import { useMailStore } from '@/store/mail.store';

const page = () => {
    const {success,setSuccess,error,setError} = useMailStore()
    return (
        <Box>
            <Mailer.Filter/>
            <Box sx={{paddingTop:'20px'}}>
                <Mailer.List/>
            </Box>
            <Mailer.Modal/>
            <Mailer.PaginationMailer/>

            <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                <Alert
                onClose={() => setSuccess(false)}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
                >
                הודעה נשלחה בהצלחה
                </Alert>
            </Snackbar>
            <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
                <Alert
                onClose={() => setError(false)}
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
                >
                שגיאה הודעה לא נשלחה
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default page;