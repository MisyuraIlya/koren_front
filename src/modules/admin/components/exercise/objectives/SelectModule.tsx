import React, {FC,useEffect} from 'react';
import ReactSelect from 'react-select'
import { Controller } from 'react-hook-form'
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
// import { collectionAnswers } from '@/types/ModulesTypes.ts/SecondModule.interface';
// import ToolTip from '../ToolTip';

const SelectModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    const {setValue} = useAdminExercise()
    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective.values)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective.answers)
      }, []);


    const optionsNew = Array.isArray(objective.values)
    ? objective.values.map((item) => ({ value: item.value, label: item.value }))
    : [];
    const {control} = useAdminExercise()

    // useEffect(() => {
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, answer);
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, options);
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'selectbox');
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].placeholder`, placeholder);
    //     setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
    //   }, [answer, col, options, row, setValue, exerciseId, dataObjectId,placeholder,tab]);
    return (
        <>
        {/* {!isMerged && */}
                <th className={`
                `}
                style={{
                    // minWidth: isTable ? `${CustomTableWidth}px` : '',
                }}
                >
                    
                    {objective.values?.length > 0 &&
                        <div className='flex items-center justify-center'>
                        <div className='py-2' 
                        // style={{width: CustomSelectBoxWidth}}
                        >
                        {/* <Controller  */}
                        {/* // control={control}  */}
                        {/* // name={`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionAnswers[0].value`} */}
                          {/* render={
                            ({field:{onChange,value},fieldState:{error}}) => {
        
                            return(
                            <> */}
                            <ReactSelect
                            placeholder={objective.placeholder}
                            options={optionsNew}
                            value={{value:objective?.answers[0].value, label:objective?.answers[0].value}}
                            
                            // onChange={(newValue) => onChange((newValue?.value))}
                            className={`ml-4 mr-4 text-[22px]`}
                            
                            
                            />
                            {/* {error && (
                                <div style={{color:'red'}}>
                                    {error.message}
                                </div>
                            )} */}
                            {/* </> */}
                            {/* )} */}
                            {/* } */}
                        {/* /> */}
                    </div>
                    {/* {(placeholder || answer.length > 1) &&
                        <ToolTip placeholder={placeholder} answers={answer} />
                    } */}
                        </div>
                    }

        
                </th>
        {/* } */}
        </>


    );
};

export default SelectModule;