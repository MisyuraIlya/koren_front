import { Box, Tooltip, Typography } from '@mui/material';
import React from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTeacherWork } from '@/store/work.store';
import { useParams } from 'next/navigation';
import { themeSettings } from '@/styles/mui';
import { GroupService } from '@/services/group.service';
import useSWR from 'swr';

const TeacherContent = () => {
    const {classChoosed} = useTeacherWork()
    const { exercise } = useParams()
    let str: string | string[] = exercise;
    let lastNumber = '';

    if (typeof str === 'string') {
        let arr = str.split(',');
        lastNumber = arr?.[arr?.length - 1];
    } else {
        lastNumber = str?.[str?.length - 1];
    }

    const { data } = useSWR<IGroupStatistic>(
        `/api/group/${classChoosed?.uuid!}/${exercise}`,
        () => GroupService.getGroupStatistic(classChoosed?.uuid!, +lastNumber)
    )

    return (
        <>
            {
                classChoosed && exercise && 
                <Box sx={{width:'50%', display:'flex', gap:'20px', alignItems:'center'}}>
                    <Box sx={{display:'flex', gap:'10px',bgcolor:'#CAE1EA' ,borderRadius:themeSettings.borderRadius}}>
                        <VisibilityOffIcon sx={{color:'#33363F', padding:'4px', fontSize:'30px'}}/>
                    </Box>
                    <Box sx={{display:'flex', width:'100%'}}>
                        <Tooltip title="סהכ סיימו">
                            <Box sx={{width:'5%', bgcolor:'#B5DEDE', height:'30px', display:'flex', alignItems:'ceter', paddingLeft:'10px'}}>
                                <Typography variant='h6' sx={{color:'white', fontWeight:'700'}}>{data?.totalCompleted}</Typography>
                            </Box>
                        </Tooltip>

                        <Tooltip title="ממתין לבדיקה">
                            <Box sx={{width:'10%', bgcolor:'#7198CA', height:'30px', display:'flex', alignItems:'ceter', paddingLeft:'10px'}}>
                                <Typography variant='h6' sx={{color:'white', fontWeight:'700'}}>{data?.totalWaitingCheck}</Typography>
                            </Box>
                        </Tooltip>

                        <Tooltip title="סהכ התחילו לעבוד">
                            <Box sx={{width:'5%', bgcolor:'#EAE78F', height:'30px', display:'flex', alignItems:'ceter', paddingLeft:'10px'}}>
                                <Typography variant='h6' sx={{color:'white', fontWeight:'700'}}>{data?.totalStartWorking}</Typography>
                            </Box>
                        </Tooltip>

                        <Tooltip title="סהכ תלמידים">
                            <Box sx={{width:'40%', bgcolor:'#B4D6D9', height:'30px', display:'flex', alignItems:'ceter', paddingLeft:'10px'}}>
                                <Typography variant='h6' sx={{color:'white', fontWeight:'700'}}>{data?.totalStudent}</Typography>
                            </Box>
                        </Tooltip>
{/* 
                        <Tooltip title="ממתין לבדיקה">
                            <Box sx={{width:'25%', bgcolor:'#7C9CA7', height:'30px', display:'flex', alignItems:'ceter', paddingLeft:'10px'}}>
                                <Typography variant='h6' sx={{color:'white', fontWeight:'700'}}>{data?.}</Typography>
                            </Box>
                        </Tooltip> */}

                        {/* <Tooltip title="ממתין לבדיקה">
                            <Box sx={{width:'10%', bgcolor:'#388EF5', height:'30px', display:'flex', alignItems:'ceter', paddingLeft:'10px'}}>
                                <Typography variant='h6' sx={{color:'white', fontWeight:'700'}}>92</Typography>
                            </Box>
                        </Tooltip> */}

                        <Tooltip title="ממוצע כיתתי">
                            <Box sx={{width:'20%', bgcolor:'#FFFFFF', height:'30px', display:'flex', alignItems:'ceter', paddingLeft:'10px'}}>
                                <Typography variant='body1' sx={{color:'black', fontWeight:'400', pt:'3px', whiteSpace:'nowrap'}}>סה"כ {data?.averageGrade}</Typography>
                            </Box>
                        </Tooltip>

                    </Box>
                    <Box sx={{display:'flex', gap:"10px"}}>
                        <Typography variant='body1' sx={{color:'black', whiteSpace:'nowrap'}}>ממוצע ציונים כיתתי:</Typography>
                        <Typography variant='body1' sx={{color:'#0172E8', fontWeight:600}}>{data?.averageGrade}%</Typography>
                    </Box>
                </Box>
            }  
        </>
    );
};

export default TeacherContent;