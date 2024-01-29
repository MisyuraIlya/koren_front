interface ICreateCourseDto {
    name: string
    parentId: number | null
    level: number
    grade?: string
}

interface IUpdateExerciseDto {
    youtubeLink?: string | null;
    pdf?: string | null;
}