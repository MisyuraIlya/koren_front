'use client'
import { useExercise } from '@/provider/ExerciseProvider';
import { Box, Tab, Tabs as MuiTabs } from '@mui/material';  // Rename Tabs to MuiTabs
import React from 'react';

const CustomTabs = () => {
    const { exercise, choosedTab, setChoosedTab } = useExercise()
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setChoosedTab(newValue);
    };

    return (
        <Box sx={{padding:'20px'}}>
            {exercise && exercise?.tabs?.length > 1 &&
            <MuiTabs value={choosedTab} onChange={handleChange}>
                {exercise?.tabs?.map((item, index) =>
                    <Tab label={item.title} key={index} />
                )}
            </MuiTabs>
            }
        </Box>
    );
};

export default CustomTabs;
