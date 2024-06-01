import useSWR from 'swr'
import { FeedBackService } from '@/services/feedBack.service'

const fetchData = async (
  
): Promise<IFeedBack[]> => {
  return await FeedBackService.getFeedBack()
}

const useDataFeedBack = () => {
  const { data, error, isLoading, mutate } = useSWR<IFeedBack[]>(
    `/api/feedback`,
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

export default useDataFeedBack
