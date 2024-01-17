'use client'
import React from 'react';
import { useAdminCoursesProvider } from '../../provider/AdminCoursesProvider';
import MainCourseCardCreate from './MainCourseCardCreate';
import MainCourseCard from './MainCourseCard';
const MainCourses = () => {
    const {courses} = useAdminCoursesProvider()
    return (
        <div className='gap-8 flex overflow-x-auto w-full'>
            {courses?.map((item,index) =>
                <div className='flex-shrink-0 ' key={index}>
                    <MainCourseCard  item={item}/>
                </div>    
            )}
            <MainCourseCardCreate/>
        </div>
    );
};

export default MainCourses;