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
                    <ListSubCourses items={lvl1IdCourses?.children.filter((item) => item.level === 2) ?? []} title='פרקים' lvl={2} />
                }
                {lvl2Id &&
                    <ListSubCourses items={lvl2IdCourses?.children.filter((item) => item.level === 3) ?? []} title='יחידות' lvl={3}/>
                }
                {lvl3Id &&
                    <ListSubCourses items={lvl3IdCourses?.children.filter((item) => item.level === 4) ?? []} title='נושאים' lvl={4}/>
                }
                {lvl4Id &&
                    <ListSubCourses items={lvl4IdCourses?.children.filter((item) => item.level === 5) ?? []}title='תרגילים' lvl={5}/>
                }
            </div>
        </div>
    );
};

export default SubCourses;