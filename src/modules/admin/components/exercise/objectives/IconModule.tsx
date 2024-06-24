import React, {FC, useEffect} from 'react';
import Image from 'next/image';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Box } from '@mui/material';

const IconModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex,iconSticky}) => {

    const {setValue} = useAdminExercise()

    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].isFullText`, objective?.isFullText)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].moduleType`, objective?.moduleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].orden`, objective?.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].placeholder`, objective?.placeholder)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].values`, objective?.values)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].rows[${rowIndex}].objectives[${objectiveIndex}].answers`, objective?.answers)
    }, []);

    const hidden = iconSticky?.values[0]?.value == objective?.values[0]?.value
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
        <th className='disbleTh'>
            {!hidden &&
            <Box sx={{display:'flex', gap:'20px', padding:'20px 30px'}}>
                <Image src={'/images/' + handleIcon()} width={25} height={25} alt='image' />
            </Box>
            }
        </th>
    );
};

export default IconModule;