import React, {FC, useEffect} from 'react';
import Objectives from './Objectives';
import { useAdminExerciseProvider } from '@/modules/admin/provider/AdminExerciseProvider';

interface RowProps {
    row: IRowTask
    tabIndex: number
    taskIndex: number
    rowIndex: number
}

const Row:FC<RowProps> = ({row,tabIndex,taskIndex,rowIndex}) => {
    const {setValue} = useAdminExerciseProvider()

    useEffect(() => {
        setValue(`tabs[${tabIndex}]tasks[${taskIndex}]rows[${rowIndex}].pdf`,null)
        setValue(`tabs[${tabIndex}]tasks[${taskIndex}]rows[${rowIndex}].youtubeLink`,null)
        setValue(`tabs[${tabIndex}]tasks[${taskIndex}]rows[${rowIndex}].orden`,rowIndex)
    },[])
    
    return (
        <div>
            {row?.objectives?.map((objective) => 
                <Objectives objective={objective} />
            )}
        </div>
    );
};

export default Row;