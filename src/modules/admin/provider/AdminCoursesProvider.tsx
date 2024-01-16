// Global
"use client";
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useAdmin } from '../store/admin.store';
import { usePathname, useSearchParams } from 'next/navigation';
import { onAsk } from '@/utils/sweetAlert';
import { AdminService } from '../services/admin.service';

interface AdminContextType {
  courses: ICourse[]
  lvl1Id: string | undefined
  lvl2Id: string | undefined
  lvl3Id: string | undefined
  lvl4Id: string | undefined
  lvl1IdCourses: ICourse
  lvl2IdCourses: ICourse
  lvl3IdCourses: ICourse
  lvl4IdCourses: ICourse
  deleteCourse: (id: string) => void
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
  courses: ICourse[]
  children: ReactNode
};


const AdminCoursesProvider: React.FC<AdminCoursesProviderProps> = (props) => {
  const [courses, setCourses] = useState(props.courses)

  const searchParams = useSearchParams()
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
      AdminService.DeleteCourse(id)
    }
  }

  const value: AdminContextType = {
    courses,
    lvl1Id,
    lvl2Id,
    lvl3Id,
    lvl4Id,
    lvl1IdCourses,
    lvl2IdCourses,
    lvl3IdCourses,
    lvl4IdCourses,
    deleteCourse
  };

  return <AdminContext.Provider value={value} {...props} />;
};

export { useAdminCoursesProvider, AdminCoursesProvider };