import { useTeacherWork } from '@/modules/teacher/store/work.store';
import { useExercise } from '@/provider/ExerciseProvider';
import React, {FC, useEffect,useState} from 'react';
import { useDebounce } from 'use-debounce';

const InputModule: FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    const [value, setValue] = useState('');
    const [debouncedValue] = useDebounce(value, 5000);
    const {handleAnswer} = useExercise()
    const {studentChoosed} = useTeacherWork()
    
    useEffect(() => {
      if(debouncedValue){
        handleAnswer(objective.answers[0],debouncedValue)
      }
    },[debouncedValue])

    useEffect(() => {
        setValue(objective?.answers[0]?.answers[0]?.value ?? '')
      },[studentChoosed])


      

    // const handleCheckBox = () => {
    //     setIsChecked(!isChecked)
    //     ExerciseMethods.handleEditCheckBox(id, !isChecked)
    // }

    // const splitPlaceHolder = placeholder?.split('[forwardText]')
    return (
        <>
            {/* {!isMerged && */}
                <th 
                key={objectiveIndex}
                // className={`${checkIsThereImage ? '' : ''} ${(isTable || isClearTable)  ? 'tableModule ' : ''} relative `}
                // style={{
                //     minWidth: isTable ? `${CustomTableWidth}px` : '',
                // }}
                >
                    <div className='px-4 py-2 bg-pad flex items-center justify-center '>
                        {/* {splitPlaceHolder[1] && answer[0].value &&
                            <div className='flex items-center text-center w-full'>
                                <p>{splitPlaceHolder}</p>
                            </div>    
                        
                        } */}
                        {/* { answer[0].value && */}
                            <>
                            <input 
                            type='text' 
                            
                            // disabled={isOnlineXml ? true : false}
                            disabled
                            // placeholder={splitPlaceHolder[1] ? '' : objective.placeholder} 
                            className={` px-4 h-full py-2 border border-white rounded-md bg-white fontSizeExercise`}
                            // style={{width: CustomInputWidth}} 
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
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
                            </>
                        {/* } */}


                    </div>
                    {/* {(placeholder || answer.length > 1) &&
                        <ToolTip placeholder={placeholder} answers={answer} />
                    } */}
                </th>
            
            {/* } */}
        </>

    );
};

export default InputModule;