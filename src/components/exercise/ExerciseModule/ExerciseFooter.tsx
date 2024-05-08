'use client'
import React from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useExercise } from '@/provider/ExerciseProvider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Image from 'next/image';
const ExerciseFooter = () => {
    const {handleDone,handleReset} = useExercise()
    return (
        <Box sx={{padding:'20px 10px', display:'flex',justifyContent:'space-between', bgcolor:'#E5F0FE'}}>
            <Box sx={{display:'flex', gap:'15px'}}>
                <Button variant='contained' sx={{bgcolor:'#0172E8', fontSize:'20px', borderRadius:'24px', minWidth:'200px'}} onClick={() => handleDone()}>
                    בדיקה
                </Button>
                <Button variant='contained' sx={{bgcolor:'#0172E8',fontSize:'20px', borderRadius:'24px', minWidth:'200px'}} >
                    ניקוי תשובות
                </Button>
                <Button variant='contained' sx={{bgcolor:'#0172E8',fontSize:'20px', borderRadius:'24px', minWidth:'200px'}} >
                    שליחה למורה
                </Button>
            </Box>
            <Box sx={{display:'flex', gap:'15px'}}>
                <Button variant='contained' sx={{bgcolor:'#0172E8',fontSize:'20px', borderRadius:'24px', minWidth:'200px'}} >
                שליחת משוב  
                </Button>
                <Button variant='contained' sx={{bgcolor:'#0172E8',fontSize:'20px', borderRadius:'24px', minWidth:'200px'}} >
                החזרה לתיקון
                </Button> 
                <Box sx={{bgcolor:'white', alignItems:'center', display:'flex', justifyContent:'center', padding:'0 15px', borderRadius:'5px'}}>
                    <Typography variant='body1'>
                    ציון זמני
                    </Typography>
                    <IconButton>
                        <AddIcon sx={{color:'black'}}/>
                    </IconButton>
                    <Typography variant='body1'>
                    75
                    </Typography>
                    <IconButton>
                        <RemoveIcon sx={{color:'black'}}/>
                    </IconButton>
                </Box>
                <Box sx={{bgcolor:'white', borderRadius:'6px'}}>
                    <IconButton>
                        <Image src={'/images/circle.svg'} alt='robo' width={30} height={30}/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default ExerciseFooter;