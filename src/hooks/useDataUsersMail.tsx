'use client'
import useSWR from 'swr'
import { AuthService } from '@/modules/auth/services/auth.service'

const fetchData = async (
): Promise<IUser[]> => {
  return await AuthService.getUsers()
}

const useDataUsersMail = () => {
  const { data, error, isLoading, mutate } = useSWR<IUser[]>(
    `/api/mail`,
    () =>
      fetchData()
  )

  return {
    data,
    isLoading: isLoading,
    isError: error,
    mutate,
  }
}

export default useDataUsersMail
