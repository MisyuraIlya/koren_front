import { useStudentExercise } from '@/modules/student/provider/StudentExerciseProvider';
import React, {FC, useEffect} from 'react';


const BankModule:FC <IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    const {setValue} = useStudentExercise()
    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
    }, []);

    return (
        <>
        
        <th>
            <div 
            // className={`${checkIsThereImage ? 'grid grid-cols-12 px-4' : 'grid grid-cols-12 px-4'} ${isTable ? 'tableModule' : ''}`} 
            >
                {objective?.values?.map((item,index) => {
                 setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values.${index}.value`, item.value)
                    return (
                        <div className='col-span-3 px-2 py-2' key={index}>
                            <div className='bg-white rounded-md px-2 py-2 cursor-pointer'>
                                {item.value}
                            </div>    
                        </div>    
                    )
                })}
            </div>
        </th> 
       
        </>

    );
};

export default BankModule;