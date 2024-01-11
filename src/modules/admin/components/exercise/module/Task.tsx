import React, {FC} from 'react';
import Column from './Column';
import Row from './Row';

interface TaskProps {
    task: ITask
    tabIndex: number
    taskIndex: number
}

const Task:FC<TaskProps> = ({task,tabIndex,taskIndex}) => {
    return (
        <div>
            {task?.columns.map((column) => 
                <Column column={column}/>
            )}
            {task?.rows.map((row, rowIndex) => 
                <Row row={row} tabIndex={tabIndex} taskIndex={taskIndex} rowIndex={rowIndex}/>
            )}
        </div>
    );
};

export default Task;