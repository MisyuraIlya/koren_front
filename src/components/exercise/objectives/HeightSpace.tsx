import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import React, {FC, useEffect} from 'react';

const HeightSpace:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <th style={{height:`${objective.values?.[0]?.value}px`}} className='bg-white w-screen'>
        </th>
    );
};

export default HeightSpace;