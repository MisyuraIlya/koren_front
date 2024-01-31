"use client"
import { AppBar, Box, Button, Divider, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Logo from '@/../public/images/logo.svg';
import LogoTitle from '@/../public/images/logoTitle.svg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QrCodeIcon from '@mui/icons-material/QrCode';
import ForumIcon from '@/../public/images/forum.svg';
import SettingsBoard from '@/../public/images/settingsBoard.svg'
import { AccountCircle, Height } from '@mui/icons-material';
import { useAuth } from '@/modules/auth/store/auth.store';
import NavBar from './NavBar';
const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const {user} = useAuth()

    const containerStyle = {
        background: 'linear-gradient(227deg, #2E68F7 0%, #45C3F3 109.92%)',
        minHeight:'64px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'0 20px',
        width:'300px',
        cursor:'pointer'
      };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    
    return (
        <AppBar position="fixed">
            <Toolbar style={{paddingRight:'0px'}}>
                <Box style={containerStyle}>
                    <Typography variant='h6'>בנתיבי התחביר והצורות</Typography>
                </Box>
                {user?.id && (
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <Box sx={{display:'flex', gap:'20px'}}>
                                <AccountCircle sx={{fontSize:'40px'}}/>
                                <Typography sx={{display:'flex', justifyContent:'center', alignItems:'center'}} variant='h5'>{user?.firstName} {user?.lastName}</Typography>
                            </Box>

                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>פרופיל</MenuItem>
                            <MenuItem onClick={handleClose}>יציאה</MenuItem>
                        </Menu>
                    </Box>
                )}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    
                </Typography>
                <Box sx={{display:'flex', gap:'20px'}}>
                    <Box>
                        <IconButton>
                            <QrCodeIcon sx={{color:'white'}}/>
                        </IconButton>
                        <IconButton>
                            <Image src={SettingsBoard} alt='SettingsBoard' width={20} height={20}/>
                        </IconButton>
                        <IconButton>
                            <Image src={ForumIcon} alt='ForumIcon' width={25} height={25}/>
                        </IconButton>
                        <IconButton>
                            <NotificationsIcon sx={{color:'white'}}/>
                        </IconButton>
                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{background:'#F3F6F9'}}/>
                    <Box sx={{display:'flex', gap:'10px'}}>
                        <Image src={Logo} alt='logo' width={40} height={40} />
                        <Image style={{marginTop:'15px'}} src={LogoTitle} alt='logoTitle' width={150} height={50}/>
                    </Box>
                </Box>
            </Toolbar>
            <NavBar/>
        </AppBar>
    );
};

export default Header;