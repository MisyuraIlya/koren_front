
export const AuthService = {
    async login(obj: LoginForm): Promise<IUser>{
        const response = await fetch(`http://localhost:4001/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        return response.json()
    },

    async getUserByTypeAndSchool(type: Role, schoolId: string): Promise<IUser[]> {
        const response = await fetch(`http://localhost:4001/auth/allUsers/${type}/${schoolId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    }
    
}
