import { Box, Checkbox, FormControlLabel } from '@mui/material';
import React, {FC, useEffect} from 'react';

const CheckBoxModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <th>
            <Box> 
                {objective.values?.map((item,index) =>  {
                    if(item.value){
                        return (
                            <Box key={index} sx={{width:'100%'}}>
                                <FormControlLabel 
                                    sx={{width:'100%'}}
                                    control={<Checkbox defaultChecked />} 
                                    label={item.value} 
                                />
                            </Box>
                        )
                    }
                }
                )}
            </Box>
        </th>
    );
};

export default CheckBoxModule;