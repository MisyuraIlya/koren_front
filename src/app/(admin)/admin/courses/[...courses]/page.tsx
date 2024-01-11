import Admin from '@/modules/admin';
import { useAdmin } from '@/modules/admin/store/admin.store';
import { AdminService } from '@/modules/admin/services/admin.service';
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
    const fetchCourses = await AdminService.GetCourses()
    return (
        <AdminCoursesProvider courses={fetchCourses}>
            <Admin.Courses.Description/>
            <Admin.Courses.MainCourses/>
            <Admin.Courses.SubCourses/>
        </AdminCoursesProvider>
    );
};

export default CoursesPage;