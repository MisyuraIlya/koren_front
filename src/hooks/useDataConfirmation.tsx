import { useAuth } from '@/modules/auth/store/auth.store'
import useSWR from 'swr'
import { ConfirmationService } from '@/services/confirmation.service'
const fetchData = async (
    userId: number
): Promise<IConfirmation[]> => {
  return await ConfirmationService.getConfirmation(
    userId
  )
}

const useDataConfirmation = () => {
  const { user } = useAuth()
  const { data, error, isLoading, mutate } = useSWR<IConfirmation[]>(
    `/api/confirmation/${user?.id}`,
    () =>
      fetchData(
        user?.id!
      )
  )

  const create = async (courseId: number) => {
    await ConfirmationService.createConfirmation(user?.id!,courseId)
    mutate()
  }

  return {
    data,
    create,
    isLoading: isLoading,
    isError: error,
    mutate,
  }
}

export default useDataConfirmation
