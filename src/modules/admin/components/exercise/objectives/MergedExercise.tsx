// import React, {FC, useEffect} from 'react';
// import InputModule from './InputModule';
// import ToolTip from '../ToolTip';
// import ReactSelect from 'react-select'
// import { Controller } from 'react-hook-form'
// type MergedExerciseProps = {
//     mergedData: any,
//     col: any;
//     row: any;
//     setValue: any
//     exerciseId: number
//     dataObjectId: number
//     checkIsThereImage: boolean
//     isTable: boolean
//     control: any
//     CustomTableWidth: number
//     tab: number | null
// }

// const MergedExercise:FC<MergedExerciseProps> = ({tab, CustomTableWidth, mergedData,setValue, exerciseId, dataObjectId, col , row, checkIsThereImage, isTable,control}) => {
//     let optionsNew: any = []
//     if(mergedData?.previous?.module_type === 'selectbox' || mergedData?.next?.module_type === 'selectbox') {
//         optionsNew = Array.isArray((mergedData?.previous?.collectionValues || mergedData?.next?.collectionValues))
//         ? (mergedData?.previous?.collectionValues || mergedData?.next?.collectionValues).map((item: any) => ({ value: item.value, label: item.value }))
//         : [];
//     } 

//     const getValuePrevious = (value:any) => value ? optionsNew.find((option:any) => option.value.trim() == value) : {value:mergedData?.previous?.collectionAnswers[0].value, label:mergedData?.previous?.collectionAnswers[0].value}
//     const getValueNext = (value:any) => value ? optionsNew.find((option:any) => option.value.trim() == value) : {value:mergedData?.previous?.collectionAnswers[0].value, label:mergedData?.previous?.collectionAnswers[0].value}

//     useEffect(() => {
//         setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
//         setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'mergedExercise');
//         setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
//         setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
//         setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
//       }, [col, row, setValue, exerciseId, dataObjectId,tab]);

//     return (
//         <th
//         style={{
//             minWidth: isTable ? `${CustomTableWidth}px` : '',
//         }}
//         >
//             <div>
//                 {mergedData?.previous?.module_type === 'input' &&
//                 <div >
//                     <div className='px-4 py-2 bg-pad '>
//                         <input 
//                         type='text' 
//                         disabled
//                         placeholder={mergedData?.previous?.placeholder} 
//                         className='w-40 px-4 h-full py-2 border border-white rounded-md bg-white'  
//                         value={mergedData?.previous?.collectionAnswers[0].value}
//                         />

//                     </div>
//                     {(mergedData?.previous?.placeholder || mergedData?.previous?.collectionAnswers.length > 1) &&
//                         <ToolTip placeholder={mergedData?.previous?.placeholder} answers={mergedData?.previous?.collectionAnswers} />
//                     }
//                 </div>
//                 }
//                 {mergedData?.previous?.module_type === 'selectbox' &&
//                 <div >
//                     <div className='py-2'>
//                         <Controller control={control} name={`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionAnswers[0].value`}  render={
//                             ({field:{onChange,value},fieldState:{error}}) => {
        
//                             return(
//                             <>
//                             <ReactSelect
//                             placeholder={mergedData?.previous?.placeholder}
//                             options={optionsNew}
//                             value={getValuePrevious(value)}
//                             onChange={(newValue) => onChange((newValue?.value))}
//                             className='ml-4 mr-4'
//                             />
//                             </>
//                             )}
//                             }
//                         />
//                     </div>
//                 </div>
//                 }
//             </div>
//             <div>
//                 {mergedData?.next?.module_type === 'input' &&
//                     <div >
//                         <div className='px-4 py-2 bg-pad '>
//                             <input 
//                             type='text' 
//                             disabled
//                             placeholder={mergedData?.previous?.placeholder} 
//                             className='w-40 px-4 h-full py-2 border border-white rounded-md bg-white'  
//                             value={mergedData?.previous?.collectionAnswers[0].value}
//                             />

//                         </div>
//                         {(mergedData?.previous?.placeholder || mergedData?.previous?.collectionAnswers.length > 1) &&
//                             <ToolTip placeholder={mergedData?.previous?.placeholder} answers={mergedData?.previous?.collectionAnswers} />
//                         }
//                     </div>
//                 }
//                 {mergedData?.next?.module_type === 'selectbox' &&
//                 <div >
//                     <div className='py-2'>
//                         <Controller control={control} name={`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionAnswers[0].value`}  render={
//                             ({field:{onChange,value},fieldState:{error}}) => {
        
//                             return(
//                             <>
//                             <ReactSelect
//                             placeholder={mergedData?.previous?.placeholder}
//                             options={optionsNew}
//                             value={getValueNext(value)}
//                             onChange={(newValue) => onChange((newValue?.value))}
//                             className='ml-4 mr-4'
//                             />
//                             </>
//                             )}
//                             }
//                         />
//                     </div>
//                 </div>
//                 }
//             </div>
//         </th>
//     );
// };

// export default MergedExercise;