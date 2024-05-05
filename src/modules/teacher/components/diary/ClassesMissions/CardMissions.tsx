import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import moment from 'moment';
import Image from 'next/image';
import React, {FC} from 'react';

interface CardMissionsProps {
    item: IConnectionGroup
}

const CardMissions:FC<CardMissionsProps> = ({item}) => {
    return (
        <Paper key={item.id} sx={{padding:'20px 10px'}}>
            <Grid container>
                <Grid item xs={1}>
                    <Image src={'/images/bookIcon.svg'} width={35} height={35} alt='iconbook'/>
                </Grid>
                <Grid item xs={11}>
                    <Typography>
                        {item?.exercise?.fullPath}
                    </Typography>
                    <Chip label={`סוג התרגיל: ${item?.exerciseType?.title}`} sx={{bgcolor:'#FAE0D1', mt:'10px'}}/>
                    <Box sx={{display:'flex', gap:'10px', alignItems:'center', mt:'10px'}}>
                        <Image src={'/images/date.svg'} width={18} height={18} alt='date'/> 
                        <Typography >
                        {moment(item?.toDate).format('DD.MM.YYYY')}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default CardMissions;