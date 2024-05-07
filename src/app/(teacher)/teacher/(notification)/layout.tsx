"use client"
import { Box, Button, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import ModeIcon from '@mui/icons-material/Mode';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Box sx={{ flex: 1, marginTop:'20px' }}>
        <Grid container spacing={2} sx={{height: '100%' }}>
            <Grid item xs={3} sx={{ background: '#F6F8FC', height: '100%', display:'flex', justifyContent:'center'}}>
              <Box>
                <Button sx={{background:'#1D99FF', borderRadius:'8px', display:'flex', gap:'10px', padding:'15px 10px'}}>
                  <IconButton sx={{bgcolor:'#4B4C4F'}}>
                    <ModeIcon sx={{color:'white'}}/>
                  </IconButton>
                  <Typography variant="body1" color={'white'}>
                    כתיבת הודעה
                  </Typography>
                </Button> 
                <List sx={{minWidth:'300px'}}>
                  <ListItemButton>
                    <ListItem
                      secondaryAction={
                        <Typography variant="body1" sx={{color:'black'}}>
                          25
                        </Typography>
                      }
                    >
                        <ListItemText
                          sx={{color:'black'}}
                          primary="הודעות מערכת"
                        />
                    </ListItem>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItem
                      secondaryAction={
                        <Typography variant="body1" sx={{color:'black'}}>
                          12
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
