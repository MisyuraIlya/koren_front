// Global
"use client";
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { AdminCourseService } from '@/modules/admin/services/adminCourse.service';
import useSWR from 'swr'
import { useAuth } from '@/modules/auth/store/auth.store';

interface AdminContextType {
    data: ICourse[] | undefined
    isLoading: boolean
    lvl2IdCourses: ICourse | undefined
    lvl3IdCourses: ICourse | undefined
    lvl4IdCourses: ICourse | undefined
    lvl5IdCourses: ICourse | undefined
}

const AdminContext = createContext<AdminContextType | null>(null);

// React hook
const useTeacherCourses = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('Can not run without "TeacherCoursesProvider"');
  }
  return context;
};

interface TeacherCoursesProviderProps {
  children: ReactNode
};


const TeacherCoursesProvider: React.FC<TeacherCoursesProviderProps> = (props) => {
  const {user} = useAuth()
  const { data, isLoading ,error, mutate } = useSWR(`http://localhost:4001/course`, () => AdminCourseService.GetCourses(user?.id!),
    {
      revalidateOnFocus: false, 
    }
  );
  console.log('data',data)
  const {courses, exercise } = useParams()
  const lvl1 = exercise ? exercise?.[0] : courses?.[0] ?? 0;
  const lvl2 = exercise ? exercise?.[1] : courses?.[1] ?? 0;
  const lvl3 = exercise ? exercise?.[2] : courses?.[2] ?? 0;
  const lvl4 = exercise ? exercise?.[3] : courses?.[3] ?? 0;
  const lvl5 = exercise ? exercise?.[4] : courses?.[4] ?? 0;
  
  const lvl2IdCourses = data && Array.isArray(data) ? data.filter(item => item.id === +lvl1)[0] : undefined;
  const lvl3IdCourses = lvl2IdCourses && lvl2IdCourses.children ? lvl2IdCourses.children.filter(item => item.id === +lvl2)[0] : undefined;
  const lvl4IdCourses = lvl3IdCourses && lvl3IdCourses.children ? lvl3IdCourses.children.filter(item => item.id === +lvl3)[0] : undefined;
  const lvl5IdCourses = lvl4IdCourses && lvl4IdCourses.children ? lvl4IdCourses.children.filter(item => item.id === +lvl4)[0] : undefined;


  const value: AdminContextType = {
    data,
    isLoading,
    lvl2IdCourses,
    lvl3IdCourses,
    lvl4IdCourses,
    lvl5IdCourses
  };

  return <AdminContext.Provider value={value} {...props} />;
};

export { useTeacherCourses, TeacherCoursesProvider };