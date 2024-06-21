import { Box, Drawer } from '@mui/material';
import React, {FC} from 'react';

interface FeedBackProps {
    open: boolean
    setOpen: (value: boolean) => void
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
        <Box sx={{minWidth:'370px'}}>
    asdas
        </Box>
    </Drawer>
    );
};

export default FeedBack;