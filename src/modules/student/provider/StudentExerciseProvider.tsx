// Global
"use client";
import React, { createContext, useContext, ReactNode, useEffect, useState, ChangeEvent } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useForm,UseFormRegister, UseFormHandleSubmit, UseFormSetValue, Control } from "react-hook-form";
import { onAsk } from '@/utils/sweetAlert';
import useSWR from 'swr';
import { AdminExerciseService } from '@/modules/admin/services/adminExercise.service';

interface AdminContextType {
    exercise: IExercise | undefined
    isLoading: boolean
    closeHeaderExercise: boolean
    setCloseHeaderExerise: (value: boolean) => void
    choosedTab: number
    setChoosedTab: (value: number) => void
    register: UseFormRegister<IExercise>
    setValue: UseFormSetValue<any>
    control: Control<IExercise, any>
}

const AdminContext = createContext<AdminContextType | null>(null);

// React hook
const useStudentExercise = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('Can not run without "StudentExerciseProvider"');
  }
  return context;
};

interface StudentExerciseProviderProps {
  children: ReactNode
  courseId: string
};

const StudentExerciseProvider: React.FC<StudentExerciseProviderProps> = (props) => {
  const [choosedTab, setChoosedTab] = useState<number>(0)
  const [closeHeaderExercise, setCloseHeaderExerise] = useState<boolean>(true)
  const [fileChoosed, setFileChoosed] = useState<File | null>()
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset ,watch, formState: { errors } , setValue, control} = useForm<IExercise>();
  
  const { data: exercise, isLoading, error, mutate } = useSWR<IExercise>(
    `http://localhost:4001/exercise/${props.courseId}`,
    () => AdminExerciseService.GetExercise(props.courseId),
    {
      revalidateOnFocus: false,
    }
  );


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
    closeHeaderExercise,
    setCloseHeaderExerise,
    choosedTab,
    setChoosedTab,
    register,
    setValue,
    control,
  };

  return (
  <AdminContext.Provider value={value} > 
    <form >
      {props.children}
    </form>
  </AdminContext.Provider>
  );
};

export { useStudentExercise, StudentExerciseProvider };