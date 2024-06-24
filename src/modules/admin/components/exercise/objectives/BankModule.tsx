import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import React, {FC, useEffect} from 'react';


const BankModule:FC <IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    const {setValue} = useAdminExercise()
    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
    }, []);

    objective?.values?.map((item,index) => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values.${index}.value`, item.value)
    })

    return (
        <>
       
        </>

    );
};

export default BankModule;