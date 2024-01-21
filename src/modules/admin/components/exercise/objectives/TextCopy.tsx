import { collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
import React, {FC, useEffect} from 'react';

type TextCopyModuleProps = {
    value: string

    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable : boolean
    firstIdTextModule: string
    collectionsCols: collectionsCols[]
    CustomTableWidth: number
    tab: number | null
}
const TextCopy:FC<TextCopyModuleProps> = ({tab,CustomTableWidth, firstIdTextModule, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, collectionsCols}) => {

    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'textCopy');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value,tab]);

    //   const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')

    return (
        <th className={`
        ${checkIsThereImage ? '' : ''}
        ${firstIdTextModule === value ? 'specific-th ' : ''}
        `}
        style={{
            minWidth: isTable ? `${CustomTableWidth}px` : '',
        }}
        >
            <div className='text-center px-4 py-4 fontSizeExercise'>
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: value }}
                    className="bg-white rounded-md"
                />
            </div>
        </th>
    );
};

export default TextCopy;