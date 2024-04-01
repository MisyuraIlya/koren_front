"use client"
import TeacherLayout from "@/modules/teacher/components/layout/TeacherLayout";
import SideBar from "@/modules/teacher/components/SideBar";
import { TeacherCoursesProvider } from "@/modules/teacher/provider/TeacherCoursesProvider";
import { Box, Collapse, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Box sx={{ flex: 1, marginTop:'20px' }}>
        <Grid container spacing={2} sx={{height: '100%' }}>
            <Grid item xs={3} sx={{ background: '#F6F8FC', height: '100%' }}>
              <Box sx={{width:'100%', position:'fixed'}}>
                <List
                  sx={{ width: '100%', maxWidth: 400, bgcolor: '#F6F8FC' }}
                  component="nav"
                  subheader={
                      <ListSubheader component="div" sx={{color:'#002536', bgcolor: '#F6F8FC', marginBottom:'30px'}}>
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
            <Grid item xs={9} sx={{ background: 'white', height: '100%'}}>
                {children}
            </Grid>
        </Grid>
    </Box>
    </>
  );
}
