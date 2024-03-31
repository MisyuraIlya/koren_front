'use client'
import React from 'react';
import { Box, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/navigation';
import { useGroups } from '../store/groups.store';

const SideBar = () => {
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const {setTypeMixed} = useGroups()
    const router = useRouter();

    const handleClick = () => {
      setOpen1(!open1);
    };

    const handleClick2= () => {
        setOpen2(!open2);
    };

    
    return (
        <Box sx={{width:'100%', position:'fixed'}}>
            <List
            sx={{ width: '100%', maxWidth: 400, bgcolor: '#F6F8FC' }}
            component="nav"
            subheader={
                <ListSubheader component="div" sx={{color:'#0172E8', bgcolor: '#F6F8FC', marginBottom:'30px'}}>
                    <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                        <NavigateNextIcon/>
                        <Typography variant='h6' sx={{fontWeight:700, fontSize:'14px'}}> חזרה לעמוד הראשי</Typography>
                    </Box>
                </ListSubheader>
            }
            >
                <ListItem>
                    <ListItemButton onClick={() => router.push('/teacher/classes')} sx={{padding:'15px 30px', background:'white', border:'1px solid #D1E1E7', borderRadius:'10px'}}>
                        <ListItemIcon>
                            <Image src={'/images/teacher/computer.svg'} width={30} height={30} alt='computer' />
                        </ListItemIcon>
                        <ListItemText primary="יצירת כיתות הלימוד שלי" />
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <Box sx={{width:'100%'}}>
                        <ListItemButton onClick={handleClick} sx={{padding:'15px 30px', background:'white', border:'1px solid #D1E1E7', borderRadius:'10px'}}>
                            <ListItemIcon>
                                <Image src={'/images/teacher/group.svg'} width={30} height={30} alt='computer' />
                            </ListItemIcon>
                            <ListItemText primary="יצירת קבוצות הלמידה שלי" />
                            {open1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open1} timeout="auto" unmountOnExit sx={{background:'white', border:'1px solid #D1E1E7', borderBottomRightRadius:'10px', borderBottomLeftRadius:'10px'}}>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 9 }} onClick={() => router.push('/teacher/groups/support')}>
                                    <ListItemText primary="יצירת קבוצות למידה לתגבור" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 9 }} onClick={() => {router.push('/teacher/groups/mixedTeacher'); setTypeMixed(1)}}>
                                    <ListItemText primary="יצירת קבוצות לימוד מכיתת אם אחת" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 9 }} onClick={() => {router.push('/teacher/groups/mixedTeacher'); setTypeMixed(2)}}>
                                    <ListItemText primary="יצירת כיתות לימוד עם שני מורים" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </Box>
                </ListItem>

                <ListItem>
                    <Box sx={{width:'100%'}}>
                        <ListItemButton onClick={handleClick2} sx={{padding:'15px 30px', background:'white', border:'1px solid #D1E1E7', borderRadius:'10px'}}>
                            <ListItemIcon>
                                <Image src={'/images/teacher/edit.svg'} width={30} height={30} alt='computer' />
                            </ListItemIcon>
                            <ListItemText primary="עריכת כיתות וקבוצות הלמידה שלי" />
                            {open2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open2} timeout="auto" unmountOnExit sx={{background:'white', border:'1px solid #D1E1E7', borderBottomRightRadius:'10px', borderBottomLeftRadius:'10px'}}>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 9 }}>
                                    <ListItemText primary="עריכת כיתות הלימוד שלי" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 9 }}>
                                    <ListItemText primary="עריכת התלמידים" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </Box>
                </ListItem>

                <ListItem>
                    <ListItemButton sx={{padding:'15px 30px', background:'white', border:'1px solid #D1E1E7', borderRadius:'10px'}}>
                        <ListItemIcon>
                            <Image src={'/images/teacher/eye.svg'} width={30} height={30} alt='computer' />
                        </ListItemIcon>
                        <ListItemText primary="יצירת כיתות הלימוד שלי" />
                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    );
};

export default SideBar;