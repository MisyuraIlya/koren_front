interface ICourse extends Idefinder{
    name: string
    grade: string
    parent: ICourse
    children: ICourse[]
    level: number
    orden: number
    published: boolean
    color: string
    bgColor: string
    image: string
    pdf: string
    youtubeLink: string
    exercises: IExercise
}