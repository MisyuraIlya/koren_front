import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Box } from '@mui/material';
import Image from 'next/image';
import React, {FC, useEffect} from 'react';


const ImageFormRight:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    const {setValue} = useAdminExercise()

    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective.values)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
    }, [tabIndex,taskIndex,rowIndex,objectiveIndex,objective]);
    return (
        <>
        {objective.values?.[0]?.value &&
            <Box sx={{padding:'20px 80px'}}>
                <Image
                    src={`http://3.74.228.194:4000/${objective.values?.[0]?.value}`} 
                    alt="uploaded image w-full h-full"  
                    width={500} 
                    height={500} 
                />
            </Box>  
        }    
        </>
    );
};

export default ImageFormRight;