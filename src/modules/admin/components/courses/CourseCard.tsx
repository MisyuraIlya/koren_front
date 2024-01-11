'use client'
import React, {FC, useState} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import Image from 'next/image';
import Heading from '@/components/heading/Heading';
import SubHeading from '@/components/heading/SubHeading';
import { useRouter } from 'next/navigation';
interface CourseCardProps {
    item: ICourse
}

type CourseForm = {
    name: string,
    grade: string
};


const CourseCard:FC<CourseCardProps> = ({item}) => {
    const [checked, setChecked] = useState(item.published)
    const [editMode, setEditMode] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<CourseForm>();
    const isNew = false
    const router = useRouter()
    return (
        <div className={`rounded-md relative ${editMode ? 'editMode' : ''} relative ${isNew ? 'bg-white' : 'bg-cardBg/10'} myShadowCard cursor-pointer `} style={{height:'300px', width:'300px'}} onClick={() => router.push(`/admin/courses/${item.id}`)}>
            {editMode && <span className='absolute m-4 text-white' onClick={() => setEditMode(false)}>X</span>}
            <div className='text-center h-full flex justify-center items-center'>
                {item.image &&
                <div className='absolute h-full w-full'>
                    <Image src={process.env.SERVER_URL + "/" + item.image} alt='image' width={300} height={100}  />            
                </div>    
                }
                <div className='relative'>
                    {
                        !isNew ?
                            <>
                                {editMode ? 
                                    <>
                                        <form>
                                            <input {...register("grade")} type='text' placeholder='כיתה' className='px-2 rounded-md py-2 m-1 text-black'/>
                                            <input {...register("name")} type='text' placeholder='שם הקורס' className='px-2 rounded-md py-2 m-1 text-black' />
                                        </form>
                                    </>
                                :
                                <>
                                    <div className='bg-white rounded-full cursor-pointer flex justify-center p-4' >
                                    <Image src={`/images/draw.svg`} width={15} height={15} alt='draw' />
                                    </div>
                                    <SubHeading>{item.grade}</SubHeading>
                                    <Heading className='text-xl'>{item.name}</Heading>
                                    {/* Hidden file input */}
                                    {/* <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} /> */}
                                </>
                                }

                            </>
                        :

                        <>
                            {/* <div className='bg-gray p-8 rounded-full' onClick={() => handleCourse()}>
                                <Image src={'/images/+.svg'} width={19} height={15} alt='+'/>
                            </div> */}
                        </>

                    }

                </div>
            </div>
            {
                !isNew ?
                <div className={`bg-cardBg/90 absolute rounded-b-md bottom-0 w-full flex text-center items-center justify-center py-1 h-16`}>
                    {editMode ? 
                        <>
                            <div className='flex gap-12'>
                                <div>
                                    {/* <button className='bg-primary text-white mt-2 px-4 py-2 rounded-lg' type='submit' onClick={handleSubmit(onSubmit)}>שמירה</button> */}
                                </div>
                                <div>
                                    <button className='bg-primary text-white mt-2 px-4 py-2 rounded-lg' type='submit' onClick={() => setEditMode(false)}>ביטול</button>
                                </div>
                            </div>
                        </>
                
                    :
                        <>
                            <div className='grid grid-cols-12 w-full mr-5 mt-2 mb-2'>
                                <div className={`col-span-8 flex gap-4`}>
                                    <div className='bg-white rounded-full cursor-pointer flex justify-center p-4' onClick={() => setEditMode(!editMode)}>
                                        <Image src={`/images/draw.svg`} width={15} height={15} alt='draw'/>
                                    </div>
                                    {/* <div className='bg-white rounded-full  cursor-pointer flex justify-center p-4' onClick={() => handleRemoveCourse()}>
                                        <Image src={'/images/trash.svg'} width={19} height={15} alt='draw'/>
                                    </div> */}
                                </div>
                                <div className='col-span-4 items-center flex justify-center'>
                                    {/* <Switch onChange={handleChange} checked={checked} /> */}
                                </div>
                            </div>
                        </>
                    }

                </div>
                :
                <div className={`bg-gray absolute rounded-b-md bottom-0 w-full flex text-center items-center justify-center py-1 h-16`}>

                </div>    

            }

        </div>
    );
};

export default CourseCard;