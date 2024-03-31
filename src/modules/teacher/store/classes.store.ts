import { create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

interface useClassesState {
    classes: IClass[]
    setClasses: (arr: IClass[]) => void
    deleteClass: (classId: number) => void
}

export const useClasses = create(
  persist(
    (set, get) => ({
        classes: [],
        setClasses: (arr) => set({classes:arr}),
        deleteClass: (classId) => {
          set((state) => ({
            classes: state.classes.filter((cls) => cls.id !== classId),
          }))
        },
    }),
    {
      name: 'classes-teacher-storage',
      storage: createJSONStorage(() => localStorage),
    } as PersistOptions<useClassesState, useClassesState>
  )
)
