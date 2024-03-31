import React, { useState } from 'react';
import { AppBar, Box, Divider, FormControl, hexToRgb, IconButton, InputLabel, Menu, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import { AccountCircle, Height, Padding } from '@mui/icons-material';
import { useAuth } from '@/modules/auth/store/auth.store';
import Logo from '@/../public/images/logo.svg';
import LogoTitle from '@/../public/images/logoTitle.svg';
import useDataTeacherGroups from '../hooks/useDataTeacherGroups';

const containerStyle = {
    background: 'linear-gradient(144deg, #0990FF 7.34%, #58B4FF 125.95%)',
    padding:'20px 30px'
};

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const {data} = useDataTeacherGroups()
    const {user} = useAuth()
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [groupSelected, setSelectedGroup] = useState<ITeacherGroup | null>();
    const [selectedUser, setSelectedUser] = useState('')
    
    const handleChange = (event: SelectChangeEvent) => {
        const find = data?.find((item) => item.uuid == event.target.value)
        setSelectedGroup(find)
        setSelectedUser('')
    };
  
    return (
        <AppBar position="fixed">
            <Toolbar style={{paddingRight:'0px'}}>
                <Box style={containerStyle}>
                    <Typography variant='h6'>{'בנתיבי התחביר והצורות'}</Typography>
                </Box>
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
                <Divider orientation="vertical" variant="middle" flexItem sx={{background:'#F3F6F9'}}/>
                <Box>
                    <IconButton>
                        <Image src={'/images/teacher/home.svg'} alt='' width={30} height={30}/>
                    </IconButton>
                    <IconButton>
                        <Image src={'/images/teacher/doc.svg'} alt='' width={30} height={30}/>
                    </IconButton>
                    <IconButton>
                        <Image src={'/images/teacher/look.svg'} alt='' width={40} height={40}/>
                    </IconButton>
                    <IconButton>
                        <Image src={'/images/teacher/list.svg'} alt='' width={40} height={40}/>
                    </IconButton>
                </Box>
                <Box sx={{display:'flex', gap:'20px'}}>
                    <Select
                        sx={{bgcolor:'#F0FBFF', minWidth:'150px', height:'35px'}}
                        value={groupSelected?.uuid}
                        onChange={handleChange}
                        autoWidth
                    >
                        {data?.map((item,index) => 
                            <MenuItem key={index} value={item.uuid}>{item.title}</MenuItem>
                        )}
                    </Select>
                    <Select
                        sx={{bgcolor:'#F0FBFF', minWidth:'150px', height:'35px'}}
                        value={selectedUser}
                        onChange={(e) => setSelectedUser(e.target.value)}
                        autoWidth
                    >
                        {groupSelected?.students?.map((item,index) =>
                        <MenuItem key={index} value={item.id}>{item.firstName}</MenuItem>
                        )}
                    </Select>
                </Box>
           
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    
                </Typography>
                <Box sx={{display:'flex', gap:'20px'}}>
                    <Box>
                        <IconButton>
                            <Image src={'/images/teacher/messages.svg'} alt='' width={30} height={30}/>
                        </IconButton>
                        <IconButton>
                            <Image src={'/images/teacher/forum.svg'} alt='' width={30} height={30}/>
                        </IconButton>
                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{background:'#F3F6F9'}}/>
                    <Box sx={{display:'flex', gap:'10px', cursor:'pointer'}}>
                        <Image src={Logo} alt='logo' width={40} height={40} />
                        <Image style={{marginTop:'15px'}} src={LogoTitle} alt='logoTitle' width={150} height={50}/>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;