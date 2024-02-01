'use client'
import { Box, IconButton } from '@mui/material';
import React from 'react';
import CropFreeIcon from '@mui/icons-material/CropFree';
import Book from '@/../public/images/book.svg';
import Utility from '@/../public/images/utilities.svg';
import Image from 'next/image';

const Options = () => {
    return (
        <Box sx={{width:'100%', justifyContent:'right', display:'flex'}}>
            <IconButton>
                <Image src={Utility} alt='Utility' width={30} height={30}/>
            </IconButton>
            <IconButton>
                <Image src={Book} alt='Book' width={25} height={25}/>
            </IconButton>
            <IconButton>
                <CropFreeIcon />
            </IconButton>
        </Box>
    );
};

export default Options;