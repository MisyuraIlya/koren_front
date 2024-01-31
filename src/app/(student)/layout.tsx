"use client"
import { Box, Grid } from "@mui/material";
import Student from "@/modules/student";
import { StudentCoursesProvider } from "@/modules/student/provider/StudentCoursesProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StudentCoursesProvider>
        <Box >
            <Student.Header/>
            <Grid container spacing={2}>
              <Grid item xs={2} sx={{position:'relative'}}>
                <Student.SideBar/>
              </Grid>
              <Grid item xs={10} sx={{marginTop:'120px'}}>
                {children}
              </Grid>
            </Grid>
          </Box>
      </StudentCoursesProvider>
    </>
  );
}
