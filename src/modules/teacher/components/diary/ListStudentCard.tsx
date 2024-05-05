import { Box, Chip, Grid, IconButton, Menu, MenuItem, Paper, Typography } from '@mui/material';
import moment from 'moment';
import Image from 'next/image';
import React, {FC} from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';


interface ListStudentCardProps {
    element: IExerciseUserConnection
    item: IConnectionGroup
}

const ListStudentCard:FC<ListStudentCardProps> = ({item,element}) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Paper key={item.id} sx={{padding:'20px 10px', mt:'15px'}}>
            <Grid container>
                <Grid item xs={1}>
                    <Image src={'/images/person.svg'} width={30} height={30} alt='iconbook'/>
                </Grid>
                <Grid item xs={11}>
                    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <Typography fontWeight={700} variant='body1'>
                                {`${element?.student?.firstName} ${element?.student?.lastName}`}
                        </Typography>
                        <IconButton onClick={handleClick} id="basic-button">
                            <MoreVertIcon sx={{color:'black'}}/>
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem >מעבר לתרגיל</MenuItem>
                            <MenuItem >כתיבת משוב</MenuItem>
                            <MenuItem >שליחת הודעה לתלמיד</MenuItem>
                            <MenuItem >קביעת ציון סופי</MenuItem>
                        </Menu>
                    </Box>
                    <Typography fontWeight={400} variant='body2' fontSize={'14px'}>
                        {item?.exercise?.fullPath}
                    </Typography>
                    <Chip label={`סוג התרגיל: ${item?.exerciseType?.title}`} sx={{bgcolor:'#FAE0D1', mt:'10px'}}/>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ListStudentCard;