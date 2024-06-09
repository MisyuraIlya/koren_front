// Global
"use client";
import React, { createContext, useContext, ReactNode, useEffect, useState, ChangeEvent } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useForm,UseFormRegister, UseFormHandleSubmit, UseFormSetValue, Control } from "react-hook-form";
import { onAsk, onInfoAlert, onSuccessAlert } from '@/utils/sweetAlert';
import useSWR from 'swr';
import { AdminExerciseService } from '@/modules/admin/services/adminExercise.service';
import { ExerciseServices } from '@/services/ExerciseServices';
import { useAuth } from '@/modules/auth/store/auth.store';
import { useTeacherWork } from '@/store/work.store';

interface AdminContextType {
    exercise: IExercise | undefined
    isLoading: boolean
    closeHeaderExercise: boolean
    setCloseHeaderExerise: (value: boolean) => void
    choosedTab: number
    setChoosedTab: (value: number) => void
    handleAnswer: (objective: IAnswer, answer: string) => void
    handleDone: () => void
    handleReset: () => void
    borderHandler: (objective: IObjective) => string
}


const AdminContext = createContext<AdminContextType | null>(null);

// React hook
const useExercise = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('Can not run without "ExerciseProvider"');
  }
  return context;
};

interface ExerciseProviderProps {
  children: ReactNode
  courseId: string
};

const ExerciseProvider: React.FC<ExerciseProviderProps> = (props) => {
  const {user} = useAuth()
  const [choosedTab, setChoosedTab] = useState<number>(0)
  const [closeHeaderExercise, setCloseHeaderExerise] = useState<boolean>(true)
  const [fileChoosed, setFileChoosed] = useState<File | null>()
  const [loading, setLoading] = useState(false)
  const {studentChoosed} = useTeacherWork()

  const { data: exercise, isLoading, error, mutate } = useSWR<IExercise>(
    `http://localhost:4001/exercise/${props.courseId}/${user?.role === 'teacher' && studentChoosed?.id  ? studentChoosed.id! :  user?.id!}`,
    () => ExerciseServices.GetExerciseStudent(props.courseId, user?.role === 'teacher' && studentChoosed?.id  ? studentChoosed.id! :  user?.id!),
    {
      revalidateOnFocus: false,
    }
  );

  const handleAnswer = (objective: IAnswer, answer: string) => {
    try {
      const response = ExerciseServices.handleAnswer(objective?.id!,user?.id!, exercise?.histories[0]?.id!,answer)
    } catch(e) {
      onInfoAlert('אופס','שגיאה' + e)
    } 
  }

  const handleDone = async () => {
    try {
        const ask = await onAsk('בטוח סיימת?','')
        if(ask){
          const response = await ExerciseServices.updateHistory(exercise?.histories[0]?.id!, true, exercise?.id!)
          mutate()
        }
    } catch(e) {
      onInfoAlert('אופס','שגיאה' + e)
    } finally {
      onSuccessAlert('תרגיל נשלח בהצלחה','')
    }
  }

  const handleReset = async () => {
    try {
      const ask = await onAsk('להתחיל מחדש?','')
      if(ask){
        const response = await ExerciseServices.updateHistory(exercise?.histories[0]?.id!, false, exercise?.id!)
        mutate()
      }
  } catch(e) {
    onInfoAlert('אופס','שגיאה' + e)
  }
  }

  const handleCreateHistory = async () => {
    try {
      if(user?.id && exercise?.id){
        const res = await ExerciseServices.createHistory(user?.id,exercise?.id)
        if(res.isNew){
          mutate()
        }
      }
    } catch(e) {
      console.log('[ERROR] exercise provider', e)
    } 
  }

  const borderHandler = (objective: IObjective) => {
    // if ((user?.role === 'teacher' || (exercise?.userGroup?.isOpenAnswer && exercise?.userGroup?.isDone)) &&
    //     (objective?.answers[0]?.answers[0]?.isCorrect)) {
    //   return 'green';
    // } else if ((user?.role === 'teacher' || (exercise?.userGroup?.isOpenAnswer && exercise?.userGroup?.isDone)) &&
    //            (!objective?.answers[0]?.answers[0]?.isCorrect)) {
    //   return 'red';
    // }
    // return '#ced4da';
    if (exercise?.histories[0]?.isDone) {
      if (objective?.answers[0]?.answers[0]?.isCorrect) {
        return 'green';
      } else {
        return 'red';
      }
    }
    return '#ced4da';
  }

  useEffect(() => {
    handleCreateHistory()
  },[user,exercise])

  const value: AdminContextType = {
    exercise,
    isLoading,
    closeHeaderExercise,
    setCloseHeaderExerise,
    choosedTab,
    setChoosedTab,
    handleAnswer,
    handleDone,
    handleReset,
    borderHandler
  };

  return (
  <AdminContext.Provider value={value} > 
    <form >
      {props.children}
    </form>
  </AdminContext.Provider>
  );
};

export { useExercise, ExerciseProvider };