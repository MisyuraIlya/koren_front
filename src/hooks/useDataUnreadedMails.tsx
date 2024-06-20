'use client'
import { useAuth } from '@/modules/auth/store/auth.store'
import useSWR from 'swr'
import { MailService } from '@/services/mailService'

const fetchData = async (
    userId: number
): Promise<IMail[]> => {
  return await MailService.getUnreadedMessages(userId)
}

const useDataUnreadedMails = () => {
  const { user } = useAuth()
  const { data, error, isLoading, mutate } = useSWR<IMail[]>(
    `/api/mail/undreaded/${user?.id!}`,
    () =>
      fetchData(user?.id!)
  )

  return {
    data,
    isLoading: isLoading,
    isError: error,
    mutate,
  }
}

export default useDataUnreadedMails
