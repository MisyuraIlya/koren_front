'use client'
import { Box, Button, Checkbox, Drawer, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, InputAdornment, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React,{FC, useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { themeColors } from '@/styles/mui';
import { useTeacherWork } from '@/store/work.store';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import moment from 'moment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import { onInfoAlert } from '@/utils/sweetAlert';
import useDataConnectionGroup from '@/hooks/useDataConnectionGroup';
import useDataExerciseTypes from '@/hooks/useDataExerciseTypes';

interface SendProps {
    open: boolean
    setOpen: (value: boolean) => void
}
const Send:FC<SendProps> = ({open, setOpen}) => {
    const {data} = useDataExerciseTypes()
    const {sendType,setSendType, fromDate, toDate, setFromDate, setToDate, timeChoosed, setTimeChoosed, groupSelected} = useTeacherWork()
    const [isStudent, setIsStudent] = useState(false)
    const [choosedType, setChoosedType] = useState('')
    const [search, setSearch] = useState('')
    const [filteredStudents, setFilteredStudents] = useState<IUser[]>([]);
    const [choosedStudents, setChoosedStudents] = useState<IUser[]>([])
    const {data: connectionData,createGroupConnection} = useDataConnectionGroup()

    const handleSearchChange = (value: string) => {
        const searchTerm = value.toLowerCase();
        setSearch(searchTerm);
        if (groupSelected?.students) {
            const filtered = groupSelected?.students.filter(item => item?.firstName.toLowerCase().includes(searchTerm));
            setFilteredStudents(filtered);
        }
    };

    const handleSend = () => {
        if(connectionData?.id ){
            onInfoAlert('טרם נשלח','')
        } else {
            if(choosedType == 'all'){
                createGroupConnection(groupSelected?.students!)
            } else {
                createGroupConnection(choosedStudents)
            }
        }
        setOpen(false)
    }

    const handleChange = (student: IUser) => {
        const updatedStudents = choosedStudents.includes(student)
            ? choosedStudents.filter(s => s.id !== student.id)
            : [...choosedStudents, student];
        setChoosedStudents(updatedStudents);
    };


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
                        <CloseIcon
                        sx={{color:'white'}}/>
                    </IconButton>
                    <Typography variant='h6' sx={{color:'white', fontWeight:700}}>שליחת תרגיל</Typography>
                </Box>
                {isStudent ? 
                <Box sx={{p:'20px 30px'}}>
                    <IconButton sx={{float:'right'}} onClick={() => setIsStudent(false)}>
                        <ArrowBackIcon color='primary'/>
                    </IconButton>
                    <FormControl>
                        <RadioGroup
                            value={choosedType}
                            onChange={(e) => setChoosedType(e.target.value)}
                        >
                            <FormControlLabel value="all" control={<Radio />} label="לכל הכיתה" />
                            <FormControlLabel value="student" control={<Radio />} label="לתלמיד" />
                            {choosedType == 'student' && 
                                <Box>
                                    <TextField
                                        value={search}
                                        onChange={(e) => handleSearchChange(e.target.value)}
                                        label="חיפוש"
                                        sx={{ 
                                            background: 'white', 
                                            borderRadius: '8px',
                                        }}
                                        InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                        }}
                                        variant="outlined"
                                    />
                                    <FormGroup >
                                        {(search ? filteredStudents : groupSelected?.students)?.map((student,index) =>
                                            <FormControlLabel key={index} control={<Checkbox   checked={choosedStudents.includes(student)} onChange={() => handleChange(student)}/>} label={student?.firstName} />
                                        )}
                                    </FormGroup>
                                </Box>
                            }
                        </RadioGroup>
                        <Button onClick={() => handleSend()} variant='contained' fullWidth>
                            שלח
                        </Button>
                    </FormControl>
                </Box>
                :
                <Box>
                    <Box sx={{margin:'20px 40px'}}>
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
                                            <Box>
                                            {
                                                item?.isDateable && 
                                                <>
                                                <Box>
                                                    <DemoContainer components={['DatePicker']}>
                                                        <DatePicker label="תאריך התחלה" value={moment(fromDate)} onChange={(e) => setFromDate(new Date(e?.toString()!))}/>
                                                    </DemoContainer>
                                                </Box>
                                                <Box>
                                                    <DemoContainer components={['DatePicker']}>
                                                        <DatePicker label="תאריך סיום" value={moment(toDate)} onChange={(e) => setToDate(new Date(e?.toString()!))}/>
                                                    </DemoContainer>
                                                </Box>
                                                </>
                                            }   
                                            {
                                                item?.isTimeable &&
                                                <Box>
                                                    <DemoContainer components={['TimePicker']}>
                                                        <TimePicker label="שעה"  views={['hours','minutes']} value={moment(timeChoosed)} onChange={(e) => setTimeChoosed(e?.toString()!)}/>
                                                    </DemoContainer>
                                                </Box>
                                            
                                            }
                                            </Box>
                                        }
                                    </Box>
                                )}
                            </RadioGroup>
                            <Button variant='contained' onClick={() => setIsStudent(true)}>
                                בחירת תלמידים
                            </Button>
                        </FormControl>
                    </Box>
                </Box>
                }
            </Box>
        </Drawer>
    );
};

export default Send;