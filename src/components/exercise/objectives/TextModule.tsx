import { Box } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';


const TextModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <th key={objectiveIndex}>
            <Box className='fontSizeExercise ' sx={{textAlign:'left', padding:'0 20px'}}>
                <div
                    style={{paddingRight:'10px', textAlign:'justify'}}
                    dangerouslySetInnerHTML={{ __html: objective?.values[0].value }}
                />
            </Box>
        </th>
    );
};

export default TextModule;