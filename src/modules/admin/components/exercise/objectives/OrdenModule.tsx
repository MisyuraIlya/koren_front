import React, {FC, useEffect} from 'react';

type OrdenModuleProps = {
objective: IObjective
}
const OrdenModule:FC<OrdenModuleProps> = ({objective}) => {
    // useEffect(() => {
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'orden');
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
    //   }, [col, row, setValue, exerciseId, dataObjectId, value, tab]);
    return (
        <th  style={{
                minWidth:'70px', 
                maxWidth:'70px',
                verticalAlign: 'top', // Align text to the top
                textAlign: 'right', 
                paddingTop:'25px',
            }} 
            // className={`
            //     specific-th 
            //     ${(isTable || isClearTable) ? '' : ''} 
            //     pt-4
            //     ${isExplanationRowSplited && 'bg-white'}
            //     `} 

            >
            <div className='text-center flex justify-center items-center py-1'>
                <div  className='px-2 rounded-md'>
                    {objective.values[0].value}
                </div>
            </div>
        </th>
    );
};

export default OrdenModule;