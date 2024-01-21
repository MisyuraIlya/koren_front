import { collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
import React, {FC, useEffect, useState} from 'react';
import BoldChanger from '../components/BoldChanger';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import Image from 'next/image';
type ExplanationSplitedProps = {
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
const ExplanationSplited:FC<ExplanationSplitedProps> = ({tab, CustomTableWidth,firstIdTextModule, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, isClearTable, collectionsCols}) => {

    const {isOnlineXml} = useExercise()
    let formattedValue = value?.replaceAll('@', '<br>');
    // console.log('formattedValue',formattedValue)
    // if(!formattedValue.includes('&quot;')){
    //     console.log('true',true)
    // }
    // formattedValue = formattedValue?.replaceAll(';', "<br/>");
    
    const [htmlTag, setHtmlTal] = useState<string>(formattedValue)
    const handleUpdateHtml = (updatedHtml: string) => {
        setHtmlTal(updatedHtml)
    }


    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'explanationSplited');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: htmlTag}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value, htmlTag,tab]);

    
      const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
    return (
        <th className={`
            relative
            bg-white
            w-full
            
            ${isDisabledTh && 'disbleTh'}
            ${checkIsThereImage ? '' : ''}
            ${(firstIdTextModule === value && !isClearTable) ? 'specific-th ' : ''}
            `}
            style={{
                verticalAlign: 'top', 
                textAlign: 'right',   
                minWidth: isTable ? `${CustomTableWidth}px` : '',
            }}
            
        >
            <div 
                className='mt-10 mb-10 w-[95%]'
                style={{border: `1px solid #D0D0D0`, borderRadius: '5px' }}
            >
                {!isOnlineXml &&
                    <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
                }

                <div className='flex'>
                    <div className='pt-5 pr-5'>
                            <Image src={'/images/textExpand.svg'} alt='quest' width={50} height={50} />
                    </div>
                    <div className='pt-8 pr-4'>
                        <p className='text-[#00000099]'>הסבר  | </p>
                    </div>

                    <div className='text-right  px-4 py-4 fontSizeExercise 0'>
                        <div
                            // onInput={handleInputChange}
                            dangerouslySetInnerHTML={{ __html: htmlTag }}
                            className=""
                        />
                    </div>
                </div>
            </div>

        </th>
    );
};

export default ExplanationSplited;