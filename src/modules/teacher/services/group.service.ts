
const entry = process.env.NEXT_PUBLIC_APP_ENTRYPOINT

export const GroupService = {
    async createGroup(
        teacherId: number,
        title: string,
        role: GroupType,
        classes: string[],
        privilageType: PrivilageType, 
        isUnique: boolean = false,
        teachers?: string[],
        students?: string[],

    ){
        const response = await fetch(`${entry}/group/${teacherId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, role, classes, privilageType,isUnique,students, teachers }),
        });
        return response.json()
    },

    async findByTeacherId(teacherId: number): Promise<ITeacherGroup[]>{
        const response = await fetch(`${entry}/group/teacher/${teacherId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    },
}
