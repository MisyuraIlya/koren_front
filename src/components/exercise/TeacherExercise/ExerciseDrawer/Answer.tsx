'use client'
import { Box, Button, Checkbox, Drawer, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, Radio, RadioGroup, Typography } from '@mui/material';
import React,{FC, useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { themeColors } from '@/styles/mui';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useTeacherWork } from '@/store/work.store';
import moment from 'moment';
import useDataConnectionGroup from '@/hooks/useDataConnectionGroup';

interface SendProps {
    open: boolean
    setOpen: (value: boolean) => void
}

const choises = [
    {
        id:1,
        name:'ידנית',
        isDatable:false,
        isMultiCheck:false
    },
    {
        id:2,
        name:'לפי תאריך',
        isDatable:true,
        isMultiCheck:false
    },
    {
        id:3,
        name:'כל הכיתה',
        isDatable:false,
        isMultiCheck:false
    },
    {
        id:4,
        name:'לפי תלמיד',
        isDatable:false,
        isMultiCheck:true
    }
]

const Answer:FC<SendProps> = ({open, setOpen}) => {
    const {openAnswerAt, setOpenAnswerAt, openHourAnswerAt, setOpenHourAnswerAt,groupSelected, answerType, setAnswerType} = useTeacherWork()
    const [choosedStudents, setChoosedStudents] = useState<IUser[]>([])
    const {createGroupAnswer,data} = useDataConnectionGroup()

    const handleChange = (student: IUser) => {
        const updatedStudents = choosedStudents.includes(student)
            ? choosedStudents.filter(s => s.id !== student.id)
            : [...choosedStudents, student];
        setChoosedStudents(updatedStudents);
    };

    const handleSend = () => {
        if(answerType == 'לפי תאריך'){
            createGroupAnswer(
                groupSelected?.students!,
                openAnswerAt,
                openHourAnswerAt
            )
        } else if(answerType == 'לפי תלמיד') {
            createGroupAnswer(choosedStudents)
        } else {
            createGroupAnswer(groupSelected?.students!)
        }
        setOpen(false)
    }

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
                backgroundColor: 'transparent', 
            },
        }}
    >
       <Box sx={{minWidth:'370px'}}>
            <Box sx={{background:themeColors.primary, display:'flex', gap:'10px', alignItems:'center', padding:'10px 20px'}}>
                <IconButton onClick={() => setOpen(false)}>
                    <CloseIcon sx={{color:'white'}}/>
                </IconButton>
                <Typography variant='h6' sx={{color:'white', fontWeight:700}}>פתיחת תשובות לתרגיל</Typography>
            </Box>
            <Box sx={{margin:'20px 40px'}}>
                <FormControl>
                    <RadioGroup
                        defaultChecked={choises?.some((item) => item.name === answerType)}
                        value={answerType}
                        onChange={(e) => setAnswerType(e.target.value)}
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        {choises?.map((item,index) =>
                        <Box key={index}>
                            <FormControlLabel value={item.name} control={<Radio />} label={item.name} />
                            {item?.isDatable && answerType == item.name &&
                            <Box>
                                <Box>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="תאריך התחלה" value={moment(openAnswerAt)} onChange={(e) => setOpenAnswerAt(new Date(e?.toString()!))}/>
                                    </DemoContainer>
                                </Box>
                                <Box>
                                    <DemoContainer components={['TimePicker']}>
                                        <TimePicker label="שעה"  views={['hours']} value={moment(data?.answerTime ? data?.answerTime : openHourAnswerAt)} onChange={(e) => setOpenHourAnswerAt(e?.toString()!)}/>
                                    </DemoContainer>
                                </Box>
                            </Box>
                                       
                            }
                            {item?.isMultiCheck && answerType == item.name &&
                                <FormGroup >
                                    {groupSelected?.students?.map((student,index) =>
                                        <FormControlLabel key={index} control={<Checkbox   checked={choosedStudents.includes(student)} onChange={() => handleChange(student)}/>} label={student?.firstName} />
                                    )}
                                </FormGroup>
                            } 
                        </Box>
                        )}

                      
                    </RadioGroup>
                    <Button variant='contained' fullWidth onClick={() => handleSend()} disabled={!data?.id}>
                        שליחה
                    </Button>
                </FormControl>
             
            </Box>
        </Box>
    </Drawer>
    );
};

export default Answer;