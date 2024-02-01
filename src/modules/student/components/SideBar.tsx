import { styled, Theme, CSSObject } from '@mui/material/styles';
import React, { useState } from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { Box, Divider, List, ListItem} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MinCard from './SideBar/MinCard';
import BigCard from './SideBar/BigCard';
import SearchIcon from '@mui/icons-material/Search';
import SearchBigInput from './SideBar/SearchBigInput';
import { useStudentCourses } from '../provider/StudentCoursesProvider';
import SecondSideBar from './SideBar/SecondSideBar';
import zIndex from '@mui/material/styles/zIndex';

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

const redBoxStyles = {
    width: '300px',
    height: '100vh',
    background: 'white',
    zIndex:'1',
    position: 'fixed',
    transition: 'left 0.3s ease-in-out',
    boxShadow: '-8px 0px 20px 0px rgba(0, 0, 0, 0.12)',
};

const SideBar = () => {
    const [open, setOpen] = React.useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [courseHovered, setCourseHovered] = useState<number>(0)
    const {lvl1IdCourses} = useStudentCourses()

    const handleHover = (courseId: number) => {
        setCourseHovered(courseId)
        setIsHovered(true);
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
    };
    return (
    <Box sx={{ display: 'flex', position:'relative' }}>
        <Drawer variant="permanent" open={open} sx={{top:'125px'}}>
            <Divider />
            <List>
                <ListItem  disablePadding sx={{ display: 'block', px: 2.5, }}>
                    {!open &&
                    <>
                        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'90px'}}>
                            <SearchIcon sx={{fontSize:'50px', color:'white', cursor:'pointer'}}/>
                        </Box>
                        {lvl1IdCourses?.children?.map((item) =>
                            <MinCard type={item.id!.toString()} title={item.name}/>
                        )}
                        
                    </>
            
                    }
                    {open &&
                    <>
                        <SearchBigInput/>
         
                            {lvl1IdCourses?.children?.map((item, key) =>
                                <Box
                                    key={key}
                                    onMouseEnter={() => handleHover(item?.id!)}
                                    onMouseLeave={handleHoverEnd}
                                >
                                    <BigCard title={item.name} type='פרק' totalChildren={item.children.length}/>
                                </Box>

                            )}
                    </>
                    }
                </ListItem>
            </List>
        </Drawer>

        <Box onClick={() => setOpen(!open)} sx={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Box sx={{background:'#3DA4F4', color:'white', padding:'20px 0px', cursor:'pointer', borderTopRightRadius:'5px', borderBottomRightRadius:'5px'}}>
                <ArrowBackIosNewIcon/>
            </Box>
        </Box>

        {open &&
            <Box
                sx={{
                    ...redBoxStyles,
                    left: !isHovered ? '-200px' : '300px',
                    overflow:'auto',
                }}
                onMouseEnter={() => handleHover(courseHovered)} 
                onMouseLeave={handleHoverEnd} 
            >
                <Box sx={{marginTop:'230px'}}>
                    <SecondSideBar courseHovered={courseHovered}/>
                </Box>
            </Box>
        }

    </Box>
    );
};

export default SideBar;