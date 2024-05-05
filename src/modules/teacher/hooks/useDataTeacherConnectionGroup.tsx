import { useAuth } from '@/modules/auth/store/auth.store'
import useSWR from 'swr'
import { connectionServices } from '../services/connections.service'

const fetchData = async (teacherId: number)=> {
  return await connectionServices.getTeacherConnectionGroup(
    teacherId
  )
}

const useDataTeacherConnectionGroup = () => {
  const { user } = useAuth()
  const { data, error, isLoading, mutate } = useSWR<IConnectionGroup[]>(
    `/api/exercise-group-connection/teacher/${user?.id}`,
    () =>
      fetchData(
        user?.id!
      )
  )

  return {
    data,
    isLoading: isLoading,
    isError: error,
    mutate,
  }
}

export default useDataTeacherConnectionGroup
