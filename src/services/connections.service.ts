export const connectionServices = {
    async getConnectionGroup(groupUuid: string, exerciseTypeId: string, exerciseId: number, teacherId: number):Promise<IConnectionGroup>{
        const response = await fetch(`/exercise-group-connection/${groupUuid}/${exerciseTypeId}/${exerciseId}/${teacherId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    },
    async createConnectionGroup(groupUuid:string,exerciseTypeId:string,exerciseId:number,teacherId:number,fromDate: Date, toDate: Date, time: string, students: IUser[]){
        const response = await fetch(`/exercise-group-connection`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ groupUuid, exerciseTypeId, exerciseId, teacherId,fromDate,toDate,time, students }),
        });
        return response.json()
    },
    async deleteConnectionGroup(id:number){
        const response = await fetch(`/exercise-group-connection/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    },
    async deleteConnectionGroupAnswer(id:number){
        const response = await fetch(`/exercise-group-connection/answer/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    },
    async createConnectionGroupAnswer(exerciseGroupConnectionId:number,answerType:string,students:IUser[], dueDate?: Date, time?: string) {
        const response = await fetch(`/exercise-group-connection/answer/${exerciseGroupConnectionId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({answerType, students, dueDate, time}),
        });
        return response.json()
    },


    async getTeacherConnectionGroup(teacherId: number):Promise<IConnectionGroup[]>{
        const response = await fetch(`/exercise-group-connection/teacher/${teacherId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    },

    async resendExercise(id:number){
        const response = await fetch(`/exercise-user-connection/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    }
}