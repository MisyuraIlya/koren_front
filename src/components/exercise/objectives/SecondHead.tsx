import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import React, { FC, useEffect, useState } from 'react';

const SecondHead: FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    


    
    return (
        <th className={`disbleTh text-[23px] px-4`}>
            <h3 className='text-[26px] font-semibold'>{objective?.values[0]?.value}</h3>
        </th>
    );
};

export default SecondHead;
