// Global
"use client";
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { AdminCourseService } from '@/modules/admin/services/adminCourse.service';
import useSWR from 'swr'
import { useAuth } from '@/modules/auth/store/auth.store';
import { useGlobalCourses } from '@/store/globalCourses';

interface contextType {
    data: ICourse[] | undefined
    isLoading: boolean
    lvl2IdCourses: ICourse | undefined
    lvl3IdCourses: ICourse | undefined
    lvl4IdCourses: ICourse | undefined
    lvl5IdCourses: ICourse | undefined
    lvl1: string | undefined
    lvl2: string | undefined
    lvl3: string | undefined
    lvl4: string | undefined
    lvl5: string | undefined
    mutate: any
    clickedLvl3: number
    setClickedLvl3: (value: number) => void
}

const CourseContext = createContext<contextType | null>(null);

// React hook
const useCourses = (): contextType => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('Can not run without "CoursesProvider"');
  }
  return context;
};

interface CoursesProviderProps {
  children: ReactNode
};


const CoursesProvider: React.FC<CoursesProviderProps> = (props) => {
  const {user} = useAuth()
  const {setMainCourse} = useGlobalCourses()
  const [clickedLvl3,setClickedLvl3] = useState(0)
  const { data, isLoading ,error, mutate } = useSWR(`http://localhost:4001/course`, () => AdminCourseService.GetCourses(user?.id!),
    {
      revalidateOnFocus: false, 
    }
  );
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
  useEffect(() => {
    if(lvl2IdCourses && lvl1) {
      setMainCourse(lvl2IdCourses)
    }
  },[lvl1,lvl2IdCourses])

  const value: contextType = {
    data,
    isLoading,
    lvl2IdCourses,
    lvl3IdCourses,
    lvl4IdCourses,
    lvl5IdCourses,
    lvl1,
    lvl2,
    lvl3,
    lvl4,
    lvl5,
    mutate,
    clickedLvl3,
    setClickedLvl3
  };

  return <CourseContext.Provider value={value} {...props} />;
};

export { useCourses, CoursesProvider };