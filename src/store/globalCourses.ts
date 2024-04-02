import { create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

interface useGlobalCourses {
    mainCourse: ICourse | null
    setMainCourse: (value: ICourse) => void
}

export const useGlobalCourses = create(
  persist(
    (set, get) => ({
        mainCourse: null,
        setMainCourse: (mainCourse) => set({mainCourse}),
    }),
    {
      name: 'course-global-storage',
      storage: createJSONStorage(() => localStorage),
    } as PersistOptions<useGlobalCourses, useGlobalCourses>
  )
)
