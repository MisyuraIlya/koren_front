import { Box, Button } from '@mui/material';
import React from 'react';

const Process = () => {
    return (
        <Box>
            <Button variant='contained' fullWidth sx={{bgcolor:'#B0DCFF', borderRadius:'0px', margin:'5px 0', color:'black', lineHeight:'33px', fontSize:'18px', fontWeight:400}}>
            שליחת משוב לתלמיד
            </Button>
            <Button  variant='contained' fullWidth sx={{bgcolor:'#B0DCFF', borderRadius:'0px', margin:'5px 0', color:'black', lineHeight:'33px', fontSize:'18px', fontWeight:400}}>
            שליחת הודעה אישית לתלמיד
            </Button>
            <Button  variant='contained' fullWidth sx={{bgcolor:'#B0DCFF', borderRadius:'0px', margin:'5px 0', color:'black', lineHeight:'33px', fontSize:'18px', fontWeight:400}}>
            שליחת הודעה לכל הכיתה
            </Button>
        </Box>
    );
};

export default Process;