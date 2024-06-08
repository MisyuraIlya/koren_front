import React, {FC, useEffect} from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

const IconModule:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

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
            <Box sx={{display:'flex', gap:'20px', padding:'20px 30px'}}>
                <Image src={'/images/' + handleIcon()} width={50} height={50} alt='image' />
                <Typography variant='h5' sx={{color:'white'}}>
                {objective?.values?.[0]?.value}
                </Typography>
            </Box>
        </th>
    );
};

export default IconModule;