
import React from 'react';
import Image from 'next/image';
import Heading from '@/components/heading/Heading';
import Description from '@/components/heading/Description';
const LoginDescription = () => {
    return (
        <>
            <Image src={'/images/frame.svg'} width={43} height={40} alt='frame' priority />
            <Heading className='font-bold text-5xl mb-10'>הי, ברוכים הבאים</Heading>
            <Description className='mb-10'>אתה יכול להיכנס למערכת באמצעות דואר אלקטרוני וסיסמה, מקושר בחשבון או באמצעות כניסה יחידה לחשבון הארגון שלך</Description>
        </>

       
    );
};

export default LoginDescription;