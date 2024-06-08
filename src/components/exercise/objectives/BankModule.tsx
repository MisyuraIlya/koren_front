import { Box } from '@mui/material';
import React, {FC, useEffect} from 'react';


const BankModule:FC <IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <th>
            <Box>
                {objective?.values?.map((item,index) => {
                    return (
                        <div className='col-span-3 px-2 py-2' key={index}>
                            <div className='bg-white rounded-md px-2 py-2 cursor-pointer'>
                                {item.value}
                            </div>    
                        </div>    
                    )
                })}
            </Box>
        </th> 
    );
};

export default BankModule;