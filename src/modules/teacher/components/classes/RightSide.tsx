'use client'
import React from 'react';
import { Box, Checkbox, Divider, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography } from '@mui/material';
import Image from 'next/image';
import { useClasses } from '../../store/classes.store';
import useDataClass from '../../../../hooks/useDataClass';
import ClassForm from '../shared/ClassForm';


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


const RightSide = () => {
    const {setClasses,classes} = useClasses()

    const handleFunc = (arr: IClass[]) => {
        setClasses(arr)
    }

    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'50px'}}>
            <Box sx={{width:'50%'}}>
                <Box sx={{display:'flex', gap:'10px', marginBottom:'10px'}}>
                    <Image src={'/images/teacher/computer.svg'} width={30} height={30} alt='computer' />
                    <Typography variant='h6' color={'#0172E8'} fontWeight={700}>
                        יצירת כיתות הלימוד שלי  
                    </Typography>
                </Box>
                <Divider sx={{background:'#0172E84D', color:'#0172E84D'}}/>
                <ClassForm handle={handleFunc} classes={classes}/>
            </Box>
  
        </Box>
    );
};

export default RightSide;