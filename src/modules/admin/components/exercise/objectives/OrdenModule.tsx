import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import React, {FC, useEffect} from 'react';

type OrdenModuleProps = {
    objective: IObjective
    tabIndex: number
    taskIndex: number
    rowIndex: number
    objectiveIndex: number
}
const OrdenModule:FC<OrdenModuleProps> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    
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
        <th  style={{
                minWidth:'70px', 
                maxWidth:'70px',
                verticalAlign: 'top', // Align text to the top
                textAlign: 'right', 
                paddingTop:'25px',
            }} 
            // className={`
            //     specific-th 
            //     ${(isTable || isClearTable) ? '' : ''} 
            //     pt-4
            //     ${isExplanationRowSplited && 'bg-white'}
            //     `} 

            >
            <div className='text-center flex justify-center items-center py-1'>
                <div  className='px-2 rounded-md'>
                    {objective.values[0].value}
                </div>
            </div>
        </th>
    );
};

export default OrdenModule;