'use client'
import React, {useState} from 'react';
import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'
import SideBars from '../../../../utils/SideBars';
import { onAsk } from '@/utils/sweetAlert';
import { useAuth } from '@/modules/auth/store/auth.store';
// import { useActions } from '@/hooks/useActions';
// import { useAuth } from '@/hooks/useAuth';
const Header: FC = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const {user} = useAuth()
    const {logout} = useAuth()
    // const { logout } = useActions();

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
        }
    }

    return (
        <>
        <header className='bg-primary w-full py-2 px-6 grid grid-cols-2 fixed' style={{height:'70px', zIndex:1000000}}>
            <div className='flex justify-start items-center' >
                <Image
                priority
                width={48}
                height={48}
                src={'/images/header/avatars/avatar.svg'}    
                alt='Sary'
                className='cursor-pointer'
                onClick={() => handleSidebarToggle()}
                />
                <p className='text-center text-white px-4'>אורלי</p>
            </div>
            <div className='flex justify-end'>
                <div className='flex'>
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
                        <div className='items-center rounded-full bg-red text-white absolute left-4 px-1'>
                            <p>12</p>
                        </div>  
                    </Link>  
                </div>
                <div className="flex justify-between px-8">
                    <div className="w-1/2 border-r" style={{borderColor:'#F3F6F9'}}></div>
                    <div className="w-1/2"></div>
                </div>
                <div className='flex'>
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
                </div>
            </div>
        </header>

        <SideBars anchor="left" isOpen={isSidebarOpen} onClose={handleSidebarClose} isPrimaryBg={true}>
            <div style={{width:'394px'}}>
                <div className='bg-black w-full'>
                    <div className='mr-10 ml-10 py-12'>
                        <h2 style={{fontSize:'25px', fontWeight:'700', color:'#C6CEE6'}}>הפרופיל שלי</h2>
                    </div>
                </div>
                <div className='mr-10 ml-10 mt-12'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-5 items-center flex'>
                            <Image
                                priority
                                width={78}
                                height={78}
                                src={'/images/header/avatars/avatar.svg'}    
                                alt='Sary'
                                className='cursor-pointer'
                                onClick={() => handleSidebarToggle()}
                            />
                        </div>
                        <div className='col-span-7'>
                            <h2 style={{fontSize:'35px', fontWeight:'700', color:'#C6CEE6'}}>אורלי</h2>
                            <div className='flex gap-4' style={{color:'#C6CEE6'}}>
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
                            </div>
                            <div className='flex gap-4' style={{color:'#C6CEE6'}}>
                                <Image
                                    priority
                                    width={22}
                                    height={22}
                                    src={'/images/email.svg'}    
                                    alt='Sary'
                                    className='cursor-pointer'
                                    onClick={() => handleSidebarToggle()}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute mr-12 flex items-center text-center gap-4 cursor-pointer' style={{bottom:'120px', color:'#C6CEE6'}} onClick={() => handleExitSystem()}>
                    <Image
                        priority
                        width={25}
                        height={25}
                        src={'/images/arrowLeft.svg'}    
                        alt='Sary'
                        className='items-center '
                    />
                    <p>יציאה מהמערכת</p>
                </div>
            </div>
        </SideBars>
        
        
        </>

    );
};

export default Header;