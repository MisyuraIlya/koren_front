import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import React, {FC, useEffect, useState} from 'react';

const TextModuled:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    const {setValue} = useAdminExercise()
    let formattedValue = objective.values[0].value?.replaceAll('@', "<br/>");
    const [htmlTag, setHtmlTal] = useState<string>(formattedValue)
    const handleUpdateHtml = (updatedHtml: string) => {
        setHtmlTal(updatedHtml)
    }

    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`,  [{value: htmlTag}])
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
    }, []);


    // const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
    return (
        <th 
        // className={`
        // relative
        // text-[23px]
        
        // ${isDisabledTh && 'disbleTh'}
        // ${checkIsThereImage ? '' : ''}
        // ${(firstIdTextModule === value && !isClearTable && choosedModule.value !== 3)  ? 'specific-th ' : ''}
        // ${choosedModule.value === 3 && 'text-justify'}
        // pt-2
        // pb-2
        // `}
        
        // style={{
        //     width:`${widthText}%`,
        //     verticalAlign: 'top', // Align text to the top
        //     textAlign: 'right',   // Align text to the right
        //     minWidth: isTable ? `${CustomTableWidth}px` : '',
        //     paddingRight:paddingRight ? `${paddingRight}px` : '', paddingLeft:paddingLeft ? `${paddingLeft}px` : ''
        // }}
        
        >
            {/* {!isOnlineXml &&
                <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
            } */}

            <div 
            // className={`fontSizeExercise text-justify ${textBgColor == 'לבן' && 'bg-white mt-10 mb-10 rounded-md shadow-xl px-8 shadow-black/10'} pt-4 pb-4`}
            // style={choosedModule ? 
            //     {width:widthText ? `${widthText}%` : '100%', marginRight:textMargin ? `${textMargin}%` : ''}:
            //     {width:widthText ? `${widthText}%` : '100%',marginRight: textMargin ? `${textMargin}%` : ''}}
            >
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: htmlTag }}
                    className=""
                    // style={{ textAlign: textAlign === 'אמצע' ? 'center' : undefined, whiteSpace: whiteSpace === 'לא' ? 'nowrap' : undefined}}
                />
            </div>
        </th>
    );
};

export default TextModuled;