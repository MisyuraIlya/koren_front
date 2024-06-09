import { Box, Typography } from '@mui/material';
import React, {FC, useEffect} from 'react';
import { useState } from 'react';

const ClearText:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <th 
        key={objectiveIndex}
        className='disbleTh'
        >
            <Typography
                dangerouslySetInnerHTML={{ __html: objective.values[0]?.value }}
                sx={{
                    textAlign:'justify',
                    padding:'10px 30px'
                }}
            />
        </th>
    );
};

export default ClearText;