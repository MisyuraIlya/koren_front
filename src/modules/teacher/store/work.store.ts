import { create } from 'zustand'
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware'

interface useTeacherWorkState {
    classChoosed: ITeacherGroup | null
    setClassesChoosed: (value: ITeacherGroup) => void
    studentChoosed: IUser | null
    setStudentChoosed: (studentChoosed : IUser | null) => void
    groupSelected: ITeacherGroup | null
    setSelectedGroup: (groupSelected: ITeacherGroup) => void
}

export const useTeacherWork = create(
  persist(
    (set, get) => ({
        classChoosed: null,
        setClassesChoosed: (classChoosed) => set({classChoosed}),
        groupSelected: null,
        setSelectedGroup: (groupSelected) => set({groupSelected}),
        studentChoosed: null,
        setStudentChoosed: (studentChoosed) => set({studentChoosed}),
    }),
    {
      name: 'work-teacher-storage',
      storage: createJSONStorage(() => localStorage),
    } as PersistOptions<useTeacherWorkState, useTeacherWorkState>
  )
)
