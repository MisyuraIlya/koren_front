import React from 'react';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import { useModal } from '../provider/ModalProvider';
import { Box, Card, IconButton, Paper, Typography } from '@mui/material';
import { themeColors } from '@/styles/mui';
import CloseIcon from '@mui/icons-material/Close';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StudentExplanation = ({ active, setActive }: { active: boolean; setActive: (e: boolean) => void }) => {

    const {explanation} = useModal()
    return (
        <StyledModal open={active} onClose={() => setActive(false)}>
            <Card sx={{width:'600px', height:'400px', borderRadius:'15px'}}> 
                <Box sx={{
                        background:themeColors.primary, 
                        display:'flex', 
                        justifyContent:'space-between', 
                        alignItems:'center', 
                        padding:'0 20px', 
                        color:'white',
                        height:'60px'
                    }}>
                    <Typography textAlign={'center'}>{'הוראות תרגיל'}</Typography>
                    <IconButton onClick={() => setActive(false)}>
                        <CloseIcon sx={{color:'white'}}/>
                    </IconButton>
                </Box>  
            </Card>
        </StyledModal>
    );
};

export default StudentExplanation;
