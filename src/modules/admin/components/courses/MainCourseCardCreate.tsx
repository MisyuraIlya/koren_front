import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useAdminCoursesProvider } from '../../provider/AdminCoursesProvider';

type CourseForm = {
    name: string,
    grade: string
};

const MainCourseCardCreate = () => {
    const [editMode, setEditMode] = useState(false)
    const { register, handleSubmit, reset ,formState: { errors } } = useForm<CourseForm>();
    const {createCourse} = useAdminCoursesProvider()

    const onSubmit = (data: CourseForm) => {
        createCourse({name:data.name, grade: data.grade, level:1, parentId:null})
        // setEditMode(false)
        
    }

    return (
        <div className={`bg-white myShadowCard w-[300px] h-[300px] relative  ${editMode && 'editMode'}`}>
            {editMode &&
                <div className='float-left m-4'>
                    <CloseIcon sx={{color:'white', cursor:'pointer'}} onClick={() => setEditMode(false)}/>        
                </div>
            }
            {editMode ?
            <div className='absolute top-20'>
                <div className='text-center h-full flex justify-center items-center'>
                    <form>
                        <input {...register("grade")} type='text' placeholder='כיתה' className='px-2 rounded-md py-2 m-1 text-black'/>
                        <input {...register("name")} type='text' placeholder='שם הקורס' className='px-2 rounded-md py-2 m-1 text-black' />
                    </form>
                </div>
            </div>
            : 
            <div className='text-center h-full flex justify-center items-center' onClick={() => setEditMode(!editMode)}>
                <div className='bg-gray p-8 rounded-full'>
                    <Image src={'/images/+.svg'} width={19} height={15} alt='+'/>
                </div>
            </div>
            }

            <div className={`bg-gray absolute rounded-b-md bottom-0 w-full flex text-center items-center justify-center py-1 h-16`}>
                {editMode &&
                <div className='flex gap-12'>
                    <Button variant='contained' onClick={handleSubmit(onSubmit)}>שמירה</Button>
                    <Button variant='contained' onClick={() => setEditMode(false)}>ביטול</Button>
                </div>
                }
            </div>      
        </div>
    );
};

export default MainCourseCardCreate;