import React, {FC, useEffect} from 'react';
import Objectives from './Objectives';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';

interface RowProps {
    row: IRowTask
    tabIndex: number
    taskIndex: number
    rowIndex: number

    storySticky: IObjective | null
    iconSticky: IObjective | null

}



const Row:FC<RowProps> = ({row,tabIndex,taskIndex,rowIndex, storySticky, iconSticky}) => {
    const {setValue} = useAdminExercise()

    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].orden`, row.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].pdf`, row.pdf)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].youtubeLink`, row.youtubeLink)

    },[])
    
    
    return (
        <tr key={rowIndex}>
            {row?.objectives?.map((objective, objectiveIndex) => {
                const key = `${row.id}_${tabIndex}_${taskIndex}_${rowIndex}_${objectiveIndex}`;
                const createObjectiveIndexes = {tabIndex,taskIndex,rowIndex,objectiveIndex};
                return (
                    <React.Fragment key={key}>
                        <Objectives objective={objective} objectiveIndexes={createObjectiveIndexes} storySticky={storySticky} iconSticky={iconSticky}/>
                    </React.Fragment>
                );
            })}
        </tr>
    );
};

export default Row;