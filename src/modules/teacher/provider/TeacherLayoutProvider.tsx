// Global
"use client";
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AdminCourseService } from '@/modules/admin/services/adminCourse.service';
import useSWR from 'swr'

interface AdminContextType {

}

const AdminContext = createContext<AdminContextType | null>(null);

// React hook
const useTeacher = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('Can not run without "TeacherProvider"');
  }
  return context;
};

interface TeacherProviderProps {
  children: ReactNode
};


const TeacherProvider: React.FC<TeacherProviderProps> = (props) => {
  

  const value: AdminContextType = {

  };

  return <AdminContext.Provider value={value} {...props} />;
};

export { useTeacher, TeacherProvider };