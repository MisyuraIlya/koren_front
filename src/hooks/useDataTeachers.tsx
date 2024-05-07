import { useAuth } from '@/modules/auth/store/auth.store'
import useSWR from 'swr'
import { classService } from '../modules/teacher/services/class.service'
import { AuthService } from '@/modules/auth/services/auth.service'

const fetchData = async (
    type: Role,
    schoolId: string
): Promise<IUser[]> => {
  return await AuthService.getUserByTypeAndSchool(
    type,
    schoolId
  )
}

const useDataTeachers = () => {
  const { user } = useAuth()
  const { data, error, isLoading, mutate } = useSWR<IUser[]>(
    `/api/auth/allUsers/teacher/${user?.school.id}`,
    () =>
      fetchData(
        "teacher",
        user?.school?.id.toString()!
      )
  )

  return {
    data,
    isLoading: isLoading,
    isError: error,
    mutate,
  }
}

export default useDataTeachers
