import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import React, {FC, useEffect} from 'react';


const MixDrag:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
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
        MixDrag
        {/* <th className={`${checkIsThereImage ? '' : ''} ${isTable ? 'tableModule' : ''}`}>
            <div className='py-4 px-4 w-48 bg-white' >
                <div className=''>
                    {value}
                </div>
            </div>
        </th> */}
        </>
    );
};

export default MixDrag;