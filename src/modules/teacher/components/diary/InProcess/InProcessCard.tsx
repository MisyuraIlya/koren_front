import { Box, Chip, Grid, IconButton, Menu, MenuItem, Paper, Typography } from '@mui/material';
import moment from 'moment';
import Image from 'next/image';
import React, {FC} from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDiratyStore } from '@/modules/teacher/store/diary.store';

interface InProcessCardProps {
    item: IConnectionGroup
}

const InProcessCard:FC<InProcessCardProps> = ({item}) => {
    const {setOpenStudents, setConnectionGroup} = useDiratyStore()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Paper key={item.id} sx={{padding:'20px 10px'}}>
            <Grid container>
                <Grid item xs={1}>
                    <Image src={'/images/bookIcon.svg'} width={35} height={35} alt='iconbook'/>
                </Grid>
                <Grid item xs={11}>
                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                        <Typography>
                            {item?.exercise?.fullPath}
                        </Typography>
                        <IconButton onClick={handleClick} id="basic-button" sx={{minWidth:'50px'}}>
                            <MoreVertIcon sx={{color:'black'}}/>
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem sx={{gap:'10px', display:'flex', alignItems:'center'}} onClick={() => {setOpenStudents(true);setAnchorEl(null);setConnectionGroup(item)}}>  
                                <Box sx={{bgcolor:'#FF9454', width:'21px', height:'21px', textAlign:'center', borderRadius:'50%'}}>
                                {item?.students?.filter((studnt) => !studnt.isDone).length}
                                </Box>
                                לרשימת התלמידים 
                            </MenuItem>
                            <MenuItem >תאריך חדש לכל הכיתה</MenuItem>
                        </Menu>
                    </Box>
             
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

export default InProcessCard;