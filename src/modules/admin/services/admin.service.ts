import axios from "axios"

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
        return response.json()
    },

    async DeleteExercise(id: string): Promise<void> {
        const response = await fetch(`http://localhost:4001/exercise/${id}`,{ method: 'DELETE' })
        return response.json()
    }
}