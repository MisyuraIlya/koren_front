import { Box, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBigInput = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90px' }}>
        <TextField
            sx={{ 
                background: 'white', 
                borderRadius: '8px',
                '& input': {
                    height: '10px', 
                },
             }}
            InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                <SearchIcon />
                </InputAdornment>
            ),
            }}
            variant="outlined"
        />
    </Box>
    );
};

export default SearchBigInput;