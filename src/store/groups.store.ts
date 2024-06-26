import { create } from 'zustand';
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware';

interface useGroupsState {
    students: IUser[];
    setStudents: (arr: IUser[]) => void;
    deleteStudent: (id: number) => void
    groupName: string
    setGroupName: (value: string) => void
    teachers: IUser[]
    setTeachers: (arr: IUser[]) => void
    deleteTeacher: (id: number) => void;
    groupNameMixed: string
    setGroupNameMixed: (value: string) => void
    typeMixed: number,
    setTypeMixed: (number : 1 | 2) => void
    clear:() => void
}

export const useGroups = create(
    persist(
        (set, get) => ({
            students: [],
            setStudents: (arr: IUser[]) => set({ students: arr }), 
            deleteStudent: (id: number) => {
                set(prevState => ({
                    students: prevState.students.filter(student => student.id !== id)
                }));
            },
            typeMixed:1,
            setTypeMixed:(number : 1 | 2) => {
                set({typeMixed:number})
            },
            groupName:'',
            setGroupName:(value) => set({groupName:value}),
            teachers: [],
            setTeachers: (arr: IUser[]) => set({teachers:arr}),
            deleteTeacher: (id: number) => {
                set(prevState => ({
                  teachers: prevState.teachers.filter(teacher => teacher.id !== id)
                }));
            },
            groupNameMixed:'',
            setGroupNameMixed:(value: string) => set({groupNameMixed:value}),
            clear: () => set({teachers:[],groupNameMixed:'',groupName:'',students:[]})
        }),
        {
            name: 'groups-teacher-storage',
            storage: createJSONStorage(() => localStorage),
        } as PersistOptions<useGroupsState, useGroupsState>
    )
);
