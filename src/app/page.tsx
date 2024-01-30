import { Grid,Box } from '@mui/material'
import RightLayOut from '@/modules/auth/components/RightLayOut'
import ChoosePage from '@/modules/auth/components/ChoosePage'
export default function Home() {
  return (
    <Grid container spacing={0}>
        <Grid item xs={6}>
            <RightLayOut/>
        </Grid>
        <Grid item xs={6}>
            <Box sx={{background:'white', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <ChoosePage/>
            </Box>
        </Grid>
    </Grid>
  )
}
