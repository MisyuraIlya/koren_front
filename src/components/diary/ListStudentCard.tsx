import { Box, Chip, Grid, IconButton, Menu, MenuItem, Paper, Typography } from '@mui/material';
import moment from 'moment';
import Image from 'next/image';
import React, {FC} from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/navigation';
import { useTeacherWork } from '@/store/work.store';
import useDataTeacherGroups from '@/hooks/useDataTeacherGroups';


interface ListStudentCardProps {
    element: IExerciseUserConnection
    item: IConnectionGroup
}

const ListStudentCard:FC<ListStudentCardProps> = ({item,element}) => {
    const {push} = useRouter()
    const {data} = useDataTeacherGroups()
    const {setSelectedGroup,setStudentChoosed,setClassesChoosed,setSendType} = useTeacherWork()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const handleGoToExercise = () => {
        const uuid = item?.group
        const find = data?.find((item) => item.uuid === uuid)
        if(find) {
            setSelectedGroup(find)
            setClassesChoosed(find)
            setSendType(find.connection.exerciseType?.title as sendExerciseType)
            setStudentChoosed(element?.student)
            push(item.exercise.fullLink!)

        }
 
    }

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
                            <MenuItem onClick={() => handleGoToExercise()}>מעבר לתרגיל</MenuItem>
                            <MenuItem disabled>כתיבת משוב</MenuItem>
                            <MenuItem disabled>שליחת הודעה לתלמיד</MenuItem>
                            <MenuItem disabled>קביעת ציון סופי</MenuItem>
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