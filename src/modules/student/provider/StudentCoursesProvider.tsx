// Global
"use client";
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AdminCourseService } from '@/modules/admin/services/adminCourse.service';
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
}

const AdminContext = createContext<AdminContextType | null>(null);

// React hook
const useStudentCourses = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('Can not run without "StudentCoursesProvider"');
  }
  return context;
};

interface StudentCoursesProviderProps {
  children: ReactNode
};


const StudentCoursesProvider: React.FC<StudentCoursesProviderProps> = (props) => {

  const { data: courses, isLoading ,error, mutate } = useSWR(`http://localhost:4001/course`, AdminCourseService.GetCourses,
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

  console.log('courses',courses,lvl1Id,lvl2Id,lvl3Id,lvl4Id)
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
  };

  return <AdminContext.Provider value={value} {...props} />;
};

export { useStudentCourses, StudentCoursesProvider };