import { Box, TextField } from '@mui/material';
import React from 'react';

const GradeFilters = () => {
    return (
        <Box sx={{display:'flex', gap:'10px'}}>
            <TextField label="כיתה / קבוצת לימוד" placeholder='כיתה / קבוצת לימוד'/>
            <TextField label="פרק" placeholder="פרק"/>
            <TextField label="יחידה" placeholder="יחידה"/>
            <TextField label="נושא" placeholder="נושא"/>
        </Box>
    );
};

export default GradeFilters;