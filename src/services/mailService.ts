export const MailService = {
    async GetMail(id:number) {
        const response = await fetch(`/mail/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json() 
    },
}