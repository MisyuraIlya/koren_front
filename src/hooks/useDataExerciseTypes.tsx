import useSWR from 'swr'
import { ExerciseTypeSerivce } from '../modules/teacher/services/exerciseType.service.'

const fetchData = async (
): Promise<IExerciseType[]> => {
  return await ExerciseTypeSerivce.getExerciseTypes()
}

const useDataExerciseTypes = () => {
  const { data, error, isLoading, mutate } = useSWR<IExerciseType[]>(
    `/exercise-type`,
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

export default useDataExerciseTypes
