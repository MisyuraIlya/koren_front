import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

const SecondHead: FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {
    return (
        <th className={`disbleTh`}>
            <Typography variant='h5' sx={{padding:'20px 30px'}} fontWeight={700}>{objective?.values?.[0]?.value}</Typography>
        </th>
    );
};

export default SecondHead;
