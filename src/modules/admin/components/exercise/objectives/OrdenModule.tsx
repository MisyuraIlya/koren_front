import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import React, {FC, useEffect} from 'react';
import { themeColors } from '@/styles/mui';
import { Typography } from '@mui/material';
const OrdenModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    const {setValue} = useAdminExercise()
    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective.values)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
    }, []);

    return (
        <th  
            style={{
                minWidth:'70px', 
                maxWidth:'70px',
                verticalAlign: 'top', 
                textAlign: 'right', 
                paddingTop:'25px',
            }} 
            >
            <div className='text-center flex justify-center items-center py-1'>
                {/* <p className='' style={{background:themeColors.primary, color:'white'}}>
                    {objective.values?.[0]?.value}
                </p> */}
                <Typography variant='h6' sx={{background:themeColors.primary, color:'white', paddingRight:'9px', paddingLeft:'9px', borderRadius:'5px'}}>
                    {objective.values?.[0]?.value}
                </Typography>
            </div>
        </th>
    );
};

export default OrdenModule;