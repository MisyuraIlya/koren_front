'use client'
import { useAuth } from '@/modules/auth/store/auth.store'
import useSWR from 'swr'
import { MailService } from '@/services/mailService'

const fetchData = async (
    userId: number
): Promise<IMail[]> => {
  return await MailService.GetMail(userId)
}

const useDataMail = () => {
  const { user } = useAuth()
  const { data, error, isLoading, mutate } = useSWR<IMail[]>(
    `/api/mail/${user?.id}`,
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

export default useDataMail
