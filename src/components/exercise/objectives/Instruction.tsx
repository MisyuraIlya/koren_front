import { type } from 'os';
import React, { FC, useEffect, useState } from 'react';


const Instruction: FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    let formattedValue = objective.values[0]?.value.replaceAll('@', "<br/>");
    const [htmlTag, setHtmlTal] = useState<string>(formattedValue)
    const handleUpdateHtml = (updatedHtml: string) => {
        setHtmlTal(updatedHtml)
    }


    
    return (
        <th className='disbleTh' key={objectiveIndex}>
            <div  className='text-right px-4 py-4'>
                <div
                    dangerouslySetInnerHTML={{ __html: htmlTag }}
                    className="fontSizeExercise"
                />
            </div>
        </th>
    );
};

export default Instruction;
