import React from 'react';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import { useModal } from '../provider/ModalProvider';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StudentModal = ({ active, setActive }: { active: boolean; setActive: (e: boolean) => void }) => {

    const {iframe} = useModal()
    
    return (
        <StyledModal open={active} onClose={() => setActive(false)}>
            <div>
                as
            </div>
        </StyledModal>
    );
};

export default StudentModal;
