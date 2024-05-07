// import React, {FC, useEffect} from 'react';

// const CheckBoxModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

//     useEffect(() => {
//         setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
//         setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
//         setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
//         setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
//         setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
//     }, [tabIndex,taskIndex,rowIndex,objectiveIndex,objective]);


//     // console.log('values',values)
//     // const answers = answer[0]?.value?.split(';').map(item => item.trim());
//     // const answers = answer.map((item) => { return item.value})
//     // console.log('answers',answers)
//     return (
//         <th 
//         // style={{width:'100%',minWidth: isTable ? `${CustomTableWidth}px` : '',}}
//         // className={`${checkIsThereImage ? '' : 'specific-th'}`}
//         >
//             <div className='fontSizeExercise' style={{lineHeight:'30px',paddingRight:'20px'}}> 
//                 {objective.values?.map((item,index) =>  {
//                     setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values.${index}.value`, item.value)
//                     // const isLastItem = index === values.length - 1
//                     if(item.value){
//                         return (
//                             <div style={{width:'100%'}} key={index}>
//                                 <div className=''>
//                                     <span className='flex gap-2'>
//                                         <input type='checkbox'  className='w-5' 
//                                         // checked={isTheAnswer}
//                                         />
//                                         {item.value}
//                                     </span>
//                                 </div>    
//                             </div>
//                         )
//                     }
//                 }

//                 )}
//             </div>
//         </th>
//     );
// };

// export default CheckBoxModule;