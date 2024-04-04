
const entry = process.env.NEXT_PUBLIC_APP_ENTRYPOINT

export const AuthService = {
    async login(obj: LoginForm): Promise<IUser>{
        console.log('entry',entry)
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
        const response = await fetch(`${entry}/auth/allUsers/${type}/${schoolId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    }
    
}
