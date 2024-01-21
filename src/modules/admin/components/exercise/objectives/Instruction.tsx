import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { type } from 'os';
import React, { FC, useEffect, useState } from 'react';


const Instruction: FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    const {setValue} = useAdminExercise()
    let formattedValue = objective.values[0]?.value.replaceAll('@', "<br/>");
    const [htmlTag, setHtmlTal] = useState<string>(formattedValue)
    const handleUpdateHtml = (updatedHtml: string) => {
        setHtmlTal(updatedHtml)
    }
    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, [{value: htmlTag}])
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
    }, []);


    
    return (
        <th 
            // className={` bg-mainExerciseBg ${checkIsThereImage ? '' : ''} ${(isTable || isClearTable) ? 'tableModule' : ''}  text-[23px] leading-10`} 
            // style={{
            //     minWidth: isTable ? `${CustomTableWidth}px` : '',
            // }}
            >
            <div  className='text-right px-4 py-4'>
                {/* {!isOnlineXml &&
                    <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
                } */}

                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: htmlTag }}
                    className="fontSizeExercise"
                />
            </div>
        </th>
    );
};

export default Instruction;
