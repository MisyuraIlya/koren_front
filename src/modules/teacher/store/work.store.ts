import { create } from 'zustand';
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware';

// Define sendExerciseType before using it
type sendExerciseType = 'exercise' | 'test' | 'exam' | '';

interface useTeacherWorkState {
    classChoosed: ITeacherGroup | null;
    setClassesChoosed: (value: ITeacherGroup) => void;
    studentChoosed: IUser | null;
    setStudentChoosed: (studentChoosed: IUser | null) => void;
    groupSelected: ITeacherGroup | null;
    setSelectedGroup: (groupSelected: ITeacherGroup) => void;
    sendType: sendExerciseType;
    setSendType: (sendType: sendExerciseType) => void; // Define sendType type here
}

export const useTeacherWork = create(
    persist(
        (set, get) => ({
            classChoosed: null,
            setClassesChoosed: (classChoosed) => set({ classChoosed }),
            groupSelected: null,
            setSelectedGroup: (groupSelected) => set({ groupSelected }),
            studentChoosed: null,
            setStudentChoosed: (studentChoosed) => set({ studentChoosed }),

            //SEND DRAWER
            sendType: '' as sendExerciseType,
            setSendType: (sendType: sendExerciseType) => set({ sendType }), // Explicitly define sendType type here
        }),
        {
            name: 'work-teacher-storage',
            storage: createJSONStorage(() => localStorage),
        } as PersistOptions<useTeacherWorkState, useTeacherWorkState>
    )
);
