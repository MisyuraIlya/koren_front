import Admin from '@/modules/admin';
import React, {FC} from 'react';
import { AdminCoursesProvider } from '@/modules/admin/provider/AdminCoursesProvider';

interface ICoursesPageProps {
    params: {
        courses: Array<string>
    }
    searchParams: {
 
    }
  }

const CoursesPage:FC<ICoursesPageProps> = async ({params}) => {
    return (
        <AdminCoursesProvider>
            <Admin.Courses.Description/>
            <Admin.Courses.MainCourses/>
            <Admin.Courses.SubCourses/>
        </AdminCoursesProvider>
    );
};

export default CoursesPage;