import React, {FC} from 'react';
import Objectives from '@/modules/admin/components/exercise/module/Objectives';
interface RowProps {
    row: IRowTask
    tabIndex: number
    taskIndex: number
    rowIndex: number
}


const Row:FC<RowProps> = ({row,tabIndex,taskIndex,rowIndex}) => {
    return (
        <tr key={rowIndex}>
            {/* {row?.objectives?.map((objective, objectiveIndex) => {
                const createObjectiveIndexes = {tabIndex,taskIndex,rowIndex,objectiveIndex}
                return (
                    <Objectives objective={objective} objectiveIndexes={createObjectiveIndexes}/>
                )
                }
            )} */}
        </tr>
    );
};

export default Row;