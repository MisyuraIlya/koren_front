import { Input, InputBase } from '@mui/material';
import React, { FC } from 'react';

const ObjectiveInput: FC<IObjectiveModule>  = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    return (
        <th>
          <InputBase 
            sx={{
                background:'white', 
                borderRadius:'5px', 
                padding:'5px', 
                margin:'10px',
            }} 
            placeholder={objective.placeholder}
          />  
        </th>
    );
};

export default ObjectiveInput;