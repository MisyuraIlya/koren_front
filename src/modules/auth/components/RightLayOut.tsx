'use client'
import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
const RightLayOut = () => {
    const containerStyle = {
        background: ' linear-gradient(180deg, #1D99FF 0%, #2E68F7 100%)',
        height: '100vh',
    };
    return (
        <Box style={containerStyle} sx={{position:'relative'}}>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'30px', gap:'15px'}}>
                <Image src={'/images/logo.svg'} width={100} height={85} alt='logo' priority />
                <Image src={'/images/logoTitle.svg'} width={206} height={36} alt='logo' className='pt-6' priority />
            </Box>4
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'40px'}}>
                <Image src={'/images/ilustrate.png'} width={400} height={300} alt='logo' priority className='relative z-1'/>
            </Box>

            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Box>
                        <Typography variant='h5' sx={{color:'white', lineHeight:'45px', fontSize:'40px', textAlign:'center'}}>לימוד עברית:</Typography>
                        <Typography variant='h4' sx={{color:'white', padding:'0 120px', textAlign:'center'}} fontWeight={700} fontSize={'40px'}>הבנה, הבעה ולשון לחטיבה העליונה</Typography>
                        <Typography variant='h4' sx={{color:'white', padding:'0 140px', textAlign:'center', paddingTop:'20px'}} fontWeight={400} lineHeight={'24px'} fontSize={'20px'}>
                            סביבה אינטראקטיבית ייחודית לתיכון
                            כהכנה לבחינת הבגרות
                        </Typography>
                    </Box>
            </Box>
            <Box sx={{position:'absolute', bottom:'50px', left:'50px'}}>
                <Image src={'/images/auth/id.png'} width={141} height={95} alt='logo' className='pt-6' priority />
            </Box>
            <Image src={'/images/dots.svg'} width={350} height={45} alt='logo' priority  style={{position:'absolute', right:'0px', bottom:'0px'}}/>   
        </Box>
    );
};

export default RightLayOut;