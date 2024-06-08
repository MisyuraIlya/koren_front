import { Box } from '@mui/material';
import React, {FC, useEffect} from 'react';

const VideoForm:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    console.log('objective')
    return (
        <th style={{width:'100%'}}>
            <div dangerouslySetInnerHTML={{ __html: objective.values[0]?.value }}/>
        </th>
    );
};

export default VideoForm;