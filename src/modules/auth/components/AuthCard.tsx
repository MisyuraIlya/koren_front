'use client';
import { Card, Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
interface AuthCardProps {
    title: string;
    image: string;
    link: string;
}

const AuthCard: FC<AuthCardProps> = ({ title, image, link }) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter()
    const handleHover = () => {
        setIsHovered(true);
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
    };

    return (
        <Card
            sx={{
                display: 'flex',
                gap: '30px',
                border: '1px solid #798DC4',
                boxShadow: 'none',
                padding: '17px 21px',
                position:'relative',
                backgroundColor: isHovered ? '#F0FBFF' : '',
                minWidth:'400px',
                cursor:'pointer',
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverEnd}
            onClick={() => router.push(link)}
        >
            <Card
                sx={{
                    boxShadow: 'none',
                    border: '1px solid #256EF6',
                    padding: '10px',
                    borderRadius: '10px',
                    height:'100%',
                    backgroundColor:isHovered ? '#256EF6' : '',
                }}
            >
                {isHovered ?                    
                    <Image src={image +'_hover.svg'} width={50} height={50} alt='img' priority  className='fill-current text-primary'/>
                :
                    <Image src={image+'.svg'} width={50} height={50} alt='img' priority  className='fill-current text-primary'/>
                }
            </Card>
            <Typography variant='h5' sx={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                {title}
            </Typography>
            { isHovered &&
            <Box sx={{position:'absolute', right:'25px', top:'42%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Image src={'images/auth/arrowLeft.svg'} width={20} height={20} alt='img' priority />
            </Box>
            }
        </Card>
    );
};

export default AuthCard;
