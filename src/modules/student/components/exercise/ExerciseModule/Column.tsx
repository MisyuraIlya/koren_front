import React, {FC} from 'react';

interface ColumnProps {
    column: IColumnTask
    columnIndex: number
}
const Column:FC<ColumnProps> = ({column, columnIndex}) => {
    return (
        <>
        {(column?.title || column?.type === 'orden')&&
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