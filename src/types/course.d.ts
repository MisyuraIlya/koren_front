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
    isNotInTheBook: boolean
    exercises: IExercise
    pdfUtilities: IPdfUtilities[]
}

interface IPdfUtilities extends Idefinder {
    name: string
    pdf: string
    orden: number
}