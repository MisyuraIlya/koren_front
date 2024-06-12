import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import React, {FC, useEffect} from 'react';


const TextModuleCentered:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    return (
        <th>
            <div className='text-right  px-4 py-4 fontSizeExercise'>
                <div
                    dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value }}
                    className="text-center"
                    style={{background:(objective?.moduleType === 'textCopy' || objective?.moduleType === 'copy') ? 'white' : ''}}
                />
            </div>
        </th>
    );
};

export default TextModuleCentered;