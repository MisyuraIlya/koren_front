'use client'
import { Box, Divider } from '@mui/material';
import React from 'react';
import Card from './Card';
import useDataMail from '@/hooks/useDataMail';

const List = () => {
    const {data} = useDataMail()
    return (
        <Box>
            {data?.mails?.map((item,key) =>
                <Box key={key}>
                    <Card item={item} />
                    <Divider/>
                </Box> 
            )}
        </Box>

    );
};

export default List;