import axios from "axios"

export const ExerciseServices = {
    async GetExerciseStudent(id: string, studentId: number): Promise<IExercise>{
        const response = await fetch(`/exercise/${id}/${studentId}`)
        return response.json()
    },

    async handleAnswer(id: number ,studentId: number, historyId: number, value: string): Promise<IExercise>{
        const response = await axios.post(`/student-answer/${id}/${studentId}/${historyId}`,{value})
        return response.data
    },

    async updateHistory(id: number, isDone: boolean, exerciseId: number): Promise<IHistory> {
        const response = await axios.patch(`/student-history/${id}`,{isDone,exerciseId})
        return response.data
    },

    async createHistory(studentId: number, exerciseId: number): Promise<{isNew:boolean, data: IHistory}> {
        const response = await axios.post(`/student-history`,{studentId,exerciseId})
        return response.data
    }

}