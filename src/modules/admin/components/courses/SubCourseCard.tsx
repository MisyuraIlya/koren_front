'use client'
import React, { ChangeEvent, FC, useRef, useState } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from "react-hook-form";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useAdminCoursesProvider } from '../../provider/AdminCoursesProvider';
import PdfHandler from './PdfHandler';
interface SubCourseCardProps {
    item: ICourse
}

type Inputs = {
    name: string,
};


const SubCourseCard:FC<SubCourseCardProps> = ({item}) => {
    const [editMode, setEditMode] = useState(false)
    const {updateName} = useAdminCoursesProvider()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const {lvl1Id,lvl2Id,lvl3Id, lvl4Id, deleteCourse} = useAdminCoursesProvider()
    const pathname = usePathname()
    const splitedPathanem = pathname?.split('/')
    const isActive = splitedPathanem?.includes(item?.id!.toString());
    const router = useRouter()

    const handleChoose = () => {
        if(item.level === 2){
            router.replace(`/admin/courses/${lvl1Id}/${item.id}`, {scroll: false})
        } else if (item.level === 3) {
            router.replace(`/admin/courses/${lvl1Id}/${lvl2Id}/${item.id}`, {scroll: false})
        } else if (item.level === 4) {
            router.replace(`/admin/courses/${lvl1Id}/${lvl2Id}/${lvl3Id}/${item.id}`, {scroll: false})
        } else if (item.level === 5) {
            router.replace(`/admin/courses/${lvl1Id}/${lvl2Id}/${lvl3Id}/${lvl4Id}/${item.id}`, {scroll: false})
        } 
    }

    const onSubmit = (e:Inputs) => {
        updateName(item.id!.toString(),e.name)
        setEditMode(false)
    }
    return (
        <div className={`border-t border-gray cardHover ${isActive ? 'clickedCard' : ''}`}>
            <div className='flex py-2 m-auto px-4 '>
                <div className='w-full flex items-center cursor-pointer' 
                onClick={() => handleChoose()} 
                >
                    <p>{item.name}</p>
                </div>
                <div className='flex gap-2 '>
                    {item.level === 4 &&
                        <PdfHandler item={item}/>
                    }
                    {
                        item.level === 5 &&
                        <div className=' border border-black rounded-full flex justify-center w-12 h-12 hover:bg-white'>
                            <Image src={'/images/eye.svg'} width={30} height={30} priority alt='trash' className=' cursor-pointer rounded-lg p-1' onClick={() => router.replace(`/admin/exercise/${item.id}`)}/>
                        </div>
                    }      
                    <div className='border border-black rounded-full flex justify-center w-12 h-12 hover:bg-white'> 
                        <Image src={'/images/draw.svg'} width={25} height={2} priority alt='draw' className=' cursor-pointer rounded-lg p-1' onClick={() => setEditMode(!editMode)}/>
                    </div>  
                    <div className='border border-black rounded-full flex justify-center w-12 h-12 hover:bg-white'>
                        <Image src={'/images/trash.svg'} width={25} height={25} priority alt='trash' className=' cursor-pointer rounded-lg p-1'
                        onClick={() => deleteCourse(item.id!?.toString())}
                        />
                    </div>    

                </div>    
            </div>  
            {editMode &&
            <form className='flex pt-4 m-auto px-4 py-4'>
                <div className='w-full flex items-center'>
                    <input {...register("name")} type='text' placeholder='עריכה' className='border border-gray p-2 rounded-md'  defaultValue={item.name}/>
                </div>
                <div className='flex gap-2 justify-end'>
                    <div className=' rounded-full flex justify-center w-12 h-12' style={{backgroundColor:'#31B0F2'}} 
                    onClick={handleSubmit(onSubmit)}
                    > 
                        <Image src={'/images/vWhite.svg'} width={25} height={25} priority alt='draw' className=' cursor-pointer rounded-lg p-1' />
                    </div>  
                    <div className=' rounded-full flex justify-center w-12 h-12' style={{backgroundColor:'rgba(49, 176, 242, 0.3)'}}>
                        <Image src={'/images/xBlue.svg'} width={25} height={25} priority alt='trash' className=' cursor-pointer rounded-lg p-1' onClick={() => setEditMode(false)}/>
                    </div>
 
                </div>  
            </form>  
            } 
        </div>
    );
};

export default SubCourseCard;