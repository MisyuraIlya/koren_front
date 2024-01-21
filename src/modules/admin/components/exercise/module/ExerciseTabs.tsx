"use client"
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';

const ExerciseTabs = () => {
    const {exercise, choosedTab, setChoosedTab} = useAdminExercise()
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setChoosedTab(newValue);
    };

    return (
        <Box>
            <Tabs value={choosedTab} onChange={handleChange} centered>
                {exercise?.tabs?.map((item,index) => 
                    <Tab label={item.title} key={index}/>
                )}
            </Tabs>
        </Box>
    );
};

export default ExerciseTabs;