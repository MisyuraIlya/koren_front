'use client'
import useDataMailChat from '@/hooks/useDataMailchat';
import { Alert, Box, Button, Snackbar, TextField } from '@mui/material';
import React, { useState } from 'react';

const Add = () => {
    const {create} = useDataMailChat()
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSend = () => {
        create(message)
        setSuccess(true)
        setMessage('')
    }

    return (
        <Box sx={{display:'flex', gap:'20px', padding:'30px 0'}}>
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
            <TextField value={message} onChange={(e) => setMessage(e.target.value)} label="הודעה" variant="outlined" sx={{minWidth:'600px'}}/>
            <Button variant='contained' onClick={() => handleSend()}>
                שלח
            </Button>
        </Box>
    );
};

export default Add;