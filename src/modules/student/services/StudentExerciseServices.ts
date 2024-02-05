export const StudentExerciseServices = {
    async GetExerciseStudent(id: string, studentId: number): Promise<IExercise>{
        const response = await fetch(`http://localhost:4001/exercise/${id}/${studentId}`)
        return response.json()
    },
}