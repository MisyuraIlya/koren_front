import { TeacherURLS } from '@/enums/urls';
import useDataTeacherGroups from '@/hooks/useDataTeacherGroups';
import { useTeacherWork } from '@/store/work.store';
import { Badge, Box, IconButton, MenuItem, Select, Tooltip } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const TeacherBar = () => {
    const router = useRouter()
    const {setClassesChoosed, setStudentChoosed, studentChoosed, classChoosed, groupSelected, setSelectedGroup, setSendType} = useTeacherWork()
    const {data} = useDataTeacherGroups()

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
        const findClass = data?.find((item) => item.title === classChoosed?.title)
        const findUser = findClass?.students.find((user) => user.id === studentChoosed)
        if(findUser) {
            setStudentChoosed(findUser)
        }
    }

    useEffect(() => {
        // this useffect needs to render the selectboxes when changed from diary 
    }, [classChoosed, studentChoosed]);

    return (
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
                    <Badge badgeContent={4} color="secondary">
                        <IconButton onClick={() => router.push('/teacher/mailbox')}>
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
    );
};

export default TeacherBar;