'use client'
import { Alert, Box, Button, Divider, List, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useClasses } from '../../store/classes.store';
import LeftSideItem from './LeftSideItem';
import useDataGroup from '../../../../hooks/useDataGroup';
import useDataTeacherGroups from '../../../../hooks/useDataTeacherGroups';

const LeftSide = () => {
    const {classes,setClasses} = useClasses()
    const {createGroup} = useDataGroup()
    const [openSnack, setOpenSnack] = useState(false)
    const {mutate} = useDataTeacherGroups()
    
    const handleCreate = async () => {
        setOpenSnack(true)
        await createGroup('','original',classes.map((item) => {return item.id.toString()}),'owner',true)
        setClasses([])
        setTimeout(() => {
            setOpenSnack(false)
        },3000)
        mutate()
    }
    return (
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{width:'55%', marginTop:'50px'}}>
                <Typography variant='h5' color={'#0172E880'} sx={{marginBottom:'10px'}}>
                    כיתות הלימוד שלי
                </Typography>
                <Divider/>
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
                        {classes?.map((item,index) =>
                            <LeftSideItem classItem={item} key={index}/>
                        )}
                    </List>
                    <Button disabled={classes.length === 0} variant='contained' fullWidth color='secondary' sx={{fontWeight:700, fontSize:'20px', marginTop:'20px'}} onClick={() => handleCreate()}>
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

export default LeftSide;