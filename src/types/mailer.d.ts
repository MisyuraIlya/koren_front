interface IMail {
    id: number
    uuid: string
    title: string
    description: string
    createdAt: string
    userSend: IUser,
    userRecevie: IUser
    type: MailTypes
}

type MailTypes = 'original' | 'system' | 'feedBack'

interface IMailList {
    mails: IMail[]
    total: number
    totalPages: number
    totalFeedBacks: number
    totalSystem: number
    totalRegular: number
    totalMessages: number
}

interface DtoMail {
    sendTo: number[]
    title: string
    description: string
}

interface IMailChat {
    id: number
    title: string
    description: string
    uuid: string
    createdAt: string
    user: IUser
}

interface IMailResponse {
    mail: IMail,
    chat: IMailChat[]
}