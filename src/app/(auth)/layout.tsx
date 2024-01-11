import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const AuthLayout = ({children}:{children: React.ReactNode }) => {
    return (
        <body className={inter.className}>
            <div className='grid grid-cols-12'>
                <div className='col-span-6 h-screen px-12 py-12 relative authBg'>
                    <Image src={'/images/dots.svg'} width={470} height={45} alt='logo' priority  className='absolute top-0 right-0'/>
                    <div className='flex gap-4'>
                        <Image src={'/images/logo.svg'} width={100} height={85} alt='logo' priority />
                        <Image src={'/images/logoTitle.svg'} width={206} height={36} alt='logo' className='pt-6' priority />
                    </div>
                    <div className='float-left z-1 relative'>
                        <div className='w-full mt-24 flex items-center text-center justify-end'>
                            <Image src={'/images/ilustrate.png'} width={500} height={185} alt='logo' priority />
                        </div>
                        <div className='text-white'>
                            <h1>לימודי עברית</h1>
                            <h2>הבנה, הבעה ולשון לחטיבה העליונה</h2>
                        </div>
                    </div>
                    <div className='absolute bottom-10'>
                        <Image src={'/images/auth/id.png'} width={141} height={95} alt='logo' className='pt-6' priority />
                    </div>
                    <Image src={'/images/dots.svg'} width={300} height={45} alt='logo' priority  className='absolute bottom-0 left-0'/>
                </div>
                <div className='col-span-6 bg-white h-full'>
                    {children}
                </div>
            </div>
        </body>
    );
};

export default AuthLayout;