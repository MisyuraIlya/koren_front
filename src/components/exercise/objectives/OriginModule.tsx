import { Box } from '@mui/material';
import React, {FC, useEffect} from 'react';

const OriginModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {



    return (
        <th>   
            <Box sx={{textAlign:'left', color:'gray', padding:'0 10px'}}>
                <div dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value }} style={{fontSize:'14px'}}/>
            </Box>
        </th>
    );
};

export default OriginModule;