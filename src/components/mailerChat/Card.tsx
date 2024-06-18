import { Avatar, Box, Typography } from '@mui/material';
import moment from 'moment';
import React, {FC} from 'react';

interface CardProps {
    item: IMailChat
}

const Card:FC<CardProps> = ({item}) => {
    return (
        <Box sx={{padding:'10px 20px'}}>
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Box sx={{display:'flex', gap:'20px', alignItems:'center'}}>
                    <Avatar>{item?.user?.firstName?.split('')[0]}</Avatar>
                    <Typography>
                        {`${item?.user?.firstName} ${item?.user?.lastName}`}
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        {moment(item?.createdAt).format('LLLL')}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{padding:'30px 10px 10px 10px'}}>
                <Typography>
                {item?.description}
                </Typography>
            </Box>
        </Box>

    );
};

export default Card;