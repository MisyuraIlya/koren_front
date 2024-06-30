import React,{FC} from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Checkbox, Typography } from '@mui/material';
import moment from 'moment';
import {useRouter, usePathname} from 'next/navigation';

interface ICard {
    item: IMail
}

const Card:FC<ICard> = ({item}) => {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <Box sx={{display:'flex', justifyContent:'space-between', bgcolor:'#F2F6FC', padding:'10px 30px', alignItems:'center', cursor:'pointer'}} onClick={() => router.push(`${pathname}/${item.uuid}`)}>
            <Box sx={{ gap:'25px', display:'flex', alignItems:'center', padding:'5px 0'}}>
                <Typography>
                    {`${item?.userSend?.firstName} ${item?.userSend?.lastName}`}
                </Typography>
                <Typography>
                    {item?.title}
                </Typography>
            </Box>
            <Box>
                <Typography>
                    {moment(item?.createdAt).format('LLL')}
                </Typography>
            </Box>
        </Box>
    );
};

export default Card;