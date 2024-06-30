import { Box, Drawer, IconButton, Typography } from '@mui/material';
import React, { FC } from 'react';
import SelectMode from './SelectMode';
import Bank from './Bank';
import Create from './Create';
import Process from './Process';
import Alert from './Alert';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { useFeedBackStore } from '@/store/feedBack.store';

interface FeedBackProps {
    open: boolean
    setOpen: (open: boolean) => void
}

const FeedBack: FC<FeedBackProps> = ({ open, setOpen }) => {

    const { choosedMode } = useFeedBackStore()
    return (
        <Drawer
            open={open}
            onClose={() => setOpen(false)}
            anchor='right'
            SlideProps={{
                direction: 'right'
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
            <Box sx={{
                width: '450px',
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor:'#F6F8FC',
                justifyContent: choosedMode ? 'space-between' : 'flex-start'
            }}>
                <Box sx={{padding:'10px 0'}}>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Alert />
                {!choosedMode &&
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }}>
                        <Box>
                            <Image src={'/images/feedback.png'} width={200} height={150} alt='feedback' />
                            <Typography variant='body1' sx={{ paddingTop: '20px' }}>
                                האם תרצי לכתוב משוב חדש או לבחור אחד קיים?
                            </Typography>
                        </Box>
                    </Box>
                }

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'0 20px' }}>
                    <SelectMode />
                </Box>
                
                {choosedMode &&
                    <>
                        {choosedMode == 'create' &&
                            <Create />
                        }
                        {choosedMode == 'choose' &&
                            <Bank />
                        }
                        <Box sx={{ marginTop: 'auto', marginBottom:'160px', padding:'0 20px' }}>
                            <Process />
                        </Box>
                    </>
                }
            </Box>
        </Drawer>
    );
};

export default FeedBack;
