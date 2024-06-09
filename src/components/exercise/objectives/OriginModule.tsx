import { Box, Typography } from '@mui/material';
import React, {FC, useEffect} from 'react';

const OriginModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <th className='disbleTh'>   
            <Typography sx={{color:'gray', padding:'20px 30px'}} variant='caption' dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value }} style={{fontSize:'14px'}}/>
        </th>
    );
};

export default OriginModule;