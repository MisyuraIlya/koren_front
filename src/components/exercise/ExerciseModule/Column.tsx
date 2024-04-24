import React, {FC} from 'react';

interface ColumnProps {
    column: IColumnTask
    columnIndex: number
}
const Column:FC<ColumnProps> = ({column, columnIndex}) => {
    return (
        <>
        {(column?.title || column?.type === 'orden' || column?.type === 'word') &&
            <th key={columnIndex} style={{textAlign:'center'}} >
                <div
                    dangerouslySetInnerHTML={{ __html:column.title }}
                    style={{padding:'0 20px', textAlign:'center', display:'flex', justifyContent:'center', alignItems:'center'}}
                    className={`min-h-[60px] ${column?.title && 'bg-mainBlue'}`}
                />
            </th>
        }
        </>
    );
};

export default Column;