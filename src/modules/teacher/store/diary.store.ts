import { create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

interface useDiratyState {
    openStudents: boolean
    setOpenStudents: (openStudents: boolean) => void
    connectionGroup: IConnectionGroup | null
    setConnectionGroup: (value: IConnectionGroup) => void
    clear: () => void
}

export const useDiratyStore= create(
  persist(
    (set, get) => ({
        openStudents: false,
        setOpenStudents: (openStudents) => set({openStudents}),
        connectionGroup: null,
        setConnectionGroup: (connectionGroup) => set({connectionGroup}),
        clear: () => set({openStudents:false,connectionGroup:null})
    }),
    {
      name: 'diray-teacher-storage',
      storage: createJSONStorage(() => localStorage),
    } as PersistOptions<useDiratyState, useDiratyState>
  )
)
