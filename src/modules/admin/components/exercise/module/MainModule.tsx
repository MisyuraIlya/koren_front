import React, {FC} from 'react';
import Task from './Task';
import { useEffect } from 'react';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Box, Container, Grid } from '@mui/material';
import { TaskSplitChecker } from '@/helpers/TaskSplitChecker';
interface MainModuleProps {
    item: ITab
    tabIndex: number
}
const MainModule:FC<MainModuleProps> = ({item,tabIndex}) => {
    const {setValue, choosedTab} = useAdminExercise()
    
    useEffect(() => {
        setValue(`tabs[${tabIndex}].orden`, item.orden)
        setValue(`tabs[${tabIndex}].title`, item.title)
    },[])
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
            <Grid item xs={4}>
                {regular.map((task, taskIndex) => 
                    <Task task={task} tabIndex={tabIndex} taskIndex={taskIndex}/>
                )}
            </Grid>
        </Box>
    );
};

export default MainModule;