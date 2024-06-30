'use client'
import { Backdrop, Box, CircularProgress, Divider } from '@mui/material';
import React from 'react';
import Card from './Card';
import useDataMail from '@/hooks/useDataMail';

const List = () => {
    const {data, isLoading} = useDataMail()
    return (
        <Box>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
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