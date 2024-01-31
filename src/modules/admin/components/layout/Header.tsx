'use client'
import React, {useState} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'
import SideBars from '../../../../utils/SideBars';
import { onAsk } from '@/utils/sweetAlert';
import { useAuth } from '@/modules/auth/store/auth.store';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
const Header: FC = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {logout, user} = useAuth()
    const router = useRouter();
    const handleSidebarToggle = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const handleSidebarClose = () => {
      setIsSidebarOpen(false);
    };

    const handleExitSystem = async () => {
        const res = await onAsk('האם את רוצה לצאת מהמערכת?','')
        if(res) {
            logout()
            router.push('/login')
        }
    }

    return (
        <>
        <header className='bg-primary w-full py-2 px-6 grid grid-cols-2 fixed' style={{height:'70px', zIndex:1000000}}>
            <Box sx={{display:'flex', gap:'10px', textAlign:'center', alignItems:'center'}}>
                <Image
                priority
                width={48}
                height={48}
                src={'/images/header/avatars/avatar.svg'}    
                alt='Sary'
                className='cursor-pointer'
                onClick={() => handleSidebarToggle()}
                />
                <Typography variant='h6' color={'white'}>{user?.firstName}</Typography>
            </Box>
            <Box className='flex justify-end'>
                <Box className='flex'>
                    <Link href={'/admin/courses/1'} className='flex justify-center items-center px-4'>
                        <Image
                        priority
                        width={28}
                        height={20}
                        src={'/images/header/paper.svg'}    
                        alt='Sary'
                        />
                    </Link>  
                    <Link href={'/admin/courses/1'} className='flex justify-center items-center px-4' >
                        <Image
                        priority
                        width={28}
                        height={20}
                        src={'/images/header/forum.svg'}    
                        alt='Sary'
                        />
                    </Link>  
                    <Link href={'/admin/v'} className='flex justify-center items-center pr-4 relative'>
                        <Image
                        priority
                        width={28}
                        height={20}
                        src={'/images/header/bell.svg'}    
                        alt='Sary'
                        />
                        <Box className='items-center rounded-full bg-red text-white absolute left-4 px-1'>
                            <p>12</p>
                        </Box>  
                    </Link>  
                </Box>
                <Box className="flex justify-between px-8">
                    <Box className="w-1/2 border-r" style={{borderColor:'#F3F6F9'}}></Box>
                    <Box className="w-1/2"></Box>
                </Box>
                <Box className='flex'>
                    <Link href={'/admin/courses/1'} className='flex'>
                        <Image
                        priority
                        width={50}
                        height={37}
                        src={'/images/header/logo.svg'}    
                        alt='Sary'
                        />
                        <Image
                        priority
                        width={180}
                        height={37}
                        src={'/images/header/logoTitle.svg'}    
                        alt='Sary'
                        className='items-center justify-center pt-5 px-4'
                        />
                    </Link>    
                </Box>
            </Box>
        </header>

        <SideBars anchor="left" isOpen={isSidebarOpen} onClose={handleSidebarClose} isPrimaryBg={true}>
            <Box style={{width:'394px'}}>
                <Box className='bg-black w-full'>
                    <Box className='mr-10 ml-10 py-12'>
                        <Typography variant='h6'>הפרופיל שלי</Typography>
                    </Box>
                </Box>
                <Box className='mr-10 ml-10 mt-12'>
                    <Box className='grid grid-cols-12'>
                        <Box className='col-span-5 items-center flex'>
                            <Image
                                priority
                                width={78}
                                height={78}
                                src={'/images/header/avatars/avatar.svg'}    
                                alt='Sary'
                                className='cursor-pointer'
                                onClick={() => handleSidebarToggle()}
                            />
                        </Box>
                        <Box className='col-span-7'>
                            <Typography variant='h6'>הפרופיל שלי</Typography>
                            <Box className='flex gap-4' style={{color:'#C6CEE6'}}>
                                <Image
                                    priority
                                    width={22}
                                    height={22}
                                    src={'/images/phone.svg'}    
                                    alt='Sary'
                                    className='cursor-pointer'
                                    onClick={() => handleSidebarToggle()}
                                />
                                <p>0501234567</p>
                            </Box>
                            <Box className='flex gap-4' style={{color:'#C6CEE6'}}>
                                <Image
                                    priority
                                    width={22}
                                    height={22}
                                    src={'/images/email.svg'}    
                                    alt='Sary'
                                    className='cursor-pointer'
                                    onClick={() => handleSidebarToggle()}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='absolute mr-12 flex items-center text-center gap-4 cursor-pointer' style={{bottom:'120px', color:'#C6CEE6'}} onClick={() => handleExitSystem()}>
                    <Image
                        priority
                        width={25}
                        height={25}
                        src={'/images/arrowLeft.svg'}    
                        alt='Sary'
                        className='items-center '
                    />
                    <Typography variant='body1'>יציאה מהמערכת</Typography>
                </Box>
            </Box>
        </SideBars>
        
        
        </>

    );
};

export default Header;