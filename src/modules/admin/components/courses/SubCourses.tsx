'use client'
import React from 'react';
import { useAdminCoursesProvider } from '../../provider/AdminCoursesProvider';
import { useSearchParams, usePathname } from 'next/navigation';
import ListSubCourses from './ListSubCourses';

const SubCourses = () => {
    const {lvl1Id,lvl2Id, lvl3Id, lvl4Id, lvl1IdCourses,lvl2IdCourses,lvl3IdCourses,lvl4IdCourses} = useAdminCoursesProvider()
    const getBreadBrumbs = () => {
        if(lvl1IdCourses?.id){
            return lvl1IdCourses?.name
        } else {
            return ''
        }
    }
    return (
        <div>
            <div className='px-12 py-6'>
                <p>עריכת קורס: {getBreadBrumbs()}</p>
            </div>
            <div className='grid grid-cols-4 gap-4 px-12 pb-12'>
                {lvl1Id &&
                    <ListSubCourses items={lvl1IdCourses?.children ?? []} title='פרקים' />
                }
                {lvl2Id &&
                    <ListSubCourses items={lvl2IdCourses?.children ?? []} title='יחידות'/>
                }
                {lvl3Id &&
                    <ListSubCourses items={lvl3IdCourses?.children ?? []} title='נושאים'/>
                }
                {lvl4Id &&
                    <ListSubCourses items={lvl4IdCourses?.children ?? []}title='תרגילים' />
                }
            </div>
        </div>
    );
};

export default SubCourses;