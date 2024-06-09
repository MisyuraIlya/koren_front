import { Typography } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';

const InstructionWhite:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <th style={{backgroundColor:'white'}}>
            <Typography variant='subtitle2' sx={{textAlign:'justify'}} dangerouslySetInnerHTML={{ __html: objective.values[0]?.value }}/>
        </th>
    );
};

export default InstructionWhite;