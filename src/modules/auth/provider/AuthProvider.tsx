"use client";
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { AuthService } from '../services/auth.service';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '../store/auth.store';
interface AdminContextType {
}



const AdminContext = createContext<AdminContextType | null>(null);

// React hook
const useAuthProvider = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('Can not run without "AuthProvider"');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode
};


const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  
  const {user} = useAuth()
  const path = usePathname()
  const router = useRouter()
  
  useEffect(() => {
    if(path === '/login' || '/'){
      if(user?.role === 'admin'){
        router.push('/admin/courses/1')
      } else if(user?.role === 'student') {
          router.push('/student/courses')
      }
    }
  },[])

  const value: AdminContextType = {
  };

  return <AdminContext.Provider value={value} {...props} />;
};

export { useAuthProvider, AuthProvider };