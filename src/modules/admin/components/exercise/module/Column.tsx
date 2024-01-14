import React, {FC} from 'react';

interface ColumnProps {
    column: IColumnTask
}

const Column:FC<ColumnProps> = ({column}) => {
    return (
        <>
        {(column?.title || column?.type == 'אות' || column?.type == 'מספור')&&
            <th>
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