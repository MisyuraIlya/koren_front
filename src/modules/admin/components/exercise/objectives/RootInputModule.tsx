import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { InputBase } from '@mui/material';
import React, {FC, useEffect,useState} from 'react';
import { Controller } from 'react-hook-form';


const RootInputModule:FC<IObjectiveModule>  = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
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
        <th key={objectiveIndex} id={`${objective.id}`}>
            <InputBase
                sx={{
                background: 'white',
                borderRadius: '5px',
                padding: '5px',
                margin: '10px',
                '& input': {
                    textAlign: 'center',
                    fontSize: '20px'
                }
                }}
                value={''}
                onChange={() => console.log('')}
                placeholder={objective?.answers[0]?.value}
            />
        </th>
        </>
    );
};

export default RootInputModule;