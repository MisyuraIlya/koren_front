import { Box } from '@mui/material';
import React, {FC, useEffect} from 'react';
import { useState } from 'react';

const ClearText:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <th 
        key={objectiveIndex}
        className='disbleTh'
        >
            <Box sx={{padding:'20px 100px'}}>
                <div
                    dangerouslySetInnerHTML={{ __html: objective.values[0]?.value }}
                    className=""
                />
            </Box>
        </th>
    );
};

export default ClearText;