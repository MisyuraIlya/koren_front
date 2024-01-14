import React from 'react';
import Auth from '@/modules/auth';

const page = () => {
    return (
      <div >
            <Auth.Description.LoginDescription/>
            <Auth.Forms.LoginForm/>
      </div>
    );
};

export default page;