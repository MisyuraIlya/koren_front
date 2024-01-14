import React, {FC} from 'react';
import Column from './Column';
import Row from './Row';
import TaskStyles from '@/styles/Task.module.scss';

interface TaskProps {
    task: ITask
    tabIndex: number
    taskIndex: number
}

const Task:FC<TaskProps> = ({task,tabIndex,taskIndex}) => {
    return (
    <div className='bg-secondBlue relative'>
        <table className={'TaskStyles'}>
            <tbody>
                <tr className='w-full'>
                    {task?.columns.map((column) => 
                        <Column column={column}/>
                    )}
                </tr>
                {task?.rows.map((row, rowIndex) => 
                    <>
                    <div className={`h-1 absolute z-1 w-full bg-white`}></div>       
                    <Row row={row} tabIndex={tabIndex} taskIndex={taskIndex} rowIndex={rowIndex}/>
                    </>
                )}
                <div className='bg-white h-1 w-full z-1 absolute z-10'></div>
            </tbody>
        </table>
    </div>


    );
};

export default Task;