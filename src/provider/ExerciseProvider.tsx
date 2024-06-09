// Global
"use client";
import React, { createContext, useContext, ReactNode, useEffect, useState, ChangeEvent, useRef, RefObject } from 'react';
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
    nextError: () => void
    previousError: () => void
    nextOpenQuestion: () => void
    previousOpenQuestion: () => void
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
  const [errorIds, setErrorIds] = useState<string[]>([])
  const [openQuestionIds, setOpenQuestionIds] = useState<string[]>([])
  const [currentErrorId, setCurrentErrorId] = useState('')
  const [currentQuestionId, setCurrentQuestionId] = useState<string>('')
  
  const scrollToError = (exerciseId: string) => {
    console.log('exerciseId',exerciseId)
    const errorElement = document.getElementById(exerciseId);
    console.log('errorElement',errorElement)
    if (errorElement) {
      const offsetTop = errorElement.offsetTop;
      window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
      });
    } 
  };

  const nextError = () => {
    const currentIndex = errorIds.indexOf(currentErrorId);
    const nextIndex = (currentIndex + 1) % errorIds.length;
    setCurrentErrorId(errorIds[nextIndex]);
    scrollToError(errorIds[nextIndex])
  }

  const previousError = () => {
    const currentIndex = errorIds.indexOf(currentErrorId);
    const previousIndex = (currentIndex - 1 + errorIds.length) % errorIds.length;
    setCurrentErrorId(errorIds[previousIndex]);
    scrollToError(errorIds[previousIndex])
  }

  const nextOpenQuestion = () => {
    const currentIndex = openQuestionIds.indexOf(currentQuestionId);
    const nextIndex = (currentIndex + 1) % openQuestionIds.length;
    setCurrentQuestionId(openQuestionIds[nextIndex]);
    scrollToError(openQuestionIds[nextIndex])
  }

  const previousOpenQuestion = () => {
    console.log(openQuestionIds)
    const currentIndex = openQuestionIds.indexOf(currentQuestionId);
    const previousIndex = (currentIndex - 1 + openQuestionIds.length) % openQuestionIds.length;
    setCurrentQuestionId(openQuestionIds[previousIndex]);
    scrollToError(openQuestionIds[previousIndex])
  }

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

  useEffect(() => {
    if(exercise?.histories?.[0]?.errorIds){
      setErrorIds(exercise?.histories?.[0].errorIds)
    }
    if(exercise?.histories?.[0]?.openQuestionIds){
      setOpenQuestionIds(exercise?.histories?.[0].openQuestionIds)
    }
  },[exercise])

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
    borderHandler,
    nextError,
    previousError,
    nextOpenQuestion,
    previousOpenQuestion
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