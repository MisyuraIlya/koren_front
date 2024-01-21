import React, {FC, useEffect} from 'react';
import Column from './Column';
import Row from './Row';
import TaskStyles from '@/styles/Task.module.scss';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Box } from '@mui/material';

interface TaskProps {
    task: ITask
    tabIndex: number
    taskIndex: number
}

const Task:FC<TaskProps> = ({task,tabIndex,taskIndex}) => {
    const {setValue} = useAdminExercise()

    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].orden`, task.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].specialModuleType`, task.specialModuleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].properties`, task.properties)
    },[])
    return (
    <Box className='bg-secondBlue relative' key={taskIndex}>
        <table className={'TaskStyles'}>
            <tbody>
                <tr className='w-full'>
                    {task?.columns.map((column, columnIndex) => 
                        <Column column={column} tabIndex={tabIndex} taskIndex={taskIndex} columnIndex={columnIndex}/>
                    )}
                </tr>
                {task?.rows.map((row, rowIndex) => 
                    <>
                    <div className={`h-1 absolute z-1 w-full bg-white`} key={rowIndex}></div>       
                    <Row row={row} tabIndex={tabIndex} taskIndex={taskIndex} rowIndex={rowIndex}/>
                    </>
                )}
                <div className='bg-white h-1 w-full z-1 absolute z-10'></div>
            </tbody>
        </table>
    </Box>


    );
};

export default Task;