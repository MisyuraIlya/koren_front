"use client"
import { Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { themeColors } from "@/styles/mui";
import { usePathname, useRouter } from "next/navigation";
import { TeacherURLS } from "@/enums/urls";


const nav = [
  {
    name:'משימות כיתתיות',
    link:TeacherURLS.CLASSES_MISSIONS,
  },
  {
    name:'ממתין לבדיקה',
    link:TeacherURLS.TO_CHECK,
  },
  {
    name:'הוחזר לתיקון',
    link:TeacherURLS.RESTORE,
  },
  {
    name:'בתהליך עבודה',
    link:TeacherURLS.IN_PROCESS,
  },
  {
    name:'באיחור הגשה',
    link:TeacherURLS.LATE_SUBMISSION,
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const location = usePathname()
  const {push} = useRouter()

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
                    {nav?.map((item,index) =>
                      <ListItem key={index}>
                          <ListItemButton 
                            sx={{
                                background:location === item.link ? themeColors.primary : 'white',
                                color: location === item.link ? 'white': themeColors.primary,
                                border:'1px solid #D1E1E7', 
                                borderRadius:'10px'
                              }}
                              onClick={() => push(item.link)}
                          >
                              <ListItemText primary={item.name}  sx={{pl:'10px'}}/>
                              <ListItemIcon>
                                <ArrowBackIosIcon sx={{color: location === item.link ? 'white': themeColors.primary}}/>
                              </ListItemIcon>
                          </ListItemButton>
                      </ListItem>
                    )}
                </List>
              </Box>
            </Grid>
            <Grid item xs={9.5} sx={{ background: 'white', height: '100%', borderLeft:'1px solid #DCDDDE', display:'flex'}}>
                {children}
            </Grid>
        </Grid>
    </Box>
    </>
  );
}
