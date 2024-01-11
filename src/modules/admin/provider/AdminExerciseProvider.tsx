// Global
"use client";
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useAdmin } from '../store/admin.store';
import { usePathname, useSearchParams } from 'next/navigation';
import { useForm,UseFormRegister, UseFormHandleSubmit, UseFormSetValue, Control } from "react-hook-form";

interface AdminContextType {
    exercise: IExercise
    register: UseFormRegister<IExercise>
    handleSubmit: UseFormHandleSubmit<IExercise, undefined>
    setValue: UseFormSetValue<IExercise>
    control: Control<IExercise, any>
}

const AdminContext = createContext<AdminContextType | null>(null);

// React hook
const useAdminExerciseProvider = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('Can not run without "AdminExerciseProvider"');
  }
  return context;
};

interface AdminExerciseProviderProps {
  exercise: IExercise
  children: ReactNode
  courseId: string
};

const AdminExerciseProvider: React.FC<AdminExerciseProviderProps> = (props) => {
  const [exercise, setExercise] = useState<IExercise>(props.exercise)
  const [isOnlineExercise, setIsOnlineExercise] = useState<boolean>(false)
  const { register, handleSubmit, reset ,watch, formState: { errors } , setValue, control} = useForm<IExercise>();

  const uploadXl = () => {

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
  },[exercise,])


  const value: AdminContextType = {
    exercise,
    register,
    handleSubmit,
    setValue,
    control
  };

  return <AdminContext.Provider value={value} {...props} />;
};

export { useAdminExerciseProvider, AdminExerciseProvider };