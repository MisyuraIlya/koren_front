
export const AdminCourseService = {
    async GetCourses(userId: number): Promise<ICourse[]>{
        const response = await fetch(`http://localhost:4001/course/${userId}`)
        return response.json()
    },

    async DeleteCourse(id: string): Promise<void> {
        const response = await fetch(`http://localhost:4001/course/${id}`,{ method: 'DELETE' })
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
    },

    async UpdateCourse(id: string, obj: IUpdateCourseDto): Promise<ICourse> {
        const response = await fetch(`http://localhost:4001/course/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        return response.json() 
    }
}