'use client'
import React from 'react';
import useDataClass from '../../../../hooks/useDataClass';
import { Box, Button, Checkbox, Divider, FormControl, Grid, InputBase, List, ListItemText, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import ListItemWithCheckBox from '@/utils/ListItemWithCheckBox';
import { useGroups } from '../../../../store/groups.store';
import { useAuth } from '@/modules/auth/store/auth.store';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const SupportRightSide = () => {
    const {data} = useDataClass()
    const {students, setStudents,groupName,setGroupName} = useGroups()
    const {user} = useAuth()
    const handleClickValue = (value: string) => {
        const isSelected = students.some(student => student.id === +value);
        if (isSelected) {
            const updatedStudents = students.filter(student => student.id !== +value);
            setStudents(updatedStudents);
        } else {
            const selectedStudent: IUser | undefined = data
                ?.map(item => item.students.find(student => student.id === +value))
                .find(Boolean);
            if (selectedStudent) {
                const updatedStudents = [...students, selectedStudent];
                setStudents(updatedStudents);
            }
        }
    };

    return (
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{width:'50%'}}>
                <Box sx={{display:'flex', gap:'10px', marginBottom:'10px'}}>
                    <Image src={'/images/teacher/computer.svg'} width={30} height={30} alt='computer' />
                    <Typography variant='h6' color={'#0172E8'} fontWeight={700}>
                        יצירת קבוצות למידה לתגבור
                    </Typography>
                </Box>
                <Divider sx={{background:'#0172E84D', color:'#0172E84D'}}/>
                <Box sx={{marginTop:'20px'}}>
                    <Grid container sx={{marginTop:'10px'}}>
                        <Grid item xs={4}>
                            <Typography variant='h6' sx={{color:'#0F0B2F80', fontWeight:600}}>{'שם המורה:'}</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <InputBase value={user?.firstName} sx={{background:'#f6f6f6', padding:'0 14px'}} disabled />
                        </Grid>
                    </Grid>
                    <Grid container sx={{marginTop:'10px'}}>
                        <Grid item xs={4}>
                            <Typography variant='h6' sx={{color:'#0F0B2F80', fontWeight:600}}>{'שם הקבוצה:'}</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <InputBase value={groupName} sx={{background:'#f6f6f6', padding:'0 14px'}} onChange={(e) => setGroupName(e.target.value)}/>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{marginTop:'20px'}}>
                    <List                        
                        sx={{ 
                            margin:'0',
                            padding:'0',
                            width: '100%', 
                            bgcolor: 'background.paper',
                            boxShadow:'0px 9px 22px 0px #3C404F21'
                        }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                    {data?.map((item, index) => (
                        <ListItemWithCheckBox 
                            title={item.title} 
                            arr={item.students?.map((student) => ({ value: String(student.id), label: `${student.firstName} ${student.lastName}` })) || []}  
                            selectedArr={students.map((student) => ({ value: String(student.id), label: `${student.firstName} ${student.lastName}` }))}
                            handleClickValue={handleClickValue}
                            key={index}
                        />
                    ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default SupportRightSide;