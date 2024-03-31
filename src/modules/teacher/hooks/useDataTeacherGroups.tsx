import { useAuth } from '@/modules/auth/store/auth.store'
import useSWR from 'swr'
import { GroupService } from '../services/group.service'

const fetchData = async (
    teacherId: number,
): Promise<ITeacherGroup[]> => {
  return await GroupService.findByTeacherId(
    teacherId,
  )
}

const useDataTeacherGroups = () => {
  const { user } = useAuth()
  const { data, error, isLoading, mutate } = useSWR<ITeacherGroup[]>(
    `/api/group/teacher/${user?.id}`,
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

export default useDataTeacherGroups
