'use client'
import useDataMailChat from '@/hooks/useDataMailchat';
import { Box, Chip, Divider, Typography } from '@mui/material';
import React from 'react';
import Card from './Card';

const List = () => {
    const {data} = useDataMailChat()

    const handleType = () => {
        if(data?.mail?.type === 'feedBack') {
            return 'משוב'
        } else if(data?.mail?.type === 'system') {
            return 'הודעות מערכת'
        } else if(data?.mail?.type === 'original') {
            return 'הודעה רגילה'
        }
    }
    
    return (
        <Box>
            <Box sx={{display:'flex', gap:'20px', margin:'20px'}}>
                <Typography variant='h6'>
                    {data?.mail.title}
                </Typography>
                <Chip label={handleType()}/>
            </Box>
            <Divider/>
            {data?.chat?.map((item) => 
                <Box>
                    <Card item={item}/>
                    <Divider/>
                </Box>
            )}
        </Box>
    );
};

export default List;