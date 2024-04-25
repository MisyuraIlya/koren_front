import { useAuth } from '@/modules/auth/store/auth.store'
import useSWR from 'swr'
import { classService } from '../services/class.service'
import { AuthService } from '@/modules/auth/services/auth.service'
import { connectionServices } from '../services/connections.service'
import { useTeacherWork } from '../store/work.store'
import { useExercise } from '@/provider/ExerciseProvider'

const fetchData = async (groupUuid: string, exerciseTypeId: string, exerciseId: number, teacherId: number)=> {
  return await connectionServices.getConnectionGroup(
    groupUuid,
    exerciseTypeId,
    exerciseId,
    teacherId
  )
}

const useDataConnectionGroup = () => {
  const { user } = useAuth()
  const {groupSelected, fromDate, toDate, timeChoosed, sendType} = useTeacherWork()
  const {exercise} = useExercise()
  const { data, error, isLoading, mutate } = useSWR<IConnectionGroup>(
    `/api/exercise-group-connection/${groupSelected?.uuid!}/${sendType}/${exercise?.id!}/${user?.id}`,
    () =>
      fetchData(
        groupSelected?.uuid!,
        sendType,
        exercise?.id!,
        user?.id!
      )
  )

  const createGroupConnection = async (students:IUser[]) => {
        await connectionServices.createConnectionGroup(
            groupSelected?.uuid!,
            sendType,
            exercise?.id!,
            user?.id!,
            fromDate,
            toDate,
            timeChoosed,
            students
        )
        mutate()
  }
  
  const deletGroup = async (id: number) => {
    await connectionServices.deleteConnectionGroup(id);
    mutate(undefined); 
  };


  return {
    data,
    isLoading: isLoading,
    isError: error,
    mutate,
    createGroupConnection,
    deletGroup
  }
}

export default useDataConnectionGroup