import useDataTeacherConnectionGroup from '@/modules/teacher/hooks/useDataTeacherConnectionGroup';
import { Box } from '@mui/material';
import React from 'react';
import CardMissions from './CardMissions';

const ListMissions = () => {
    const {data} = useDataTeacherConnectionGroup()
    return (
        <Box sx={{padding:'20px 30px'}}>
            {data?.map((item) => 
                <CardMissions item={item}/>
            )}
        </Box>
    );
};

export default ListMissions;