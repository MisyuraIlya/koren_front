import React, { useState } from 'react';
import { AppBar, Avatar, Badge, Box, Divider, FormControl, hexToRgb, IconButton, InputLabel, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Select, SelectChangeEvent, Toolbar, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import { AccountCircle, Height, Padding } from '@mui/icons-material';
import { useAuth } from '@/modules/auth/store/auth.store';
import Logo from '@/../public/images/logo.svg';
import LogoTitle from '@/../public/images/logoTitle.svg';
import useDataTeacherGroups from '../hooks/useDataTeacherGroups';
import TeacherNavBar from './shared/TeacherNavBar';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
const containerStyle = {
    background: 'linear-gradient(144deg, #0990FF 7.34%, #58B4FF 125.95%)',
    padding:'20px 30px'
};

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const {data} = useDataTeacherGroups()
    const router = useRouter()
    const {user} = useAuth()
    const path = usePathname()
    const isAllowNavBar = path.includes('/teacher/home') || path.includes('/teacher/courses') || path.includes('/teacher/exercise')

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
        <AppBar position="sticky">
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
                        <List sx={{ width: '100%', height:'40px' }}>
                            <ListItem  sx={{ width: '100%', height:'40px' }}>
                                <ListItemAvatar >
                                <Avatar>
                                    <AccountCircle />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={`${user?.firstName} ${user?.lastName}`} secondary={`${user?.school.title}`} sx={{color:'white'}}/>
                            </ListItem>
                        </List>
           

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
                    <Tooltip title="עמוד בית">
                        <IconButton onClick={() => router.push('/teacher/courses')}>
                            <Image src={'/images/teacher/home.svg'} alt='' width={30} height={30}/>
                        </IconButton>
                    </Tooltip>   
        
                    <Tooltip title="מעקב התקדמות כיתתית">
                        <IconButton onClick={() => router.push('/teacher/classProgress')}>
                            <Image src={'/images/teacher/doc.svg'} alt='' width={30} height={30}/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="קבוצות למידה">
                        <IconButton onClick={() => router.push('/teacher/classes')}>
                            <Image src={'/images/teacher/look.svg'} alt='' width={40} height={40}/>
                        </IconButton>
                    </Tooltip> 

                    <Tooltip title="יומן המורה">
                        <IconButton onClick={() => router.push('/teacher/diary')}>
                            <Image src={'/images/teacher/list.svg'} alt='' width={40} height={40}/>
                        </IconButton>
                    </Tooltip>   
        
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
                        <Tooltip title="הודעות">
                            <Badge badgeContent={4} color="secondary">
                                <IconButton onClick={() => router.push('/teacher/mailbox')}>
                                    <Image src={'/images/teacher/messages.svg'} alt='' width={30} height={30}/>
                                </IconButton>
                            </Badge>
                        </Tooltip>

                        <Tooltip title="צאט">
                            <IconButton >
                                <Image src={'/images/teacher/forum.svg'} alt='' width={30} height={30}/>
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
                <TeacherNavBar/>
            }

        </AppBar>
    );
};

export default Header;