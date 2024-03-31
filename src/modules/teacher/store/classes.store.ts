import { create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

interface useClassesState {
    classes: IClass[]
    setClasses: (arr: IClass[]) => void
}

export const useClasses = create(
  persist(
    (set, get) => ({
        classes: [],
        setClasses: (arr) => set({classes:arr})
    }),
    {
      name: 'classes-teacher-storage',
      storage: createJSONStorage(() => localStorage),
    } as PersistOptions<useClassesState, useClassesState>
  )
)
