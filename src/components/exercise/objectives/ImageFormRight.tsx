import { Box } from '@mui/material';
import Image from 'next/image';
import React, {FC, useEffect} from 'react';


const ImageFormRight:FC<IObjectiveModule> = ({objective,tabIndex,taskIndex,rowIndex,objectiveIndex}) => {

    return (
        <>
        <Box sx={{padding:'20px 80px'}}>
            <Image 
                src={`http://3.74.228.194:4000/${objective.values[0].value}`} 
                alt="uploaded image w-full h-full"  
                width={500} 
                height={500} 
            />
        </Box>  
        </>
    );
};

export default ImageFormRight;