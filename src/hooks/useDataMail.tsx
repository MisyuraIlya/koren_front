'use client'
import { useAuth } from '@/modules/auth/store/auth.store'
import useSWR from 'swr'
import { MailService } from '@/services/mailService'
import { useSearchParams } from 'next/navigation'
import { useMailStore } from '@/store/mail.store'
const fetchData = async (
    userId: number,
    page: string = '1',
    search?: string | null
): Promise<IMailList> => {
  return await MailService.GetMail(userId,page,search)
}

const useDataMail = () => {
  const { user } = useAuth()
  const {search: searchValue} = useMailStore()
  const searchParams  = useSearchParams()
  const search = searchParams.get('search')
  const page = searchParams.get('page') ?? '1'

  const { data, error, isLoading, mutate } = useSWR<IMailList>(
    `/api/mail/${user?.id}?page=${page}&${search}=${searchValue}`,
    () =>
      fetchData(user?.id!,page,search)
  )

  return {
    data,
    isLoading: isLoading,
    isError: error,
    mutate,
  }
}

export default useDataMail
