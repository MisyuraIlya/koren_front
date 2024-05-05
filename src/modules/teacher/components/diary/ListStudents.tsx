import { Box, IconButton, Typography } from '@mui/material';
import React, {FC} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ListStudentCard from './ListStudentCard';
import { useDiratyStore } from '../../store/diary.store';

interface ListStudentsProps {
    open: boolean
    setOpen: (value: boolean) => void
    elemnt: IConnectionGroup
}

const ListStudents:FC<ListStudentsProps> = ({open,setOpen,elemnt}) => {
    const {clear} = useDiratyStore()

    const handleClose = () => {
        clear()
        setOpen(false)
    }
    
    return (
        <>
        {open &&
            <Box sx={{width:'500px',bgcolor:'#F6F8FC', height:'100%', borderLeft:'1px solid #DCDDDE'}}>
                <Box sx={{bgcolor:'white', padding:'0 20px', display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center', height:'75px'}}>
                    <Typography variant='h5' >
                    כיתה
                    </Typography>
                    <IconButton onClick={() => handleClose()}> 
                        <CloseIcon/>
                    </IconButton>
                </Box>
                <Box sx={{padding:'0 20px'}}>
                    {elemnt?.students?.map((item) => 
                        <ListStudentCard element={item} item={elemnt}/>
                    )}
                </Box>
            </Box>
        }
        </>

    );
};

export default ListStudents;