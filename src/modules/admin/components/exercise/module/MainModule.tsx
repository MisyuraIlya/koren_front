import React, {FC} from 'react';
import Task from './Task';

interface MainModuleProps {
    item: ITab
    tabIndex: number
}
const MainModule:FC<MainModuleProps> = ({item,tabIndex}) => {
    
    return (
        <div>
            {item.tasks.map((task, taskIndex) => 
                <Task task={task} tabIndex={tabIndex} taskIndex={taskIndex}/>
            )}
        </div>
    );
};

export default MainModule;