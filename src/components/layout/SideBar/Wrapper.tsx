import React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from "react";
import SideBar from './SideBar';
import { CoursesProvider, useCourses } from "@/provider/CourseProvider";
import { usePathname } from 'next/navigation';

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(14)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(16)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    zIndex: open ? theme.zIndex.drawer : theme.zIndex.drawer - 1, // Adjust zIndex values
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    const {lvl1} = useCourses()
    return (
      <CoursesProvider>
        <Box sx={{ display: 'flex', height:'100vh' }}>
          {lvl1 &&
          <>
          <Drawer variant="permanent" open={open}   sx={{
            '& .MuiDrawer-paper': {
              border: 'none',
              backgroundImage: 'linear-gradient(267deg, #2E68F7 0%, #45C3F3 109.92%)',
              marginTop: '132px',
            },
          }}>
            <SideBar open={open} setOpen={setOpen}/>
          </Drawer>
          <Box onClick={() => setOpen(!open)} sx={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <Box sx={{
                background:'#3DA4F4',
                position:'fixed', 
                color:'white', 
                padding:'20px 0px', 
                cursor:'pointer', 
                borderTopRightRadius:'5px', 
                borderBottomRightRadius:'5px',
                zIndex:'999',
                paddingLeft:'20px',
                }}>
                  <ArrowBackIosNewIcon/>
              </Box>
          </Box>
          </>
          
          }

          
          <Box sx={{ flexGrow: 1, p: 3, padding:'0'}}>
              {children}
          </Box>
        </Box>
      </CoursesProvider>
    )
};

export default Wrapper;