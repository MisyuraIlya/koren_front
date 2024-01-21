import React, {FC, useEffect} from 'react';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';


const Draft:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

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
        <th 
        // className={`
        // ${checkIsThereImage ? '' : ''}
        // bg-white
        // `}
        
        // style={{
        //     verticalAlign: 'top', 
        //     textAlign: 'right', 
        //     width:'100%',
        //     paddingTop:'20px',
        //     minWidth: isTable ? `${CustomTableWidth}px` : '',
            
        // }}
        
        >
            {/* <div className='text-right  px-4 py-4'>
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: value }}
                    className=""
                />
            </div> */}
            <div style={{
                          border: `2px solid #388FF5`, 
                          borderRadius: '5px',
                          paddingTop:'27px'
            }}>
                drafts
            {/* <TextAnnotation draftBankCollectionValues={draftBankCollectionValues} text={value} row={row} col={col} exerciseId={exerciseId} dataObjectId={dataObjectId}/> */}

            </div>
        </th>
    );
};

export default Draft;