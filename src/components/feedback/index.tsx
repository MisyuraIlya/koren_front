import { Box, Drawer, IconButton, Typography } from '@mui/material';
import React, {FC} from 'react';
import Choose from './Choose';
import SelectMode from './SelectMode';
import Bank from './Bank';
import Create from './Create';
import Process from './Process';
import Alert from './Alert';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

interface FeedBackProps {
    open: boolean
    setOpen: (open: boolean) => void
}

const FeedBack:FC<FeedBackProps> = ({open, setOpen}) => {
    return (
        <Drawer 
            open={open} 
            onClose={() => setOpen(false)}
            anchor='right'
            SlideProps={{
                direction:'right'
            }}   
            sx={{
                '& .MuiDrawer-paper': {
                border: 'none',
                marginTop: '132px',
                backgroundColor: 'white', 
                },
                '& .MuiBackdrop-root': {
                    backgroundColor: 'transparent', 
                },
            }} 
        >
            <Box sx={{width:'450px'}}>
                <IconButton>
                    <CloseIcon/>
                </IconButton>
                <Alert/>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'50px'}}>
                    <Box>
                        <Image src={'/images/feedback.png'} width={200} height={150} alt='feedback' />
                        <Typography variant='body1' sx={{paddingTop:'20px'}}>
                        האם תרצי לכתוב משוב חדש או לבחור אחד קיים?
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', padding:"0 10%"}}>
                    <SelectMode/>
                </Box>
                <Choose/>
                <Create/>
                <Bank/>
                <Process/>
            </Box>
        </Drawer>
    );
};

export default FeedBack;