import { useStudentExercise } from '@/modules/student/provider/StudentExerciseProvider';
import React, {FC, useEffect} from 'react';

const WordModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    

    return (
        <th 
        key={objectiveIndex}
        style={{
            minWidth:'70px', 
            maxWidth:'70px',
            verticalAlign: 'top', 
            textAlign: 'right', 
            paddingTop:'30px', 
        }}

        >
            <div className='flex items-center justify-center'>
                <div className='px-2 rounded-md'>
                    {objective?.values?.[0]?.value}
                </div>
            </div>
        </th>
    );
};

export default WordModule;