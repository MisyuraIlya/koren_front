import React, {FC, useEffect, useState} from 'react';

const SubInstruction:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <th className='disbleTh' key={objectiveIndex}>
            <div className='text-right px-4 py-4' >
                <div
                    dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value }}
                    className="fontSizeExercise"
                />
            </div>
        </th>
    );
};

export default SubInstruction;