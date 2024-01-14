import React, {FC,useEffect} from 'react';
import ReactSelect from 'react-select'
import { Controller } from 'react-hook-form'
import { useAdminExerciseProvider } from '@/modules/admin/provider/AdminExerciseProvider';
// import { collectionAnswers } from '@/types/ModulesTypes.ts/SecondModule.interface';
// import ToolTip from '../ToolTip';

interface SelectModuleProps {
    // answer: collectionAnswers[]
    // options: collectionAnswers[]
    // placeholder: string
    // col: number
    // row:number
    // register: any
    // setValue: any;
    // control: any
    // exerciseId: number
    // dataObjectId: number
    // checkIsThereImage: boolean
    // isTable: boolean
    // isMerged: boolean
    // isClearTable: boolean
    // CustomTableWidth: number
    // CustomSelectBoxWidth: number
    // tab: number | null
    objective: IObjective
}
const SelectModule:FC<SelectModuleProps> = ({objective}) => {
    const optionsNew = Array.isArray(objective.values)
    ? objective.values.map((item) => ({ value: item.value, label: item.value }))
    : [];
    const {control} = useAdminExerciseProvider()

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