import React, {FC} from 'react';
import Task from './Task';
import { useEffect } from 'react';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
interface MainModuleProps {
    item: ITab
    tabIndex: number
}
const MainModule:FC<MainModuleProps> = ({item,tabIndex}) => {
    const {setValue} = useAdminExercise()
    useEffect(() => {
        setValue(`tabs[${tabIndex}].orden`, item.orden)
        setValue(`tabs[${tabIndex}].title`, item.title)
    },[])
    return (
        <div>
            {item.tasks.map((task, taskIndex) => 
                <Task task={task} tabIndex={tabIndex} taskIndex={taskIndex}/>
            )}
        </div>
    );
};

export default MainModule;