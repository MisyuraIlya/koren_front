interface IConnectionGroup {
    id: ?number
    group: string
    fromDate: string
    toDate: string
    createdAt: string
    updatedAt: string
    answerType: string
    time: string
    answerTime: string
    exercise: IExercise
    students: IExerciseUserConnection[]
    exerciseType: IExerciseType
}

interface IExerciseUserConnection {
    id: number
    connection: IConnectionGroup
    student: IUser
    dueDate: string
    answerTime: string
    isOpenAnswer: boolean
    isDone: boolean
}