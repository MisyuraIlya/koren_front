export const ConfirmationService = {
    createConfirmation: async (userId: number, courseId: number):Promise<IConfirmation> => {
        const response = await fetch(`/confirmation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userId,courseId}),
        });
        return response.json()
    },
    getConfirmation: async (userId: number):Promise<IConfirmation[]> => {
        const response = await fetch(`/confirmation/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    }
}