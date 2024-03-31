import { useAuth } from '@/modules/auth/store/auth.store'
import useSWR from 'swr'
import { classService } from '../services/class.service'
import { GroupService } from '../services/group.service'

const fetchData = async (
    schoolId: number
): Promise<IClass[]> => {
  return await classService.getClassesBySchool(
    schoolId
  )
}

const useDataGroup = () => {
  const { user } = useAuth()
//   const { data, error, isLoading, mutate } = useSWR<IClass[]>(
//     `/api/class/${user?.school.id}`,
//     () =>
//       fetchData(
//         user?.school.id!
//       )
//   )

  const createGroup = async (title: string, role: GroupType, classes: string[],privilageType: PrivilageType, isUnique: boolean = false, teachers?: string[],students?: string[]) => {
    await GroupService.createGroup(user?.id!,title,role,classes,privilageType,isUnique,teachers,students)
  }

  return {
    createGroup,
    // data,
    // isLoading: isLoading,
    // isError: error,
    // mutate,
  }
}

export default useDataGroup
