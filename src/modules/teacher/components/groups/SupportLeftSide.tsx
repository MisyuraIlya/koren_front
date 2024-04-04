'use client'
import React, { useState } from 'react';
import { useGroups } from '../../store/groups.store';
import { Alert, Box, Button, Divider, IconButton, List, ListItem, ListItemText, Snackbar, Typography } from '@mui/material';
import Image from 'next/image';
import useDataGroup from '../../hooks/useDataGroup';
import { useClasses } from '../../store/classes.store';
import { onErrorAlert } from '@/utils/sweetAlert';
import useDataTeacherGroups from '../../hooks/useDataTeacherGroups';

const SupportLeftSide = () => {
    const {groupName, students, deleteStudent, setStudents, setGroupName} = useGroups()
    const [openSnack, setOpenSnack] = useState(false)
    const {setClasses} = useClasses()
    const {createGroup} = useDataGroup()
    const {mutate} = useDataTeacherGroups()
    
    const handleCreate = async () => {
        if(!groupName){
            onErrorAlert('צריך להזין שם קבוצה!','')
            return 
        }
        setOpenSnack(true)
        await createGroup(groupName,'custom',[],'support',false,[],students.map((item) => {return item.id!.toString()}))
        setClasses([])
        setStudents([])
        setGroupName('')
        setTimeout(() => {
            setOpenSnack(false)
        },3000)
        mutate()
    }

    return (
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{width:'50%'}}>
                <Box sx={{display:'flex', gap:'10px', marginBottom:'10px'}}>
                    <Typography variant='h6' color={'#0172E880'} fontWeight={400}>
                        {groupName ? groupName : <> שם הקבוצה </>  }
                    </Typography>
                </Box>
                <Divider sx={{background:'#0172E84D', color:'#0172E84D'}}/>
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
                        {students?.map((student,key) =>
                            <ListItem
                            key={key}
                            sx={{ border: '1px solid #F3F6F9' }}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={() => deleteStudent(student.id!)}>
                                    <Image src={'/images/teacher/trash.svg'} width={20} height={20} alt='computer' />
                                </IconButton>
                            }
                            >
                            <ListItemText
                                primary={student?.class?.title + ' ' + student.firstName + ' ' + student.lastName}
                            />
                            </ListItem>
                        )}
                    </List>


                    <Button disabled={students.length === 0} variant='contained' fullWidth color='secondary' sx={{fontWeight:700, fontSize:'20px', marginTop:'20px'}} onClick={() => handleCreate()}>
                        שמירה
                    </Button>
                    <Box sx={{position:'relative', marginTop:'30px'}}>
                        {openSnack &&
                            <Alert
                                onClose={() => setOpenSnack(false)}
                                severity="success"
                                variant="filled"
                                sx={{ 
                                    width: '100%', 
                                    background:'#C8EFB4', 
                                    color:'black',
                                    boxShadow:'0px 4px 20px 0px #00000040'
                                }}
                            >
                                כיתת הלימוד נשמרה ב"קבוצות הלמידה שלי".
                            </Alert>
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
       

    );
};

export default SupportLeftSide;