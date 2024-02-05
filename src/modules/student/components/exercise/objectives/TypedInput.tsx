import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC, useEffect,useState} from 'react';
import { Controller } from 'react-hook-form';
import { Tooltip, Typography } from "@material-tailwind/react";
import { collectionAnswers } from '@/types/ModulesTypes.ts/SecondModule.interface';
interface TypedInputModuleProps {
    id: number
    answer: collectionAnswers[]
    placeholder: string
    register: any
    col: number
    row: number
    setValue: any
    isFullText: boolean
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean,
    isMerged: boolean
    isClearTable: boolean
    CustomTableWidth: number
    tab: number | null
}

const TypedInput: FC<TypedInputModuleProps> = ({tab, CustomTableWidth, isMerged, checkIsThereImage, id, answer,placeholder, register, col, row, setValue,isFullText, exerciseId, dataObjectId,isTable, isClearTable}) => {
    const {ExerciseMethods} = useExercise()
    const [isChecked, setIsChecked] = useState(isFullText)

    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'typedInput');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, isFullText);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].placeholder`, placeholder);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, answer);
        
      }, [col, row, setValue, isFullText, exerciseId, dataObjectId,answer,placeholder,tab]);

    const handleCheckBox = () => {
        setIsChecked(!isChecked)
        ExerciseMethods.handleEditCheckBox(id, !isChecked)
    }
    
    return (
        <>
            {!isMerged &&
                <th className={`${checkIsThereImage ? '' : ''} ${(isTable || isClearTable) ? 'tableModule ' : ''} relative `}
                style={{minWidth: isTable ? `${CustomTableWidth}px` : '',}}
                >
                    <div className='px-4 py-2 bg-pad '>
                        <input 
                        type='text' 
                        // disabled={isOnlineXml ? true : false}
                        disabled
                        className='w-40 px-4 h-full py-2 border border-white rounded-md bg-white text-center fontSizeExercise'  
                        value={answer[0].value}
                        // {...register(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`,{value: answer[0].value})}
                        />
                        {/* {answer &&
                        <div className='text-right flex items-center'>
                        <input
                            type="checkbox"
                            className='w-4 h-4'
        
                            // onClick={(e) => ExerciseMethods.handleEditCheckBox(id, isChecked)}
                            onClick={() => handleCheckBox()}
                            {...register(`collectionsRows[${col}].collectionRow[${row}].isFullText`,isChecked)} 
                        />
                            <span className='text-sm pr-2'>בכתיב מלא</span>
                        </div>
                        } */}
                    </div>
                    <div>
                        <div className='absolute right-[-2px] top-[4px]'>
                            <Tooltip
                                placement="bottom"
                                className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                                content={
                                    <div className="w-30">
                                    {placeholder &&
                                        <Typography color="black" className="font-medium">
                                            תשובה {placeholder ? placeholder : answer[0].value}
                                        </Typography>
                                    }

                                    </div>
                                }
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-5 w-5 cursor-pointer text-blue-gray-500"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                    />
                                </svg>
                            </Tooltip>
                        </div>
                    </div>
                </th>
            
            }
        </>

    );
};

export default TypedInput;