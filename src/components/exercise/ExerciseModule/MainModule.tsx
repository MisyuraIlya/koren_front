'use client'
import React, {FC} from 'react';
import { Box, Grid } from '@mui/material';
import { TaskSplitChecker } from '@/helpers/TaskSplitChecker';
import Task from './Task';
import { useExercise } from '@/provider/ExerciseProvider';

interface MainModuleProps {
    item: ITab
    tabIndex: number
}

const MainModule:FC<MainModuleProps> = ({item,tabIndex}) => {
    const {choosedTab} = useExercise()
    const { regular, left, leftScreen, right, rightScreen } = TaskSplitChecker(item.tasks)
    return (
        <Box style={{ display: choosedTab === tabIndex ? '' : 'none' }} key={tabIndex}>
            <Grid container spacing={1}>
                <Grid item xs={rightScreen} sx={{ position: "relative" }}>
                    {right.map((task, taskIndex) => 
                        <Task task={task} tabIndex={tabIndex} taskIndex={taskIndex}/>
                    )}
                </Grid>
                <Grid item xs={leftScreen}>
                    {left.map((task, taskIndex) => 
                        <Task task={task} tabIndex={tabIndex} taskIndex={taskIndex}/>
                    )}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {regular.map((task, taskIndex) => 
                    <Box key={taskIndex}>
                        <Task task={task} tabIndex={tabIndex} taskIndex={taskIndex}/>
                    </Box>
                )}
            </Grid>
        </Box>
    );
};

export default MainModule;