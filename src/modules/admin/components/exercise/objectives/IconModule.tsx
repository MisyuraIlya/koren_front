import React, {FC, useEffect} from 'react';
import Image from 'next/image';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';

const IconModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    const {setValue} = useAdminExercise()

    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective?.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective?.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective?.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective?.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective?.values)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective?.answers)
    }, []);

    // const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
    const handleIcon = () => {
        if(objective?.values?.[0]?.value == 'דיון') {
            return 'conversation.svg'
        } else if(objective?.values?.[0]?.value == 'הוראה'){
            return 'instruction.svg';
        } else if(objective?.values?.[0]?.value == 'כתיבה') {
            return 'write.svg'
        } else if(objective?.values?.[0]?.value == 'נושא') {
            return 'section.svg'
        } else if (objective?.values?.[0]?.value === 'תרגול') {
            return 'exercise.svg'
        }else {
            return ''
        }
    }

    return (
        <th 
        // className={`
        // pt-2
        // ${isDisabledTh && 'disbleTh'}
        // ${checkIsThereImage ? '' : ''}
        // ${(firstIdTextModule === value && !isClearTable)  ? 'specific-th ' : ''}
        
        // `}
        className='disbleTh px-4'
        >
            <div>
                <Image src={'/images/' + handleIcon()} width={50} height={50} alt='image' />
            </div>
        </th>
    );
};

export default IconModule;