import { Box } from '@mui/material';
import React, {FC, useEffect} from 'react';

const VideoForm:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    return (
        <th style={{width:'100%'}} className='disbleTh'>
            <Box sx={{padding:'20px 100px'}} dangerouslySetInnerHTML={{ __html: objective.values[0]?.value }}/>
        </th>
    );
};

export default VideoForm;