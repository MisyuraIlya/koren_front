import { Typography } from '@mui/material';
import React, {FC, useEffect} from 'react';

const StoryInstruction:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex, storySticky}) => {
    const hidden = storySticky?.values[0]?.value == objective?.values[0]?.value
    return (
        <th className='disbleTh'>
            {!hidden &&
            <Typography
                variant='h5'
                fontWeight={700}
                sx={{color:'white'}}
                dangerouslySetInnerHTML={{ __html: objective?.values[0]?.value }}
            />
            }
        </th>
    );
};

export default StoryInstruction;