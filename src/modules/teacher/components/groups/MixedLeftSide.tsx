'use client'
import React, { useState } from 'react';
import { Alert, Box, Button, Divider, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useGroups } from '../../store/groups.store';
import { useClasses } from '../../store/classes.store';
import Image from 'next/image';
import useDataGroup from '../../hooks/useDataGroup';
import { onErrorAlert } from '@/utils/sweetAlert';
import useDataTeacherGroups from '../../hooks/useDataTeacherGroups';
const MixedLeftSide = () => {
    const {teachers,setTeachers, groupNameMixed, setGroupNameMixed, typeMixed, deleteTeacher} = useGroups()
    const {classes, setClasses, deleteClass} = useClasses()
    const [openSnack, setOpenSnack] = useState(false)
    const {createGroup} = useDataGroup()
    const {mutate} = useDataTeacherGroups()
    
    const handleCreate = async () => {
        if(!groupNameMixed){
            onErrorAlert('צריך להזין שם קבוצה!','')
            return 
        }
        await createGroup(groupNameMixed,'custom',classes.map((item) => {return item.id.toString()}), 'owner', false ,teachers.map((item) => {return item.id!?.toString()}))
        setOpenSnack(true)
        setClasses([])
        setTeachers([])
        setGroupNameMixed('')
        setTimeout(() => {
            setOpenSnack(false)
        },3000)
        mutate()
    }
    return (
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{width:'50%'}}>
                {typeMixed == 2 &&
                    <>
                        <Box sx={{display:'flex', gap:'10px', marginBottom:'10px'}}>
                            <Typography variant='h6' color={'#0172E880'} fontWeight={400}>
                                מורות   
                            </Typography>
                        </Box>
                        <Divider sx={{background:'#0172E84D', color:'#0172E84D'}}/>
                        <List 
                            sx={{ 
                                margin:'0',
                                marginTop:'20px',
                                padding:'0',
                                width: '100%', 
                                bgcolor: 'background.paper',
                                boxShadow:'0px 9px 22px 0px #3C404F21'
                            }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            {teachers?.map((teacher,key) =>
                                <ListItem
                                key={key}
                                sx={{ border: '1px solid #F3F6F9' }}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTeacher(teacher.id!)}>
                                        <Image src={'/images/teacher/trash.svg'} width={20} height={20} alt='computer' />
                                    </IconButton>
                                }
                                >
                                <ListItemText
                                    primary={teacher.firstName + ' ' + teacher.lastName}
                                />
                                </ListItem>
                            )}
                        </List>
                    </>
                }
                    <Box sx={{display:'flex', gap:'10px', marginBottom:'10px', marginTop:'50px'}}>
                        <Typography variant='h6' color={'#0172E880'} fontWeight={400}>
                        כיתות   
                        </Typography>
                    </Box>
                    <Divider sx={{background:'#0172E84D', color:'#0172E84D',marginBottom:'20px'}}/>
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
        
                        {classes?.map((element,key) =>
                            <ListItem
                            key={key}
                            sx={{ border: '1px solid #F3F6F9' }}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={() => deleteClass(element.id)}>
                                    <Image src={'/images/teacher/trash.svg'} width={20} height={20} alt='computer' />
                                </IconButton>
                            }
                            >
                            <ListItemText
                                primary={element.title}
                            />
                            </ListItem>
                        )}
                    </List>
                    <Button disabled={typeMixed === 2 ? classes.length === 0 || teachers.length === 0 : classes.length === 0 } variant='contained' fullWidth color='secondary' sx={{fontWeight:700, fontSize:'20px', marginTop:'20px'}} onClick={() => handleCreate()}>
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
    );
};

export default MixedLeftSide;