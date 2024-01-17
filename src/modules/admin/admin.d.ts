interface ICreateCourseDto {
    name: string
    parentId: number | null
    level: number
    grade?: string
}