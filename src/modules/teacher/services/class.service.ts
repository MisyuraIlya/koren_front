export const classService = {
    async getClassesBySchool(schoolId: number): Promise<IClass[]>{
        const response = await fetch(`http://localhost:4001/class/${schoolId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    }
}