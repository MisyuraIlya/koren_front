import { Box, Typography } from '@mui/material';
import React from 'react';

const GradeColors = () => {

    const colors = [
        {color:'#EBAF34', value:'0-54'},
        {color:'#F6E1A2', value:'55-64'},
        {color:'#94B2FF', value:'65-74'},
        {color:'#DFE9FF', value:'75-84'},
        {color:'#CDFEE4', value:'85-94'},
        {color:'#6DEAD3', value:'95-100'},
    ]
    return (
        <Box sx={{display:'flex', gap:'15px', padding:'10px 0'}}>
            {colors?.map((item) =>
                <Box sx={{display:'flex', gap:'5px', alignItems:'center'}}>
                    <Box sx={{width:'30px', height:'30px', backgroundColor:item.color}}/>
                    <Typography variant='body2'>
                        {item.value}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default GradeColors;