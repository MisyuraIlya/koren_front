// Global
"use client";
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useAdmin } from '../store/admin.store';
import { usePathname, useSearchParams } from 'next/navigation';
import { onAsk, onErrorAlert, onSuccessAlert } from '@/utils/sweetAlert';
import { AdminCourseService } from '../services/adminCourse.service';
import useSWR from 'swr'
import { MainService } from '../services/main.service';
import { useAuth } from '@/modules/auth/store/auth.store';

interface AdminContextType {
  courses: ICourse[] | undefined
  isLoading: boolean
  lvl1Id: string | undefined
  lvl2Id: string | undefined
  lvl3Id: string | undefined
  lvl4Id: string | undefined
  lvl1IdCourses: ICourse | undefined
  lvl2IdCourses: ICourse | undefined
  lvl3IdCourses: ICourse | undefined
  lvl4IdCourses: ICourse | undefined
  deleteCourse: (id: string) => void
  createCourse: (obj: ICreateCourseDto) => void 
  uploadPdf: (id: string, file: File) => void
  updateName: (id: string, name: string) => void
}


const AdminContext = createContext<AdminContextType | null>(null);

// React hook
const useAdminCoursesProvider = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('Can not run without "AdminCoursesProvider"');
  }
  return context;
};

interface AdminCoursesProviderProps {
  children: ReactNode
};


const AdminCoursesProvider: React.FC<AdminCoursesProviderProps> = (props) => {
  const {user} = useAuth()
  const { data: courses, isLoading ,error, mutate } = useSWR(`http://localhost:4001/course`, () => AdminCourseService.GetCourses(user?.id!),
    {
      revalidateOnFocus: false, 
    }
  );
  console.log('courses',courses)
  const path = usePathname()
  const lvl1Id = path.split('/')?.[3]
  const lvl2Id = path.split('/')?.[4]
  const lvl3Id = path.split('/')?.[5]
  const lvl4Id = path.split('/')?.[6]
  const lvl1IdCourses = courses?.filter((item) => item.id === +lvl1Id)[0]
  const lvl2IdCourses = lvl1IdCourses?.children.filter((item) => item.id === +lvl2Id)[0]
  const lvl3IdCourses = lvl2IdCourses?.children.filter((item) => item.id === +lvl3Id)[0]
  const lvl4IdCourses = lvl3IdCourses?.children.filter((item) => item.id === +lvl4Id)[0]

  const deleteCourse = async (id: string) => {
    const ask = await onAsk('למחוק קורס זה?','')
    if(ask) {
      await AdminCourseService.DeleteCourse(id)
      mutate();
    }
  }

  const createCourse = async (obj: ICreateCourseDto) => {
    await AdminCourseService.CreateCourse(obj)
    mutate();
  }

  const uploadPdf = async (id: string, file: File) => {
    const filePath = await MainService.UploadMedia(file)
    if(!filePath.path) {
      onErrorAlert('שגיאה','קובץ גדול מדי')  
      return
    }
    const response = await AdminCourseService.UpdateCourse(id, {pdf: filePath.path})
    if(response?.id){
      onSuccessAlert('PDF עלה בהצלחה','')
      mutate();
    } else {
      onErrorAlert('שגיאה','')
    }
  }

  const updateName = async(id: string, name: string) => {
    const response = await AdminCourseService.UpdateCourse(id, {name: name})
    if(response?.id){
      onSuccessAlert('עודכן בהצלחה','')
      mutate();
    } else {
      onErrorAlert('שגיאה','')
    }
  }


  const value: AdminContextType = {
    courses,
    isLoading,
    lvl1Id,
    lvl2Id,
    lvl3Id,
    lvl4Id,
    lvl1IdCourses,
    lvl2IdCourses,
    lvl3IdCourses,
    lvl4IdCourses,
    deleteCourse,
    createCourse,
    uploadPdf,
    updateName
  };

  return <AdminContext.Provider value={value} {...props} />;
};

export { useAdminCoursesProvider, AdminCoursesProvider };