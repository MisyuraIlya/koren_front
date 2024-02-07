import axios from "axios"

export const StudentExerciseServices = {
    async GetExerciseStudent(id: string, studentId: number): Promise<IExercise>{
        const response = await fetch(`http://localhost:4001/exercise/${id}/${studentId}`)
        return response.json()
    },

    async handleAnswer(id: number ,studentId: number, historyId: number, value: string): Promise<IExercise>{
        const response = await axios.post(`http://localhost:4001/student-answer/${id}/${studentId}/${historyId}`,{value})
        return response.data
    },

    async updateHistory(id: number, isDone: boolean): Promise<IHistory> {
        const response = await axios.patch(`http://localhost:4001/student-history/${id}`,{isDone})
        return response.data
    }
}