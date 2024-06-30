'use client'
import { useAuth } from '@/modules/auth/store/auth.store'
import useSWR from 'swr'
import { MailService } from '@/services/mailService'
import { useSearchParams,useParams } from 'next/navigation'
import { useMailStore } from '@/store/mail.store'
const fetchData = async (
    uuid: string
): Promise<IMailResponse> => {
  return await MailService.GetChat(uuid)
}

const useDataMailChat = () => {
  const { user } = useAuth()
  const {id} = useParams()
  const { data, error, isLoading, mutate } = useSWR<IMailResponse>(
    `/api/mail-chat/${id}`,
    () =>
      fetchData(id! as string)
  )

  const create = async (text:string) => {
    const response = await MailService.createChatMessage(text,user?.id!,id! as string)
    mutate()
  }


  return {
    data,
    isLoading: isLoading,
    isError: error,
    mutate,
    create
  }
}

export default useDataMailChat
