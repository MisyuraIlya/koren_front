import { Box, Modal, Typography } from '@mui/material';
import React from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  
const ExerciseModal = ({open, setOpen, children}:{open: boolean, setOpen:(value: boolean) => void, children: React.ReactNode}) => {
    
    return (
    <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            {children}
        </Box>
    </Modal>
    );
};

export default ExerciseModal;