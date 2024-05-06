import { useStudentExercise } from '@/modules/student/provider/StudentExerciseProvider';
import React, {FC, useEffect} from 'react';
import { useState } from 'react';

const ClearText:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    // const {setValue} = useStudentExercise()
    // const {choosedModule} = useExercise()
    // const {isOnlineXml} = useExercise()
    // let formattedValue = value?.replaceAll('$$$$', "&nbsp;&nbsp;&nbsp;&nbsp;").replaceAll('@', "<br/>");
    // const [htmlTag, setHtmlTal] = useState<string>(formattedValue);

    // const handleUpdateHtml = (updatedHtml: string) => {
    //     setHtmlTal(updatedHtml)
    // }

    // const checkIsString = (value: any) => {
    //     return  typeof value === 'string';
    // }


    // useEffect(() => {
    //     setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
    //     setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
    //     setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
    //     setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
    //     setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective.values)
    //     setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
    // }, []);

    //   const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
    return (
        <th 
        key={objectiveIndex}
        className='disbleTh'
        // className={`
        // relative
        // ${isDisabledTh && 'disbleTh'}
        // ${checkIsThereImage ? '' : ''}
    
        // leading-[60px]
        // `}
        // ${(firstIdTextModule === value && !isClearTable)  ? 'specific-th ' : ''}
        // style={{
        //     verticalAlign: 'top', 
        //     textAlign: 'right',   
        //     minWidth: isTable ? `${CustomTableWidth}px` : '',
        // }}
        >
            {/* {!isOnlineXml && checkIsString(htmlTag) &&
                <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
            } */}

            <div className='text-right  px-4 py-4  fontSizeExercise '>
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: objective.values[0]?.value }}
                    className=""
                />
            </div>
        </th>
    );
};

export default ClearText;