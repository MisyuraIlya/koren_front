import { Box, Button, Drawer, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, Typography } from '@mui/material';
import React,{FC} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { themeColors } from '@/styles/mui';
import SendForm from './Send/SendForm';

interface SendProps {
    open: boolean
    setOpen: (value: boolean) => void
}
const Send:FC<SendProps> = ({open, setOpen}) => {
    return (
        <Drawer
            open={open} 
            onClose={() => setOpen(false)} 
            anchor='right'
            sx={{
                '& .MuiDrawer-paper': {
                border: 'none',
                marginTop: '132px',
                backgroundColor: 'white', 
                },
                '& .MuiBackdrop-root': {
                    backgroundColor: 'transparent', // Set backdrop color to transparent
                  },
            }}
        >
           <Box sx={{minWidth:'300px'}}>
                <Box sx={{background:themeColors.primary, display:'flex', gap:'10px', alignItems:'center', padding:'10px 20px'}}>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon
                         sx={{color:'white'}}/>
                    </IconButton>
                    <Typography variant='h6' sx={{color:'white', fontWeight:700}}>שליחת תרגיל</Typography>
                </Box>
                <Box sx={{margin:'20px 40px'}}>
                <SendForm/>
       
                </Box>
            </Box>
        </Drawer>
    );
};

export default Send;