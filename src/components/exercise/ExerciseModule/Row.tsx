import React, {FC} from 'react';
import Objectives from './Objectives';
interface RowProps {
    row: IRowTask
    tabIndex: number
    taskIndex: number
    rowIndex: number

    storySticky: IObjective | null
    iconSticky: IObjective | null
}


const Row:FC<RowProps> = ({row,tabIndex,taskIndex,rowIndex, storySticky, iconSticky}) => {
    
    return (
        <tr>
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