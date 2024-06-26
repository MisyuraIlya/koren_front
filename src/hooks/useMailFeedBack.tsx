'use client'
import { useAuth } from '@/modules/auth/store/auth.store'
import useSWR from 'swr'
import { MailService } from '@/services/mailService'
import { useExercise } from '@/provider/ExerciseProvider'
import { useTeacherWork } from '@/store/work.store'

const fetchData = async (
    userId: number,
    exerciseId: number
): Promise<IMail> => {
  return await MailService.getFeedBack(userId,exerciseId)
}

const useMailFeedBack = () => {
  const {user} = useAuth()
  const { studentChoosed } = useTeacherWork()
  const { exercise } = useExercise()

  const { data, error, isLoading, mutate } = useSWR<IMail>(
    `/api/mail/feedback/${user?.role === 'teacher' ? studentChoosed?.id : user?.id}/${exercise?.id!}`,
    () =>
      fetchData(
        user?.role === 'teacher' ? studentChoosed?.id! : user?.id!,
        exercise?.id!
      )
  )

  return {
    data,
    isLoading: isLoading,
    isError: error,
    mutate,
  }
}

export default useMailFeedBack
