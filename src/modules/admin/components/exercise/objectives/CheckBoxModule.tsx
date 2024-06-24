import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import React, {FC, useEffect} from 'react';

const CheckBoxModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    const {setValue} = useAdminExercise()

    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
    }, [tabIndex,taskIndex,rowIndex,objectiveIndex,objective]);


    return (
        <th className='disbleTh' id={`${objective.id}`}>
            <Box sx={{ padding: '0 20px' }}>
                {objective.values?.map((item,index) =>  {
                    setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values.${index}.value`, item.value)
                    if(item.value){
                        return (
                            <Box key={index} sx={{ width: '100%' }}>
                                <FormControlLabel
                                    sx={{ width: '100%' }}
                                    control={
                                        <Checkbox
                                            checked={item.value === objective?.answers?.[0]?.value}
                                        />
                                    }
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