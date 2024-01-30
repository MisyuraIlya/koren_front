'use client'
import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
const RightLayOut = () => {

    const containerStyle = {
        background: 'linear-gradient(144deg, #0990FF 7.34%, #58B4FF 125.95%)',
        height: '100vh',
      };

    return (
        <Box style={containerStyle} sx={{position:'relative'}}>
            <Image src={'/images/dots.svg'} width={470} height={45} alt='logo' priority  className='absolute top-0 right-0'/>
            <Box sx={{display:'flex', padding:'20px 50px', gap:'15px'}}>
                <Image src={'/images/logo.svg'} width={100} height={85} alt='logo' priority />
                <Image src={'/images/logoTitle.svg'} width={206} height={36} alt='logo' className='pt-6' priority />
            </Box>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'100px', marginLeft:'250px'}}>
                <Box sx={{}}>
                    <Image src={'/images/ilustrate.png'} width={600} height={300} alt='logo' priority className='relative z-1'/>
                    <Box className='text-white'>
                        <Typography variant='h4' fontWeight={900}>לימודי עברית</Typography>
                        <Typography variant='h6'>הבנה, הבעה ולשון לחטיבה העליונה</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{position:'absolute', bottom:'50px', left:'50px'}}>
                <Image src={'/images/auth/id.png'} width={141} height={95} alt='logo' className='pt-6' priority />
            </Box>
            <Image src={'/images/dots.svg'} width={300} height={45} alt='logo' priority  style={{position:'absolute', left:'10px', bottom:'0'}}/>   
        </Box>
    );
};

export default RightLayOut;