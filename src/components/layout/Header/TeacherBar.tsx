import { TeacherURLS } from '@/enums/urls';
import useDataTeacherGroups from '@/hooks/useDataTeacherGroups';
import useDataUnreadedMails from '@/hooks/useDataUnreadedMails';
import { useTeacherWork } from '@/store/work.store';
import { Avatar, Badge, Box, Button, IconButton, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Select, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { useAuth } from '@/modules/auth/store/auth.store';
import { useGlobalCourses } from '@/store/globalCourses';
const TeacherBar = () => {
    const { user } = useAuth()
    const router = useRouter()
    const {setClassesChoosed, setStudentChoosed, studentChoosed, classChoosed, groupSelected, setSelectedGroup, setSendType} = useTeacherWork()
    const {data} = useDataTeacherGroups()
    const {data: dataMail } = useDataUnreadedMails()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const {mainCourse} = useGlobalCourses()

    const handleClassChoose = (uuid:string) => {
        const find = data?.find((item) => item.uuid === uuid)
        if(find) {
            setSelectedGroup(find)
            setClassesChoosed(find)
            setStudentChoosed(null)
            setSendType(find.connection.exerciseType?.title as sendExerciseType)
        }
    }

    const handleStudentChoose = (studentChoosed:number) => {
        console.log('studentChoosed',studentChoosed)
        const findClass = data?.find((item) => item.title === classChoosed?.title)
        console.log('findClass',findClass)
        const findUser = findClass?.students.find((user) => user.id === studentChoosed)
        console.log('findUser',findUser)
        if(findUser) {
            setStudentChoosed(findUser)
        }
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLink = (uuid: string) => {
        if(user?.role === 'student'){
            router.push(`/student/mailbox/${uuid}`)
        }

        if(user?.role === 'teacher'){
            router.push(`/teacher/mailbox/${uuid}`)
        }
    }

    const handleToMail = () => {
        if(user?.role === 'student'){
            router.push(`/student/mailbox`)
        }

        if(user?.role === 'teacher'){
            router.push(`/teacher/mailbox`)
        }
    }

    useEffect(() => {
        // this useffect needs to render the selectboxes when changed from diary 
    }, [classChoosed, studentChoosed]);

    return (
        <>
        <Box sx={{display:'flex', alignItems:'center', height:'100%', justifyContent:'space-between'}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Tooltip title="עמוד בית">
                    <IconButton onClick={() => router.push('/teacher/courses')}>
                        <Image src={'/images/teacher/home.svg'} alt='' width={30} height={30}/>
                    </IconButton>
                </Tooltip>   

                <Tooltip title="מעקב התקדמות כיתתית">
                    <IconButton onClick={() => router.push(TeacherURLS.CLASSES_MISSIONS)}>
                        <Image src={'/images/teacher/doc.svg'} alt='' width={30} height={30}/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="גיליון ציונים">
                    <IconButton onClick={() => router.push(`/teacher/grades/${mainCourse?.id}/0/0/0/0`)}>
                        <Image src={'/images/teacher/giul.svg'} alt='' width={30} height={30}/>
                    </IconButton>
                </Tooltip> 

                <Tooltip title="קבוצות למידה">
                    <IconButton onClick={() => router.push('/teacher/classes')}>
                        <Image src={'/images/teacher/look.svg'} alt='' width={40} height={40}/>
                    </IconButton>
                </Tooltip> 

                <Tooltip title="יומן המורה">
                    <IconButton  onClick={() => router.push('/teacher/classProgress')}>
                        <Image src={'/images/teacher/list.svg'} alt='' width={40} height={40}/>
                    </IconButton>
                </Tooltip>   
                <Box sx={{display:'flex', gap:'10px', mt:'5px'}}>
                    <Select
                        sx={{bgcolor:'#F0FBFF', minWidth:'150px', height:'35px'}}
                        value={classChoosed?.uuid ?? ''}
                        onChange={(e) => handleClassChoose(e.target.value)}
                        autoWidth
                    >
                        {data && Array.isArray(data) &&  data?.map((item,index) => 
                            <MenuItem sx={{minWidth:'150px'}} key={index} value={item.uuid}>{item.title}</MenuItem>
                        )}
                    </Select>
                    <Select
                        sx={{bgcolor:'#F0FBFF', minWidth:'150px', height:'35px'}}
                        value={studentChoosed?.id ?? ''}
                        onChange={(e) => handleStudentChoose(+e.target.value)}
                        autoWidth
                    >
                        {groupSelected?.students?.map((item,index) =>
                            <MenuItem key={index} value={item.id} sx={{minWidth:'150px'}}>{item.firstName}</MenuItem>
                        )}
                    </Select>
                </Box>
            </Box>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Tooltip title="הודעות">
                    <Badge badgeContent={dataMail?.length} color="secondary">
                        <IconButton onClick={() => handleToMail()} id="fade-button" >
                            <Image src={'/images/teacher/messages.svg'} alt='' width={30} height={30}/>
                        </IconButton>
                    </Badge>
                </Tooltip>

                <Tooltip title="צאט">
                    <IconButton >
                        <Image src={'/images/teacher/forum.svg'} alt='' width={30} height={30}/>
                    </IconButton>
                </Tooltip>
            </Box>
        </Box> 
        </>
 
    );
};

export default TeacherBar;