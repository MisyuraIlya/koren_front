import React, {FC, useEffect} from 'react';
import Objectives from './Objectives';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';

interface RowProps {
    row: IRowTask
    tabIndex: number
    taskIndex: number
    rowIndex: number
}



const Row:FC<RowProps> = ({row,tabIndex,taskIndex,rowIndex}) => {
    const {setValue} = useAdminExercise()

    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].orden`, row.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].pdf`, row.pdf)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].youtubeLink`, row.youtubeLink)

    },[])
    
    
    return (
        <tr key={rowIndex}>
            {row?.objectives?.map((objective, objectiveIndex) => {
                const createObjectiveIndexes = {tabIndex,taskIndex,rowIndex,objectiveIndex}
                return (
                    <Objectives objective={objective} objectiveIndexes={createObjectiveIndexes}/>
                )
                }
            )}
        </tr>
    );
};

export default Row;