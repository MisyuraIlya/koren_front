'use client'
import { Box } from '@mui/material';
import React from 'react';
import Layout from '.';
import { useAuth } from '@/modules/auth/store/auth.store';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const {user} = useAuth()
    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Layout.Header.Wrapper 
                navbar={
                    <Layout.NavBar.Wrapper>
                        <>
                        {user?.role === 'teacher' &&
                            <Layout.NavBar.TeacherContent/>
                        }
                        </>
                    </Layout.NavBar.Wrapper>
                }
            >
                {user?.role === 'teacher' ?
                <Layout.Header.TeacherBar/>
                :
                <Layout.Header.StudentBar/>
                }
            </Layout.Header.Wrapper>
            {children}
        </Box>
    );
};

export default MainLayout;