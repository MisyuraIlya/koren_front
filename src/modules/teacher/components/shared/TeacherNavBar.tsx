import { Box, Tooltip, Typography } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import NavBarNavigation from '@/components/shared/NavBarNavigation';
import { useTeacherWork } from '../../store/work.store';
import { useParams } from 'next/navigation';
import { themeColors, themeSettings } from '@/styles/mui';

const TeacherNavBar = () => {
    const {classChoosed} = useTeacherWork()
    const { exercise } = useParams()
    return (
        <Box sx={{bgcolor:'#F0FBFF', height:'60px', width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 40px'}}>
            <Box sx={{width:'50%', display:'flex'}}>
                <NavBarNavigation/>
            </Box>
            {
                classChoosed && exercise && 
                <Box sx={{width:'50%', display:'flex', gap:'20px', alignItems:'center'}}>
                    <Box sx={{display:'flex', gap:'10px',bgcolor:'#CAE1EA' ,borderRadius:themeSettings.borderRadius}}>
                        <VisibilityOffIcon sx={{color:'#33363F', padding:'4px', fontSize:'30px'}}/>
                    </Box>
                    <Box sx={{display:'flex', width:'100%'}}>
                        <Tooltip title="ממתין לבדיקה">
                            <Box sx={{width:'5%', bgcolor:'#B5DEDE', height:'30px', display:'flex', alignItems:'ceter', paddingLeft:'10px'}}>
                                <Typography variant='h6' sx={{color:'white', fontWeight:'700'}}>5</Typography>
                            </Box>
                        </Tooltip>

                        <Tooltip title="ממתין לבדיקה">
                            <Box sx={{width:'10%', bgcolor:'#7198CA', height:'30px', display:'flex', alignItems:'ceter', paddingLeft:'10px'}}>
                                <Typography variant='h6' sx={{color:'white', fontWeight:'700'}}>15</Typography>
                            </Box>
                        </Tooltip>

                        <Tooltip title="ממתין לבדיקה">
                            <Box sx={{width:'5%', bgcolor:'#EAE78F', height:'30px', display:'flex', alignItems:'ceter', paddingLeft:'10px'}}>
                                <Typography variant='h6' sx={{color:'white', fontWeight:'700'}}>3</Typography>
                            </Box>
                        </Tooltip>

                        <Tooltip title="ממתין לבדיקה">
                            <Box sx={{width:'30%', bgcolor:'#B4D6D9', height:'30px', display:'flex', alignItems:'ceter', paddingLeft:'10px'}}>
                                <Typography variant='h6' sx={{color:'white', fontWeight:'700'}}>26</Typography>
                            </Box>
                        </Tooltip>

                        <Tooltip title="ממתין לבדיקה">
                            <Box sx={{width:'25%', bgcolor:'#7C9CA7', height:'30px', display:'flex', alignItems:'ceter', paddingLeft:'10px'}}>
                                <Typography variant='h6' sx={{color:'white', fontWeight:'700'}}>26</Typography>
                            </Box>
                        </Tooltip>

                        <Tooltip title="ממתין לבדיקה">
                            <Box sx={{width:'10%', bgcolor:'#388EF5', height:'30px', display:'flex', alignItems:'ceter', paddingLeft:'10px'}}>
                                <Typography variant='h6' sx={{color:'white', fontWeight:'700'}}>92</Typography>
                            </Box>
                        </Tooltip>

                        <Tooltip title="ממתין לבדיקה">
                            <Box sx={{width:'10%', bgcolor:'#FFFFFF', height:'30px', display:'flex', alignItems:'ceter', paddingLeft:'10px'}}>
                                <Typography variant='body1' sx={{color:'black', fontWeight:'400', pt:'3px', whiteSpace:'nowrap'}}>סה"כ 26</Typography>
                            </Box>
                        </Tooltip>

                    </Box>
                    <Box sx={{display:'flex', gap:"10px"}}>
                        <Typography variant='body1' sx={{color:'black', whiteSpace:'nowrap'}}>ממוצע ציונים כיתתי:</Typography>
                        <Typography variant='body1' sx={{color:'#0172E8', fontWeight:600}}>85%</Typography>
                    </Box>
                </Box>
            }

        </Box>
    );
};

export default TeacherNavBar;