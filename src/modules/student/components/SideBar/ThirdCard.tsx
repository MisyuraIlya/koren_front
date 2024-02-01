import { Box, Card, Typography } from '@mui/material';
import React, { useState } from 'react';
import FourthCard from './FourthCard';

const ThirdCard = ({item} : {item: ICourse}) => {
    const [clicked, setClicked] = useState(false)
    return (
        <Box sx={{marginTop:'10px'}}>
            <Card sx={{background:'#DDEDFF', borderRadius:'4px', cursor:'pointer'}} onClick={() => setClicked(!clicked)}>
                <Typography variant='body1' textAlign={'center'} sx={{padding:'20px 0px'}} fontWeight={900}>{item.name}</Typography>
            </Card>
            {clicked && item?.children?.map((item,key) => 
                <Box key={key}>
                    <FourthCard item={item}/>
                </Box>
            )}
        </Box>
    );
};

export default ThirdCard;