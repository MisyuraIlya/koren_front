"use client"
import SideBar from "@/modules/teacher/components/SideBar";
import { Box, Grid } from "@mui/material";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Box sx={{ flex: 1, marginTop:'20px' }}>
        <Grid container spacing={2} sx={{height: '100%' }}>
            <Grid item xs={3} sx={{ background: '#F6F8FC', height: '100%' }}>
                <SideBar/>
            </Grid>
            <Grid item xs={9} sx={{ background: 'white', height: '100%'}}>
                {children}
            </Grid>
        </Grid>
    </Box>
    </>
  );
}
