
const entry = process.env.NEXT_PUBLIC_APP_ENTRYPOINT

export const ConfirmationService = {
    createConfirmation: async (userId: number, courseId: number):Promise<IConfirmation> => {
        const response = await fetch(`${entry}/confirmation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userId,courseId}),
        });
        return response.json()
    },
    getConfirmation: async (userId: number):Promise<IConfirmation[]> => {
        const response = await fetch(`${entry}/confirmation/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    }
}