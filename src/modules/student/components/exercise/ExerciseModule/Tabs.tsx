'use client'
import { useStudentExercise } from '@/modules/student/provider/StudentExerciseProvider';
import { Box, Tab, Tabs as MuiTabs } from '@mui/material';  // Rename Tabs to MuiTabs
import React from 'react';

const CustomTabs = () => {
    const { exercise, choosedTab, setChoosedTab } = useStudentExercise()
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setChoosedTab(newValue);
    };

    return (
        <Box>
            <MuiTabs value={choosedTab} onChange={handleChange} centered>
                {exercise && exercise?.tabs?.length > 1 && exercise?.tabs?.map((item, index) =>
                    <Tab label={item.title} key={index} />
                )}
            </MuiTabs>
        </Box>
    );
};

export default CustomTabs;
