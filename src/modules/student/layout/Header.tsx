'use client'
import React from 'react';
import { AppBar, Avatar, Badge, Box, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Select, Toolbar, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import { AccountCircle } from '@mui/icons-material';
import { useAuth } from '@/modules/auth/store/auth.store';
import Logo from '@/../public/images/logo.svg';
import LogoTitle from '@/../public/images/logoTitle.svg';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useGlobalCourses } from '@/store/globalCourses';
import NavBarNavigation from '@/components/shared/NavBarNavigation';
import GroupsIcon from '@mui/icons-material/Groups';
const containerStyle = {
    background: 'linear-gradient(144deg, #0990FF 7.34%, #58B4FF 125.95%)',
    padding:'20px',
    textAlign:'center',
    width:'300px',
};

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const {mainCourse} = useGlobalCourses()
    const router = useRouter()
    const {user, logout} = useAuth()
    const path = usePathname()
    const isAllowNavBar = path.includes('/student/home') || path.includes('/student/courses') || path.includes('/student/exercise')

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <AppBar position="sticky">
            <Toolbar style={{paddingRight:'0px'}}>
                <Box sx={containerStyle}>
                    <Typography variant='h6' style={{minHeight:'32px', cursor:'pointer'}} onClick={() => router.push('/teacher/courses')}>{mainCourse?.name}</Typography>
                </Box>
                <Box >
                    <List sx={{ width: '100%',padding:'0', margin:'0'}}>
                        <ListItem  sx={{ width: '100%', cursor:'pointer'}} onClick={handleMenu}>
                            <ListItemAvatar>
                                <Avatar>
                                <Image src={'/images/avatar.png'} alt='' width={50} height={50}/>
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                            primary={`${user?.firstName} ${user?.lastName}`} 
                            secondary={`asdasd`}
                            id="menu-appbar" 
                            sx={{ 
                                '& .MuiListItemText-secondary': { 
                                    color: 'white',
                                },
                            }}
                            />
                        </ListItem>
                    </List>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => {logout();router.push('/')}}>יציאה</MenuItem>
                    </Menu>
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem sx={{background:'#F3F6F9'}}/>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                </Typography>
                <Box sx={{display:'flex', gap:'20px'}}>
                    <Box>
                        <Tooltip title="צאט">
                            <IconButton >
                                <Image src={'/images/qr.svg'} alt='' width={30} height={30}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="צאט">
                            <IconButton >
                                <Image src={'/images/dash.svg'} alt='' width={20} height={20}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="צאט">
                            <IconButton >
                                <Image src={'/images/group.svg'} alt='' width={30} height={30}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="הודעות">
                            <IconButton onClick={() => router.push('/teacher/mailbox')}>
                                <Image src={'/images/bill.svg'} alt='' width={25} height={25}/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{background:'#F3F6F9'}}/>
                    <Box sx={{display:'flex', gap:'10px', cursor:'pointer'}}>
                        <Image src={Logo} alt='logo' width={40} height={40} />
                        <Image style={{marginTop:'15px'}} src={LogoTitle} alt='logoTitle' width={150} height={50}/>
                    </Box>
                </Box>
            </Toolbar>
            {isAllowNavBar &&
            <Box sx={{bgcolor:'#F0FBFF', height:'60px', width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 40px'}}>
                <Box sx={{width:'40%', display:'flex'}}>
                    <NavBarNavigation/>
                </Box>
            </Box>
            } 

        </AppBar>
    );
};

export default Header;