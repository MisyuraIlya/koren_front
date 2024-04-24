import { Box, Button, Drawer, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React,{FC} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { themeColors } from '@/styles/mui';
import useDataExerciseTypes from '@/modules/teacher/hooks/useDataExerciseTypes';
import { useTeacherWork } from '@/modules/teacher/store/work.store';


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

interface SendProps {
    open: boolean
    setOpen: (value: boolean) => void
}
const Send:FC<SendProps> = ({open, setOpen}) => {
    const {data} = useDataExerciseTypes()
    const {sendType,setSendType} = useTeacherWork()
    return (
        <Drawer
            open={open} 
            onClose={() => setOpen(false)} 
            anchor='right'
            SlideProps={{
                direction:'right'
            }}
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
                    {/* <SendForm/> */}
                    <FormControl>
                        <FormLabel sx={{color:'black'}}>סוג התרגיל:</FormLabel>
                        <RadioGroup
                            value={sendType}
                            onChange={(e) => setSendType(e.target.value as sendExerciseType)}
                        >
                            {data?.map((item,index) =>
                                <Box key={index}>
                                    <FormControlLabel key={index} value={item.title} control={<Radio />} label={item.title} />
                                    {item?.title == sendType &&
                                        <Box sx={{display:'flex', gap:'5px'}}>
                                        {
                                            item?.isDateable && 
                                                <DemoContainer components={['DatePicker']}>
                                                    <DatePicker label="תאריך" />
                                                </DemoContainer>
                                        }   
                                        {
                                            item?.isTimeable &&
                                            <DemoContainer components={['TimePicker']}>
                                                <TimePicker label="שעה"  views={['hours','minutes']}/>
                                            </DemoContainer>
                                        }
                                        </Box>
                                    }
                                </Box>
                            )}
                        </RadioGroup>
                        <Button variant='contained'>
                            שליחה
                        </Button>
                    </FormControl>
                </Box>
            </Box>
        </Drawer>
    );
};

export default Send;