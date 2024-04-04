import { useStudentExercise } from '@/modules/student/provider/StudentExerciseProvider';
import { type } from 'os';
import React, { FC, useEffect, useState } from 'react';


const Instruction: FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    let formattedValue = objective.values[0]?.value.replaceAll('@', "<br/>");
    const [htmlTag, setHtmlTal] = useState<string>(formattedValue)
    const handleUpdateHtml = (updatedHtml: string) => {
        setHtmlTal(updatedHtml)
    }


    
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
