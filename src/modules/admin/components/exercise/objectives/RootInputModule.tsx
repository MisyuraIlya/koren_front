// import { useExercise } from '@/providers/exercise/ExerciseProvider';
// import React, {FC, useEffect,useState} from 'react';
// import { Controller } from 'react-hook-form';
// import ToolTip from '../ToolTip';
// import { collectionAnswers } from '@/types/ModulesTypes.ts/SecondModule.interface';
// interface RootInputModuleProps {
//     id: number
//     answer: collectionAnswers[]
//     placeholder: string
//     register: any
//     col: number
//     row: number
//     setValue: any
//     isFullText: boolean
//     exerciseId: number
//     dataObjectId: number
//     checkIsThereImage: boolean
//     isTable :boolean
//     isMerged: boolean
//     isClearTable: boolean
//     CustomTableWidth: number
//     tab: number | null
// }

// const RootInputModule: FC<RootInputModuleProps> = ({tab, CustomTableWidth, isMerged, checkIsThereImage, id, answer,placeholder, register, col, row, setValue,isFullText, exerciseId, dataObjectId, isTable, isClearTable}) => {
//     const {ExerciseMethods} = useExercise()
//     const [isChecked, setIsChecked] = useState(isFullText)
//     useEffect(() => {
//         setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
//         setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'rootInput');
//         setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, isFullText);
//         setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
//         setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, answer);
//       }, [col, row, setValue, isFullText, exerciseId, dataObjectId,answer,tab]);

//       const handleCheckBox = () => {
//         setIsChecked(!isChecked)
//         ExerciseMethods.handleEditCheckBox(id, !isChecked)
//       }

//     return (
//         <>
//             {!isMerged &&
//                 <th className={`${checkIsThereImage ? '' : ''} relative `}
//                 style={{
//                     minWidth: isTable ? `${CustomTableWidth}px` : '',
//                 }}
//                 >
//                     <div className='px-4 py-2 bg-pad flex items-center  justify-center text-center '>
//                         <input 
//                         type='text' 
//                         // disabled={isOnlineXml ? true : false}
//                         disabled
//                         placeholder={placeholder} 
//                         className='w-40 px-4 h-full py-2 border border-white rounded-md bg-white text-center'   
//                         value={answer[0].value}
//                         style={{fontSize:'22px'}}
//                         // {...register(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`,{value: answer[0].value})}
//                         />
//                         {/* {answer &&
//                         <div className='text-right flex items-center'>
//                         <input
//                             type="checkbox"
//                             className='w-4 h-4'
        
//                             // onClick={(e) => ExerciseMethods.handleEditCheckBox(id, isChecked)}
//                             onClick={() => handleCheckBox()}
//                             {...register(`collectionsRows[${col}].collectionRow[${row}].isFullText`,isChecked)} 
//                         />
//                             <span className='text-sm pr-2'>בכתיב מלא</span>
//                         </div>
//                         } */}
//                     </div>
//                     {(placeholder || answer.length > 1) &&
//                         <ToolTip placeholder={placeholder} answers={answer} />
//                     }
//                 </th>
            
//             }
//         </>
//     );
// };

// export default RootInputModule;