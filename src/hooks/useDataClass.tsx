import { useAuth } from '@/modules/auth/store/auth.store'
import useSWR from 'swr'
import { classService } from '../modules/teacher/services/class.service'

const fetchData = async (
    schoolId: number
): Promise<IClass[]> => {
  return await classService.getClassesBySchool(
    schoolId
  )
}

const useDataClass = () => {
  const { user } = useAuth()
  const { data, error, isLoading, mutate } = useSWR<IClass[]>(
    `/api/class/${user?.school.id}`,
    () =>
      fetchData(
        user?.school.id!
      )
  )

  return {
    data,
    isLoading: isLoading,
    isError: error,
    mutate,
  }
}

export default useDataClass
