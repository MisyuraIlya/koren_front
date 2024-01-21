import React, {FC, useEffect, useState} from 'react';
import Image from 'next/image';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';

const ExplanationSplited:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    // const {isOnlineXml} = useExercise()
    // console.log('formattedValue',formattedValue)
    // if(!formattedValue.includes('&quot;')){
    //     console.log('true',true)
    // }
    // formattedValue = formattedValue?.replaceAll(';', "<br/>");
    


    const {setValue} = useAdminExercise()
    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective.values)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
    }, [tabIndex,taskIndex,rowIndex,objectiveIndex,objective]);

    
    //   const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
    return (
        <th 
            // className={`
            //     relative
            //     bg-white
            //     w-full
                
            //     ${isDisabledTh && 'disbleTh'}
            //     ${checkIsThereImage ? '' : ''}
            //     ${(firstIdTextModule === value && !isClearTable) ? 'specific-th ' : ''}
            //     `}
            //     style={{
            //         verticalAlign: 'top', 
            //         textAlign: 'right',   
            //         minWidth: isTable ? `${CustomTableWidth}px` : '',
            //     }}
            
        >
            <div 
                className='mt-10 mb-10 w-[95%]'
                style={{border: `1px solid #D0D0D0`, borderRadius: '5px' }}
            >
                {/* {!isOnlineXml &&
                    <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
                } */}

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
                            dangerouslySetInnerHTML={{ __html: objective.values[0].value }}
                            className=""
                        />
                    </div>
                </div>
            </div>

        </th>
    );
};

export default ExplanationSplited;