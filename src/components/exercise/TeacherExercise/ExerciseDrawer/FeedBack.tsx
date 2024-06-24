'use client'
import React, { FC } from 'react';
import useMailFeedBack from '@/hooks/useMailFeedBack';
import { Box, Card, Drawer, Typography } from '@mui/material';
import { themeColors } from '@/styles/mui';

interface FeedBackProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const FeedBack: FC<FeedBackProps> = ({ open, setOpen }) => {
    const { data } = useMailFeedBack();

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
            <Box
                sx={{
                    minWidth: '370px',
                    padding: '30px 20px',
                    bgcolor: '#4b536c',
                    height: '100%',
                    backdropFilter: 'blur(8px)', 
                }}
            >
                <Card sx={{ minHeight: '300px', backgroundColor: 'rgba(255, 255, 255, 1)' }}>
                    <Box sx={{ bgcolor: themeColors.primary }}>
                        <Typography variant='h6' color={'white'} textAlign={'center'} sx={{ padding: '10px 0' }}>
                            משוב
                        </Typography>
                    </Box>
                    <Box sx={{ padding: '20px' }}>
                        <Typography>
                            {data?.description ?? 'אין משוב'}
                        </Typography>
                    </Box>
                </Card> 
            </Box>
        </Drawer>
    );
};

export default FeedBack;
