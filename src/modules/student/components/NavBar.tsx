"use client"
import { Box, MenuItem, Paper, Select, SelectChangeEvent, Toolbar } from '@mui/material';
import React from 'react';

const NavBar = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };

    return (
        <Paper elevation={4} sx={{position:'fixed', top:'60px', width:'100%', borderRadius:'0', minHeight:'60px', backgroundColor:'#F0FBFF', display:'flex', alignItems:'center'}}>
            <Select
                value={age}
                onChange={handleChange}
                sx={{minWidth:'250px', background:'white', margin:'10px', height:'30px'}}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </Paper>
    );
};

export default NavBar;