
export const AuthService = {
    async login(obj: LoginForm): Promise<ReposeLogin>{
        const response = await fetch(`/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        return response.json()
    },

    async getUserByTypeAndSchool(type: Role, schoolId: string): Promise<IUser[]> {
        const response = await fetch(`/auth/allUsers/${type}/${schoolId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    },

    async getUsers(){
        const response = await fetch(`/auth/mail`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json() 
    }
    
}
