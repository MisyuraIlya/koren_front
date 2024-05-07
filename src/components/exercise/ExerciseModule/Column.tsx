import React, {FC} from 'react';

interface ColumnProps {
    column: IColumnTask
}
const Column:FC<ColumnProps> = ({column}) => {
    return (
        <div
            dangerouslySetInnerHTML={{ __html:column.title }}
            style={{padding:'0 20px', textAlign:'center', display:'flex', justifyContent:'center', alignItems:'center'}}
            className={`min-h-[60px] ${column?.title && 'bg-mainBlue'}`}
        />
    );
};

export default Column;