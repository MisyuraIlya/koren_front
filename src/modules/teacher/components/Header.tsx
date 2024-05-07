'use client'
import React from 'react';
import { AppBar, Avatar, Badge, Box, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Select, Toolbar, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import { AccountCircle } from '@mui/icons-material';
import { useAuth } from '@/modules/auth/store/auth.store';
import Logo from '@/../public/images/logo.svg';
import LogoTitle from '@/../public/images/logoTitle.svg';
import useDataTeacherGroups from '../hooks/useDataTeacherGroups';
import TeacherNavBar from './shared/TeacherNavBar';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTeacherWork } from '../store/work.store';
import { useGlobalCourses } from '@/store/globalCourses';
import { TeacherURLS } from '@/enums/urls';
const containerStyle = {
    background: 'linear-gradient(144deg, #0990FF 7.34%, #58B4FF 125.95%)',
    padding:'20px',
    textAlign:'center',
    width:'300px',
};

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const {mainCourse} = useGlobalCourses()
    const {setClassesChoosed, setStudentChoosed, studentChoosed, classChoosed, groupSelected, setSelectedGroup} = useTeacherWork()
    const {data} = useDataTeacherGroups()
    const router = useRouter()
    const {user, logout} = useAuth()
    const path = usePathname()
    const isAllowNavBar = path.includes('/teacher/home') || path.includes('/teacher/courses') || path.includes('/teacher/exercise')

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClassChoose = (uuid:string) => {
        const find = data?.find((item) => item.uuid === uuid)
        if(find) {
            setSelectedGroup(find)
            setClassesChoosed(find)
            setStudentChoosed(null)
        }
    }

    const handleStudentChoose = (studentChoosed:number) => {
        const findClass = data?.find((item) => item.title === classChoosed?.title)
        const findUser = findClass?.students.find((user) => user.id === studentChoosed)
        if(findUser) {
            setStudentChoosed(findUser)
        }
    }
  
    return (
        <AppBar position="fixed">
            <Toolbar style={{paddingRight:'0px'}}>
                <Box className="linear">
                    <Typography variant='h6' style={{minHeight:'32px', cursor:'pointer',fontWeight:800}} onClick={() => router.push('/teacher/courses')}>{mainCourse?.name ?? 'לא נבחר עדיין קורס'}</Typography>
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
                <Box sx={{ml:'10px'}}>
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
                        <IconButton onClick={() => router.push(TeacherURLS.CLASSES_MISSIONS)}>
                            <Image src={'/images/teacher/list.svg'} alt='' width={40} height={40}/>
                        </IconButton>
                    </Tooltip>   
        
                </Box>
                <Box sx={{display:'flex', gap:'20px'}}>
                    <Select
                        sx={{bgcolor:'#F0FBFF', minWidth:'150px', height:'35px'}}
                        value={classChoosed?.uuid}
                        onChange={(e) => handleClassChoose(e.target.value)}
                        autoWidth
                    >
                        {data && Array.isArray(data) &&  data?.map((item,index) => 
                            <MenuItem sx={{minWidth:'150px'}} key={index} value={item.uuid}>{item.title}</MenuItem>
                        )}
                    </Select>
                    <Select
                        sx={{bgcolor:'#F0FBFF', minWidth:'150px', height:'35px'}}
                        value={studentChoosed?.id}
                        onChange={(e) => handleStudentChoose(+e.target.value)}
                        autoWidth
                    >
                        {groupSelected?.students?.map((item,index) =>
                            <MenuItem key={index} value={item.id} sx={{minWidth:'150px'}}>{item.firstName}</MenuItem>
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