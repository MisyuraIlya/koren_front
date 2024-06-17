import { Box } from '@mui/material';
import React from 'react';
import Mailer from '@/components/mailer';

const page = () => {
    return (
        <Box>
            <Mailer.Filter/>
            <Box sx={{paddingTop:'20px'}}>
                <Mailer.List/>
            </Box>
        </Box>
    );
};

export default page;