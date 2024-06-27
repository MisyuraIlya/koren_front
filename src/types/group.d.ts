type GroupType = 'original' | 'custom'
type PrivilageType = 'owner' | 'support'
interface IGroup {
    id: number
    student: IUser
    teacher: IUser
    class: IClass
    role: GroupType
    title: string
}

interface IGroupStatistic {
    totalStudent: number
    totalStartWorking: number
    totalWaitingCheck: number
    totalCompleted: number
    totalGrade: number
    averageGrade: number
}

interface ITeacherGroup {
    uuid: string
    title: string
    class: string
    students: IUser[]
    teachers: IUser[]
    connection: IConnectionGroup
}

interface IStatistic {
    column: string[]
    rows: {result:IRowStatistic[]}[]
}

interface IRowStatistic {
    value: string
    grade: number
    teacherGrade: number
    link: string
    isExercise: boolean
}