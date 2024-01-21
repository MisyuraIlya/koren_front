import React, {FC} from 'react';
import Task from './Task';
import { useEffect } from 'react';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Box } from '@mui/material';
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

    const tasks = TaskSplitChecker(item.tasks)
    return (
        <Box style={{ display: choosedTab === tabIndex ? '' : 'none' }} key={tabIndex}>
            {item.tasks.map((task, taskIndex) => 
                <Task task={task} tabIndex={tabIndex} taskIndex={taskIndex}/>
            )}
        </Box>
    );
};

export default MainModule;