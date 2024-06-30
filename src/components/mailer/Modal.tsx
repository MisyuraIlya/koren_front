'use client'
import { useMailStore } from '@/store/mail.store';
import { Alert, Autocomplete, Box, Button, Drawer, FormControl, IconButton, Input, InputAdornment, InputLabel, Snackbar, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import useDataUsersMail from '@/hooks/useDataUsersMail';
import { MailService } from '@/services/mailService';
import { useAuth } from '@/modules/auth/store/auth.store';
import useDataMail from '@/hooks/useDataMail';

const Modal = () => {
    const {user} = useAuth()
    const {open, setOpen, title, setError, setSuccess, setTitle, description, setDescription, selectedUsers, setSelectedUsers} = useMailStore()
    const {data} = useDataUsersMail()
    const {mutate} = useDataMail()
    const handleChange = (event: React.ChangeEvent<{}>, value: IUser[]) => {
        setSelectedUsers(value);
    }

    const sendMail = async () => {
        const users = selectedUsers?.map((item) => item.id)
        users.push(user?.id)
        const obj = {
            sendTo:users,
            title: title,
            description: description
        } as DtoMail
        const response = await MailService.createMail(user?.id!, obj)
        if(response){
            setSuccess(true)
            setSelectedUsers([])
            setTitle('')
            setDescription('')
            setOpen(false)
            setTimeout(() => {
                mutate()
            },3000)
        } else {
            setError(true)
        }
    }
    return (
        <Drawer 
            anchor='bottom' 
            open={open} 
            onClose={() => setOpen(false)}
            sx={{
                '& .MuiDrawer-paper': {
                border: 'none',
                width:'600px',
                backgroundColor: 'white',
                left: 'auto',       
                right: '200px',
                height:'600px', 
                borderTopLeftRadius:'10px',
                borderTopRightRadius:'10px',
                },
                '& .MuiBackdrop-root': {
                    backgroundColor: 'transparent', 
                },
            }}
        >

            <Box sx={{justifyContent:'space-between', display:'flex', padding:'5px 10px'}}>
                <IconButton onClick={() => setOpen(false)}>
                    <CloseIcon/>
                </IconButton>
                <Typography sx={{padding:'10px 20px'}}>
                    {title ? 
                    title
                    :
                    'הודעה'
                    }
                </Typography>
            </Box>
            <Box sx={{padding:'0 30px'}}>
  
                <Stack>
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={data || []}
                        getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
                        onChange={handleChange}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="משתמש"
                            placeholder="בחר משתמש"
                        />
                        )}
                    />
                </Stack>
                <FormControl variant="standard" sx={{padding:'10px 0'}} fullWidth>
                    <Input placeholder='כותרת' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <TextField sx={{margin:'20px 0'}} label="תאור" variant="outlined" multiline rows={13} value={description} onChange={(e) => setDescription(e.target.value)}/>
                </FormControl>
                <Box sx={{justifyContent:'space-between', display:'flex'}}>
                    <Button variant='contained' onClick={() => sendMail()}>
                        שליחת הודעה
                    </Button>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </Box>
            </Box> 
    
        </Drawer>
    );
};

export default Modal;

