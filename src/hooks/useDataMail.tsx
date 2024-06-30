'use client'
import { useAuth } from '@/modules/auth/store/auth.store'
import useSWR from 'swr'
import { MailService } from '@/services/mailService'
import { useSearchParams } from 'next/navigation'
import { useMailStore } from '@/store/mail.store'
const fetchData = async (
    userId: number,
    page: string = '1',
    type: string = '',
    search?: string | null
): Promise<IMailList> => {
  return await MailService.GetMail(userId,page,type,search)
}

const useDataMail = () => {
  const { user } = useAuth()
  const searchParams  = useSearchParams()
  const search = searchParams.get('search')
  const page = searchParams.get('page') ?? '1'
  const type = searchParams.get('type') ?? ''
  const { data, error, isLoading, mutate } = useSWR<IMailList>(
    `/api/mail/${user?.id}?page=${page}&${search}=${search}&type=${type}`,
    () =>
      fetchData(user?.id!,page,type,search)
  )

  return {
    data,
    isLoading: isLoading,
    isError: error,
    mutate,
  }
}

export default useDataMail
