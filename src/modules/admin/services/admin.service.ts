
export const AdminService = {

    async GetCourses(): Promise<ICourse[]>{
        const response = await fetch(`http://localhost:4001/course`)
        return response.json()
    },

    async GetExercise(id: string): Promise<IExercise>{
        const response = await fetch(`http://localhost:4001/exercise/${id}`)
        return response.json()
    },

    async DeleteCourse(id: string): Promise<void> {
        const response = await fetch(`http://localhost:4001/course/${id}`,{ method: 'DELETE' })
    },

    async DeleteExercise(id: string): Promise<void> {
        const response = await fetch(`http://localhost:4001/exercise/${id}`,{ method: 'DELETE' })
    },

    async CreateCourse(obj: ICreateCourseDto): Promise<void> {
        const response = await fetch(`http://localhost:4001/course`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
    },

    async UpdateSortable(courses: ICourse[]): Promise<void> {
        const response = await fetch(`http://localhost:4001/course/sortable`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(courses),
        });
    }
}