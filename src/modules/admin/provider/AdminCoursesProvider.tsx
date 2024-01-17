// Global
"use client";
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useAdmin } from '../store/admin.store';
import { usePathname, useSearchParams } from 'next/navigation';
import { onAsk } from '@/utils/sweetAlert';
import { AdminService } from '../services/admin.service';
import useSWR from 'swr'

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
}

const fetchData = async () => {
  const response = await fetch(`http://localhost:4001/course`);
  const data = await response.json();
  return data;
};

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

  const { data: courses, isLoading ,error, mutate } = useSWR(`http://localhost:4001/course`, AdminService.GetCourses,
    {
      revalidateOnFocus: false, 
    }
  );

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
      await AdminService.DeleteCourse(id)
      mutate();
    }
  }

  const createCourse = async (obj: ICreateCourseDto) => {
    await AdminService.CreateCourse(obj)
    mutate();
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
    createCourse
  };

  return <AdminContext.Provider value={value} {...props} />;
};

export { useAdminCoursesProvider, AdminCoursesProvider };