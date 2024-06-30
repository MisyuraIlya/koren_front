"use client"
import { Box, Button, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import ModeIcon from '@mui/icons-material/Mode';
import { useMailStore } from "@/store/mail.store";
import useDataMail from "@/hooks/useDataMail";
import { useAuth } from "@/modules/auth/store/auth.store";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const {setOpen,open} = useMailStore()
  const {data} = useDataMail()
  const {user} = useAuth()
  const router = useRouter()
  const handlePush = (type: string) => {
    const role = user?.role === 'teacher' ? 'teacher' : 'student'
    if(type === 'all' ) {
        router.push(`/${role}/mailbox?page=1`)
    } else if(type === 'system') {
        router.push(`/${role}/mailbox?page=1&type=system`)
    } else if(type === 'feedBack') {
        router.push(`/${role}/mailbox?page=1&type=feedBack`)
    } else if(type === 'original') {
        router.push(`/${role}/mailbox?page=1&type=original`)
    } 
  }
  return (
    <>
      <Box sx={{ flex: 1, marginTop:'150px' }}>
        <Grid container spacing={2} sx={{height: '100%' }}>
            <Grid item xs={3} sx={{ background: '#F6F8FC', height: '100%', display:'flex', justifyContent:'center'}}>
              <Box>
                <Button sx={{background:'#1D99FF', borderRadius:'8px', display:'flex', gap:'10px', padding:'15px 10px'}} onClick={() => setOpen(!open)}>
                  <IconButton sx={{bgcolor:'#4B4C4F'}}>
                    <ModeIcon sx={{color:'white'}}/>
                  </IconButton>
                  <Typography variant="body1" color={'white'}>
                    כתיבת הודעה
                  </Typography>
                </Button> 
                <List sx={{minWidth:'300px'}}>
                  <ListItemButton onClick={() => handlePush('all')}>
                    <ListItem
                      secondaryAction={
                        <Typography variant="body1" sx={{color:'black'}}>
                          {data?.totalMessages}
                        </Typography>
                      }
                    >
                        <ListItemText
                          sx={{color:'black'}}
                          primary="כל ההודעות"
                        />
                    </ListItem>
                  </ListItemButton>
                  <ListItemButton onClick={() => handlePush('feedBack')}> 
                    <ListItem
                      secondaryAction={
                        <Typography variant="body1" sx={{color:'black'}}>
                          {data?.totalFeedBacks}
                        </Typography>
                      }
                    >
                        <ListItemText
                          sx={{color:'black'}}
                          primary="משובים"
                        />
                    </ListItem>
                  </ListItemButton>
                  <ListItemButton onClick={() => handlePush('system')}>
                    <ListItem
                      secondaryAction={
                        <Typography variant="body1" sx={{color:'black'}}>
                          {data?.totalSystem}
                        </Typography>
                      }
                    >
                        <ListItemText
                          sx={{color:'black'}}
                          primary="הודעות מערכת"
                        />
                    </ListItem>
                  </ListItemButton>
                  <ListItemButton onClick={() => handlePush('original')}>
                    <ListItem
                      secondaryAction={
                        <Typography variant="body1" sx={{color:'black'}}>
                          {data?.totalRegular}
                        </Typography>
                      }
                    >
                        <ListItemText
                          sx={{color:'black'}}
                          primary="הודעות תלמידים"
                        />
                    </ListItem>
                  </ListItemButton>
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
