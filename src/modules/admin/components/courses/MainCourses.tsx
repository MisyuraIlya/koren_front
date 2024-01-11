'use client'
import React from 'react';
import { useAdminCoursesProvider } from '../../provider/AdminCoursesProvider';
import CourseCard from './CourseCard';
const MainCourses = () => {
    const {courses} = useAdminCoursesProvider()

    return (
        <div className='gap-8 flex overflow-x-auto w-full'>
            {courses?.map((item,index) =>
                <div className='flex-shrink-0 ' key={index}>
                    <CourseCard  item={item}/>
                </div>    
            )}
        </div>
    );
};

export default MainCourses;