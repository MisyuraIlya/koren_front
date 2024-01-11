import React from 'react';
import Auth from '@/modules/auth';

const page = () => {
    return (
      <div className='h-full flex items-center ml-40 mr-40'>
            <Auth.Description.LoginDescription/>
            <Auth.Forms.LoginForm/>
      </div>
    );
};

export default page;