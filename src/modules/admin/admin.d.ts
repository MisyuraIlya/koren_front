interface ICreateCourseDto {
    name: string
    parentId: number | null
    level: number
    grade?: string
}

interface IUpdateCourseDto {
    name?: string;
    level?: number;
    orden?: number;
    pdf?: string;
    isNotInTheBook?: boolean
}

interface IUpdateExerciseDto {
    youtubeLink?: string | null;
    pdf?: string | null;
}