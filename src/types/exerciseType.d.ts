interface IExerciseType {
    id: nubmer
    title: string
    isDateable: boolean
    isTimeable: boolean
    ordern: number
    isAvailableMultipleCheck: boolean
    isAvailableReset: boolean
}

type IExerciseEnum = 'מבחן' | 'מבדק' | 'תרגיל' | 'הכל'