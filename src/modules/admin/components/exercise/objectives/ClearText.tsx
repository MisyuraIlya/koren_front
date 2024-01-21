import React, {FC, useEffect} from 'react';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { useState } from 'react';
import BoldChanger from '../components/BoldChanger';
import { collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
type TextModuleProps = {
    value: string
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable : boolean
    firstIdTextModule: string
    isClearTable: boolean
    collectionsCols: collectionsCols[]
    CustomTableWidth: number
    tab: number | null
}
const ClearText:FC<TextModuleProps> = ({tab, CustomTableWidth,isClearTable,collectionsCols,  firstIdTextModule, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable}) => {
    const {choosedModule} = useExercise()
    const {isOnlineXml} = useExercise()
    let formattedValue = value?.replaceAll('$$$$', "&nbsp;&nbsp;&nbsp;&nbsp;").replaceAll('@', "<br/>");
    const [htmlTag, setHtmlTal] = useState<string>(formattedValue);

    const handleUpdateHtml = (updatedHtml: string) => {
        setHtmlTal(updatedHtml)
    }

    const checkIsString = (value: any) => {
        return  typeof value === 'string';
    }


    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'clearText');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: htmlTag}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value, htmlTag,tab]);

      const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
    return (
        <th className={`
        relative
        ${isDisabledTh && 'disbleTh'}
        ${checkIsThereImage ? '' : ''}
    
        leading-[60px]
        `}
        // ${(firstIdTextModule === value && !isClearTable)  ? 'specific-th ' : ''}
        style={{
            verticalAlign: 'top', 
            textAlign: 'right',   
            minWidth: isTable ? `${CustomTableWidth}px` : '',
        }}
        >
            {!isOnlineXml && checkIsString(htmlTag) &&
                <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
            }

            <div className='text-right  px-4 py-4  fontSizeExercise '>
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: htmlTag }}
                    className=""
                />
            </div>
        </th>
    );
};

export default ClearText;