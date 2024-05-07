import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import React, {FC, useEffect} from 'react';


const TextModuleCentered:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {



    
    //   const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
    return (
        <th 
        // className={`
        
        // ${isDisabledTh && 'disbleTh'}
        // ${checkIsThereImage ? '' : ''}
        // `}
        // style={{
        //     verticalAlign: 'top', // Align text to the top
        //     textAlign: 'right',   // Align text to the right
        //     minWidth: isTable ? `${CustomTableWidth}px` : '',
        // }}
        
        >
            <div className='text-right  px-4 py-4 fontSizeExercise'>
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value }}
                    className="text-center"
                />
            </div>
        </th>
    );
};

export default TextModuleCentered;