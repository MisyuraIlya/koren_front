import React,{FC} from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Checkbox, Typography } from '@mui/material';
import moment from 'moment';

interface ICard {
    item: IMail
}

const Card:FC<ICard> = ({item}) => {
    return (
        <Box sx={{display:'flex', justifyContent:'space-between', bgcolor:'#F2F6FC', padding:'10px 30px', alignItems:'center'}}>
            <Box sx={{ gap:'25px', display:'flex', alignItems:'center'}}>
                <Box>
                    <Checkbox/>
                    <Checkbox
                        icon={<StarIcon />}
                        checkedIcon={<StarBorderIcon />}
                    />
                </Box>
                <Typography>
                    {`${item?.userSend?.firstName} ${item?.userSend?.lastName}`}
                </Typography>
                <Typography>
                    {item?.description}
                </Typography>
            </Box>
            <Box>
                <Typography>
                    {moment(item?.date).format('LLL')}
                </Typography>
            </Box>
        </Box>
    );
};

export default Card;