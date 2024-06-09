import { Box, Typography } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';


const TextModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <th key={objectiveIndex}>
            <Typography
                variant='subtitle2'
                sx={{textAlign:'justify', fontSize:'18px', padding:'20px 30px'}}
                dangerouslySetInnerHTML={{ __html: objective?.values?.[0]?.value }}
            />
        </th>
    );
};

export default TextModule;