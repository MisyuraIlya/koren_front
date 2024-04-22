import { Box, Button, Drawer, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, Typography } from '@mui/material';
import React,{FC} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { themeColors } from '@/styles/mui';

interface SendProps {
    open: boolean
    setOpen: (value: boolean) => void
}

const Answer:FC<SendProps> = ({open, setOpen}) => {
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
                backgroundColor: 'transparent',
              },
        }}
    >
       <Box sx={{minWidth:'300px'}}>
            <Box sx={{background:themeColors.primary, display:'flex', gap:'10px', alignItems:'center', padding:'10px 20px'}}>
                <IconButton onClick={() => setOpen(false)}>
                    <CloseIcon sx={{color:'white'}}/>
                </IconButton>
                <Typography variant='h6' sx={{color:'white', fontWeight:700}}>פתיחת תשובות לתרגיל</Typography>
            </Box>
            <Box sx={{margin:'20px 40px'}}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label" sx={{color:'black'}}>סוג התרגיל:</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="תרגול - ללא תזמון" />
                        <FormControlLabel value="male" control={<Radio />} label="מבדק" />


                        <FormControlLabel value="other" control={<Radio />} label="מבחן" />
                        <Button variant='contained'>
                            שליחה
                        </Button>
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    </Drawer>
    );
};

export default Answer;