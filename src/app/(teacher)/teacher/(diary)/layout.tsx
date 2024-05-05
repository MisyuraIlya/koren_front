"use client"
import TeacherLayout from "@/modules/teacher/components/layout/TeacherLayout";
import SideBar from "@/modules/teacher/components/SideBar";
import { TeacherCoursesProvider } from "@/modules/teacher/provider/TeacherCoursesProvider";
import { Box, Collapse, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ListStudents from "@/modules/teacher/components/diary/ListStudents";
import { useDiratyStore } from "@/modules/teacher/store/diary.store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const {openStudents,setOpenStudents, connectionGroup} = useDiratyStore()
  return (
    <>
    <Box sx={{ flex: 1}}>
        <Grid container spacing={0} sx={{height: '100%' }}>
            <Grid item xs={2.5} sx={{ background: '#F6F8FC', height: '100%' }}>
              <Box sx={{width:'100%', position:'fixed'}}>
                <List
                  sx={{ width: '100%', maxWidth: '400px', bgcolor: '#F6F8FC' }}
                  component="nav"
                  subheader={
                      <ListSubheader component="div" sx={{color:'#002536', bgcolor: 'white', marginBottom:'30px', height:'75px',display:'flex', gap:'10px', alignItems:'center'}}>
                          <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
                              <Typography variant='h4' sx={{fontWeight:700, fontSize:'20px'}}>יומן המורה</Typography>
                          </Box>
                      </ListSubheader>
                  }
                  >
                      <ListItem>
                          <ListItemButton sx={{background:'white', border:'1px solid #D1E1E7', borderRadius:'10px'}}>
                              <ListItemText primary="בנק המשובים"  sx={{pl:'10px'}}/>
                              <ListItemIcon>
                                <ArrowBackIosIcon/>
                              </ListItemIcon>
                          </ListItemButton>
                      </ListItem>
                      <ListItem>
                          <ListItemButton sx={{background:'white', border:'1px solid #D1E1E7', borderRadius:'10px'}}>
                              <ListItemText primary="ממתין לבדיקה"  sx={{pl:'10px'}}/>
                              <ListItemIcon>
                                <ArrowBackIosIcon/>
                              </ListItemIcon>
                          </ListItemButton>
                      </ListItem>
                      <ListItem>
                          <ListItemButton sx={{background:'white', border:'1px solid #D1E1E7', borderRadius:'10px'}}>
                              <ListItemText primary="תיקיית מבחנים"  sx={{pl:'10px'}}/>
                              <ListItemIcon>
                                <ArrowBackIosIcon/>
                              </ListItemIcon>
                          </ListItemButton>
                      </ListItem>
                      <ListItem>
                          <ListItemButton sx={{background:'white', border:'1px solid #D1E1E7', borderRadius:'10px'}}>
                              <ListItemText primary="תיקייה אישית למורה"  sx={{pl:'10px'}}/>
                              <ListItemIcon>
                                <ArrowBackIosIcon/>
                              </ListItemIcon>
                          </ListItemButton>
                      </ListItem>
                      <ListItem>
                          <ListItemButton sx={{background:'white', border:'1px solid #D1E1E7', borderRadius:'10px'}}>
                              <ListItemText primary='ספריית "שרי"'  sx={{pl:'10px'}}/>
                              <ListItemIcon>
                                <ArrowBackIosIcon/>
                              </ListItemIcon>
                          </ListItemButton>
                      </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={9.5} sx={{ background: 'white', height: '100%', borderLeft:'1px solid #DCDDDE', display:'flex'}}>
                {children}
                {connectionGroup &&
                  <ListStudents open={openStudents} setOpen={setOpenStudents} elemnt={connectionGroup}/>
                }
            </Grid>
        </Grid>
    </Box>
    </>
  );
}
