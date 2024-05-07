import { create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

interface useDiratyState {
    openStudents: boolean
    setOpenStudents: (openStudents: boolean) => void
    connectionGroup: IConnectionGroup | null
    setConnectionGroup: (value: IConnectionGroup) => void
    clear: () => void
    filter: IExerciseEnum 
    setFilter: (value:IExerciseEnum) => void
}

export const useDiratyStore= create(
  persist(
    (set, get) => ({
        openStudents: false,
        setOpenStudents: (openStudents) => set({openStudents}),
        connectionGroup: null,
        setConnectionGroup: (connectionGroup) => set({connectionGroup}),
        clear: () => set({openStudents:false,connectionGroup:null}),
        filter:'הכל' as IExerciseEnum,
        setFilter: (filter) => set({filter})
    }),
    {
      name: 'diray-teacher-storage',
      storage: createJSONStorage(() => localStorage),
    } as PersistOptions<useDiratyState, useDiratyState>
  )
)
