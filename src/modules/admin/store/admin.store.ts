import { create } from 'zustand'

interface useAdminType {
    courses: ICourse[]
    setCourses: (courses: ICourse[]) => void
}



export const useAdmin = create<useAdminType>((set, get) => ({
    courses:[],
    setCourses:(courses: ICourse[]) => set({courses:courses })
}))
