'use client'
import useDataMailChat from '@/hooks/useDataMailchat';
import { Box, Divider } from '@mui/material';
import React from 'react';
import Card from './Card';

const List = () => {
    const {data} = useDataMailChat()
    return (
        <Box>
            {data?.map((item) => 
                <Box>
                    <Card item={item}/>
                    <Divider/>
                </Box>
            )}
        </Box>
    );
};

export default List;