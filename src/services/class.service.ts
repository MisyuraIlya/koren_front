export const classService = {
    async getClassesBySchool(schoolId: number): Promise<IClass[]>{
        const response = await fetch(`/class/${schoolId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    }
}