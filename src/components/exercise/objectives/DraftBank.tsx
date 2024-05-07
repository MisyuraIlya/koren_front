// import React, {FC, useEffect} from 'react';


// const DraftBank:FC <IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    

//     useEffect(() => {
//         setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
//         setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
//         setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
//         setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
//         setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective.values)
//         setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
//     }, [tabIndex,taskIndex,rowIndex,objectiveIndex,objective]);

//     return (
//         <>
//         DraftBank
//         {/* 
//         <th>
//             <div className={`${checkIsThereImage ? 'grid grid-cols-12 px-4' : 'grid grid-cols-12 px-4'} ${isTable ? 'tableModule' : ''}`} >
//                 {values?.map((item,index) => {
//                 setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues.${index}.value`, item.value);
//                     return (
//                         <div className='col-span-3 px-2 py-2' key={index}>
//                             <div className='bg-white rounded-md px-2 py-2 cursor-pointer'>
//                                 {item.value}
//                             </div>    
//                         </div>    
//                     )
//                 })}
//             </div>
//         </th> 
//         */}
//         </>

//     );
// };

// export default DraftBank;