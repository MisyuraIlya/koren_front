import React from 'react';
import Auth from '@/modules/auth';

const page = () => {
    return (
      <main className='h-full flex items-center ml-40 mr-40'>
          <div>
            <Auth.Description.LoginDescription/>
            <Auth.Forms.LoginForm/>
        </div>
      </main>
    );
};

export default page;