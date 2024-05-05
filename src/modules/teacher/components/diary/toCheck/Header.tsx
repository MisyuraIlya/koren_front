import { Box, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
    return (
        <Box sx={{bgcolor:'white', padding:'0 20px', display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center', height:'75px'}}>
            <Typography variant='h5' >
            ממתין לבדיקה
            </Typography>
        </Box>
    );
};

export default Header;