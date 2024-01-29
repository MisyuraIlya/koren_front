import axios from "axios"

export const AdminExerciseService = {
    async createExercise(data: any): Promise<IExercise> {
        const response = await axios.post(`http://localhost:4001/exercise`,data)
        return response.data
    },

    async updateExercise(id:string, data: IUpdateExerciseDto): Promise<IExercise> {
        const response = await axios.patch(`http://localhost:4001/exercise/${id}`,data)
        return response.data;
    },

    async GetExercise(id: string): Promise<IExercise>{
        const response = await fetch(`http://localhost:4001/exercise/${id}`)
        return response.json()
    },

    async DeleteExercise(id: string): Promise<void> {
        const response = await fetch(`http://localhost:4001/exercise/${id}`,{ method: 'DELETE' })
    },

    async uploadExercise(file: File): Promise<IExercise> {
        const formData = new FormData();
        formData.append('file', file); 
        const response = await axios.post(`http://localhost:4001/engine`, formData);
        return response.data;
    }

}