

const entry = process.env.NEXT_PUBLIC_APP_ENTRYPOINT

export const classService = {
    async getClassesBySchool(schoolId: number): Promise<IClass[]>{
        const response = await fetch(`${entry}/class/${schoolId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    }
}