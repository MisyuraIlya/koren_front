import React, {FC, useEffect, useState} from 'react';

const InstructionWhite:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <th 
            style={{
                background:'white'
            }}
        >
                <div dangerouslySetInnerHTML={{ __html: objective.values[0]?.value }}/>
        </th>
    );
};

export default InstructionWhite;