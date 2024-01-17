'use client'
import React, {FC, useState} from 'react';
import { useForm } from "react-hook-form";
import Heading from '@/components/heading/Heading';
import SubHeading from '@/components/heading/SubHeading';
import { useRouter } from 'next/navigation';
import { Button, IconButton } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import CloseIcon from '@mui/icons-material/Close';
import { useAdminCoursesProvider } from '../../provider/AdminCoursesProvider';

interface MainCourseCardProps {
    item: ICourse
}

type CourseForm = {
    name: string,
    grade: string
};

const MainCourseCard:FC<MainCourseCardProps> = ({item}) => {
    const [editMode, setEditMode] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<CourseForm>();
    const {deleteCourse} = useAdminCoursesProvider()
    const router = useRouter()

    const onSubmit = () => {
    }

    return (
        <div className={`rounded-md relative ${editMode ? 'editMode' : ''} bg-cardBg/10 myShadowCard cursor-pointer h-[300px] w-[300px]`}  onClick={() => router.replace(`/admin/courses/${item.id}`)}>
            {editMode &&
                <div className='float-left m-4 absolute'>
                    <CloseIcon 
                    sx={{color:'white', cursor:'pointer'}} 
                    onClick={(e) => {
                        e.stopPropagation(); 
                        setEditMode(false);
                    }}
                    />        
                </div>
            }
            <div className='text-center h-full flex justify-center items-center'>
                <div className='relative'>
                    {editMode ?
                        <form>
                            <input {...register("grade")} defaultValue={item.grade} type='text' placeholder='כיתה' className='px-2 rounded-md py-2 m-1 text-black'/>
                            <input {...register("name")} defaultValue={item.name} type='text' placeholder='שם הקורס' className='px-2 rounded-md py-2 m-1 text-black' />
                        </form>
                    :
                        <>
                        <IconButton
                        color='primary'
                        sx={{ background: 'white' }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setEditMode(true);
                        }}
                        >
                        <ModeEditOutlineIcon />
                        </IconButton>
                        <SubHeading>{item.grade}</SubHeading>
                        <Heading className='text-xl'>{item.name}</Heading>
                        </>
                    }
                </div>
            </div>
            <div className={`bg-cardBg/90 absolute rounded-b-md bottom-0 w-full flex text-center items-center justify-center py-1 h-16`}>
                {editMode &&
                <div className='flex gap-2'>
                    <Button variant='contained' onClick={handleSubmit(onSubmit)}>שמירה</Button>
                    <Button variant='contained' onClick={() => setEditMode(false)}>ביטול</Button>
                    <Button color="error" variant='contained' onClick={() => deleteCourse(item.id!?.toString())}>מחיקה</Button>
                </div>
                }
   
            </div>    

        </div>
    );
};

export default MainCourseCard;