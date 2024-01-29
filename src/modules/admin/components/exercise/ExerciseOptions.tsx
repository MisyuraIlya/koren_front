import React from 'react';
import Options from './options';
import { Box,Grid } from '@mui/material';
const ExerciseOptions = () => {
    
    return (
        <Box sx={{margin:'20px'}}>
            <Grid container spacing={2}>
                <Grid item md={3}>
                    <Options.ChooseExercise/>
                </Grid>
                <Grid item md={9} style={{display:'flex', justifyContent:'left', gap:'50px', alignItems:'center'}}>
                    <Options.ButtonHandler/>
                    <Options.SideBar/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ExerciseOptions;