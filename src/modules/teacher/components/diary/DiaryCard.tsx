import { Box, Chip, Grid, IconButton, Menu, MenuItem, Paper, Typography } from '@mui/material';
import moment from 'moment';
import Image from 'next/image';
import React, {FC} from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TeacherURLS } from '@/enums/urls';
import { usePathname } from 'next/navigation';
import { useDiratyStore } from '../../../../store/diary.store';

interface DiaryCardProps {
    item: IConnectionGroup
}

const DiaryCard:FC<DiaryCardProps> = ({item}) => {
    const location = usePathname()
    const {setOpenStudents,setConnectionGroup} = useDiratyStore()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleNumber = (): number  => {
        if(location === TeacherURLS.CLASSES_MISSIONS) {
            return item?.students?.length
        } else if(location === TeacherURLS.TO_CHECK) {
            return item?.students?.filter((studnt) => studnt.isDone).length
        } else if(location === TeacherURLS.RESTORE) {
            return item?.students?.filter((studnt) => studnt.isResend).length
        } else if(location === TeacherURLS.IN_PROCESS) {
            return item?.students?.filter((studnt) => !studnt.isDone).length
        } else if(location === TeacherURLS.LATE_SUBMISSION) {
            const currentTime = moment();
            const lateStudents = item?.students?.filter((student) => {
                if (student.dueDate) {
                    const dueDate = moment(student.dueDate);
                    return dueDate.isBefore(currentTime);
                }
                return false;
            });
            return lateStudents.length;
        } else {
            return 0
        }
    }

    const handleChoose = () => {
        setOpenStudents(true)
        setAnchorEl(null)
        setConnectionGroup(item)
    }


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
                        <IconButton onClick={handleClick} id="basic-button" sx={{width:'50px'}}>
                            <MoreVertIcon sx={{color:'black'}}/>
                        </IconButton>
                    </Box>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        
                    >
                        <MenuItem sx={{gap:'10px', display:'flex', alignItems:'center'}} onClick={() => handleChoose()}>  
                            <Box sx={{bgcolor:'#FF9454', width:'21px', height:'21px', textAlign:'center', borderRadius:'50%'}}>
                            {handleNumber()}
                            </Box>
                            לרשימת התלמידים 
                        </MenuItem>
                        <MenuItem>תאריך חדש לכל הכיתה</MenuItem>
                    </Menu>

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

export default DiaryCard;