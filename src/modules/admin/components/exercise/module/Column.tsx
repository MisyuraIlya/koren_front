import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import React, {FC, useEffect} from 'react';

interface ColumnProps {
    column: IColumnTask
    tabIndex: number
    taskIndex: number
    columnIndex: number
}

const Column:FC<ColumnProps> = ({column,tabIndex,taskIndex,columnIndex}) => {
    const {setValue} = useAdminExercise()

    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].columns[${columnIndex}].orden`, column.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].columns[${columnIndex}].title`, column.title)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].columns[${columnIndex}].type`, column.type)
    },[])
    return (
        <>
        {(column?.title )&&
            <th key={columnIndex}>
                <div
                    dangerouslySetInnerHTML={{ __html:column.title }}
                    className={`min-h-[60px] ${column?.title && 'bg-mainBlue'}`}
                />
            </th>
        }
        </>

    );
};

export default Column;