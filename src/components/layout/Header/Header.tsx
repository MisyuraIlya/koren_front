'use client'
import React from 'react';
import { AppBar, Avatar,Box, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import { useAuth } from '@/modules/auth/store/auth.store';
import Logo from '@/../public/images/logo.svg';
import LogoTitle from '@/../public/images/logoTitle.svg';
import { useRouter } from 'next/navigation';
import { useGlobalCourses } from '@/store/globalCourses';

const Header = ({ children, navbar }: { children: React.ReactNode, navbar: React.ReactNode }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const {mainCourse} = useGlobalCourses()
    const router = useRouter()
    const {user, logout} = useAuth()

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed">
            <Toolbar style={{paddingRight:'0px'}}>
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <Box className="linear">
                            <Typography variant='h6' style={{minHeight:'32px', cursor:'pointer'}} onClick={() => router.push('/teacher/courses')}>{mainCourse?.name ?? 'לא נבחר עדיין קורס '}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                            <List sx={{padding:'0', margin:'0'}}>
                                <ListItem  sx={{ width: '100%', cursor:'pointer'}} onClick={handleMenu}>
                                    <ListItemAvatar>
                                        <Avatar sx={{width:'50px', height:'50px'}}>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText 
                                        primary={`${user?.firstName} ${user?.lastName}`} 
                                        secondary={`חיפה`}
                                        id="menu-appbar" 
                                        sx={{ 
                                            '& .MuiListItemText-secondary': { 
                                                color: 'white',
                                            },
                                        }}
                                    />
                                </ListItem>
                            </List> 
                            <Divider orientation="vertical" variant="middle" flexItem sx={{background:'#b3bbbf59'}}/>
                        </Box>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => {logout();router.push('/')}}>יציאה</MenuItem>
                        </Menu>
                    </Grid>
                    <Grid item xs={7}>
                        {children}
                    </Grid>
                    <Grid item xs={1.5}>
                        <Box sx={{display:'flex', height:'100%' ,gap:'10px', cursor:'pointer', justifyContent:'left', alignItems:'center', padding:'0 10px'}}>
                            <Divider orientation="vertical" variant="middle" flexItem sx={{background:'#b3bbbf59', mr:'10px'}}/>
                            <Image src={Logo} alt='logo' width={40} height={40} />
                            <Image style={{marginTop:'15px'}} src={LogoTitle} alt='logoTitle' width={150} height={50}/>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
            {navbar}
        </AppBar>
      
    );
};

export default Header;

