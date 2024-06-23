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
        {(column?.title || column?.type === 'orden')&&
            <th key={columnIndex}>
                <div
                    dangerouslySetInnerHTML={{ __html:column.title }}
                    style={{padding:'0 20px', textAlign:'center', display:'flex', justifyContent:'center', alignItems:'center'}}
                    className={`min-h-[${column?.title ? '60px': '' }] ${column?.title ? 'bg-mainBlue' : ''}`}
                />
            </th>
        }
        </>

    );
};

export default Column;