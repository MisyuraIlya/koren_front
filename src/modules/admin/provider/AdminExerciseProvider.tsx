// Global
"use client";
import React, { createContext, useContext, ReactNode, useEffect, useState, ChangeEvent } from 'react';
import { useAdmin } from '../store/admin.store';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { useForm,UseFormRegister, UseFormHandleSubmit, UseFormSetValue, Control } from "react-hook-form";
import { onAsk } from '@/utils/sweetAlert';
import { AdminExerciseService } from '../services/adminExercise.service';
import useSWR from 'swr';
import { AdminCourseService } from '../services/adminCourse.service';
import { PdfUtilitiesService } from '../services/adminPdfUtilities';
interface AdminContextType {
    exercise: IExercise | undefined
    isLoading: boolean
    loading: boolean
    register: UseFormRegister<IExercise>
    setValue: UseFormSetValue<any>
    control: Control<IExercise, any>
    uploadXl: () => void
    deleteExercise: (id: string) => void
    setFileChoosed: (data: File | null) => void
    choosedTab: number
    setChoosedTab: (value: number) => void
    updateExercise: (id:string, obj: IUpdateExerciseDto) => void
    updateCourse: (id:string, obj: IUpdateCourseDto) => void
    createPdfUtilities: (id: string, obj: ICreatePdfUtility) => void
    deletePdfUtilities: (id:string | number) => void
}

const AdminContext = createContext<AdminContextType | null>(null);

// React hook
const useAdminExercise = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('Can not run without "AdminExerciseProvider"');
  }
  return context;
};

interface AdminExerciseProviderProps {
  children: ReactNode
  courseId: string
};

const AdminExerciseProvider: React.FC<AdminExerciseProviderProps> = (props) => {
  const {type} = useParams()
  const [choosedTab, setChoosedTab] = useState<number>(0)
  const [fileChoosed, setFileChoosed] = useState<File | null>()
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset ,watch, formState: { errors } , setValue, control} = useForm<IExercise>();
  
  const { data: exercise, isLoading, error, mutate } = useSWR<IExercise>(
    `http://localhost:4001/exercise/${type}`,
    () => AdminExerciseService.GetExercise(type as string),
    {
      revalidateOnFocus: false,
    }
  );
  
  const uploadXl = async () => {
    if(fileChoosed){
      const reponse = await AdminExerciseService.uploadExercise(fileChoosed)
      mutate(reponse, false)
    }
  }

  const deleteExercise = async (id: string) => {
    const ask = await onAsk('בטוח למחוק תרגיל זה?','')
    if(ask){
      AdminExerciseService.DeleteExercise(id)
      const exercise = {
        title: 'as',
        description1: '',
        description2: '',
        courseId: 0,
        module: 4,
        youtubeLink: '',
        pdf: '',
        isInTheBook: false, 
        tabs: [],
    };
      // mutate(exercise, false)
    }
  }

  const createExercise = async (data: any) => {
    try {
      setLoading(true)
      const response = await AdminExerciseService.createExercise(data)
      if(response?.id){
        setTimeout(() => {
          mutate()
        },3000)
      }
    } catch(e) {
      console.log('e',e)
    } finally {
      setLoading(false)
    }
    
  }

  const updateExercise = async (id: string, obj: IUpdateExerciseDto) => {
    try {
      setLoading(true)
      const response = await AdminExerciseService.updateExercise(id, obj)
      if(response?.id){
        setTimeout(() => {
          mutate()
        },3000)
      }
    } catch(e) {
      console.log('e',e)
    } finally {
      setLoading(false)
    }
  }

  const updateCourse = async (id: string, obj: IUpdateCourseDto) => {
    try {
      setLoading(true)
      const response = await AdminCourseService.UpdateCourse(id, obj)
      if(response?.id){
        setTimeout(() => {
          mutate()
        },3000)
      }
    } catch(e) {
      console.log('e',e)
    } finally {
      setLoading(false)
    }
  }

  const createPdfUtilities = async (id: string, obj: ICreatePdfUtility) => {
    try {
      setLoading(true)
      const response = await PdfUtilitiesService.create(id,obj);
      if(response?.id){
        setTimeout(() => {
          mutate()
        },3000)
      }
    } catch(e) {
      console.log('[ERROR]',e)
    } finally {
      setLoading(false)
    }
  }

  const deletePdfUtilities = async (id:string | number) => {
    try {
      setLoading(true)
      const response = await PdfUtilitiesService.delete(id);
      setTimeout(() => {
        mutate()
      },3000)
    } catch(e) {
      console.log('[ERROR]',e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(exercise){
      setValue(`title`,exercise.title);
      setValue(`description1`,exercise.description1);
      setValue(`description2`, exercise.description2);
      setValue('courseId', +props.courseId); 
      setValue(`module`, exercise.module);
      setValue(`youtubeLink`, exercise.youtubeLink);
      setValue(`isInTheBook`, exercise.isInTheBook);
      setValue(`pdf`, exercise.pdf);
    }
  },[exercise])


  const value: AdminContextType = {
    exercise,
    isLoading,
    loading,
    register,
    setValue,
    control,
    uploadXl,
    deleteExercise,
    setFileChoosed,
    choosedTab,
    setChoosedTab,
    updateExercise,
    updateCourse,
    createPdfUtilities,
    deletePdfUtilities
  };

  return (
  <AdminContext.Provider value={value} > 
    <form onSubmit={handleSubmit(createExercise)}>
      {props.children}
    </form>
  </AdminContext.Provider>
  );
};

export { useAdminExercise, AdminExerciseProvider };