interface IExerciseType {
    id: nubmer
    title: string
    isDateable: boolean
    isTimeable: boolean
    ordern: number
}

type IExerciseEnum = 'מבחן' | 'מבדק' | 'תרגיל' | 'הכל'