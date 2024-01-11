import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { sideBarList } from '@/config/sidebarList';

const Sidebar = () => {
    return (
        <aside className='bg-primary flex flex-col justify-between fixed z-50' style={{ height:'100%'}}>
            <div className='pt-12'>
                {sideBarList?.map((item, index) => 
                    <div className='hover:bg-white/10 py-2 m-4 rounded-lg px-2' key={index}>
                        <Link href={item.href} className=''>
                            <Image
                            priority
                            width={30}
                            height={37}
                            src={item.icon}    
                            alt='Sary'
                            className='m-auto pt-2'
                            />
                            <p className='pt-2 text-white text-center'>{item.title}</p>
                        </Link>
                    </div>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;