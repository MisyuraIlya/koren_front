export const MailService = {
    async GetMail(id: number, page: string = '1', search: string | null | undefined) {
        let url = `/mail/${id}?page=${page}`;
        if (search) {
            url += `&search=${encodeURIComponent(search)}`;
        }
    
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        return response.json();
    },

    async createMail(senderId:number, obj:DtoMail, type?:MailTypes, exerciseId?: number){
        const response = await fetch(`/mail/${senderId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({...obj,type,exerciseId})
        });
        return response.json() 
    },

    async GetChat(uuid: string){
        const response = await fetch(`/mail-chat/${uuid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json() 
    },

    async createChatMessage(description:string, senderId:number, uuid: string) {
        const response = await fetch(`/mail-chat/${senderId}/${uuid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({description})
        });
        return response.json() 
    },

    async getUnreadedMessages(userId: number): Promise<IMail[]>{
        const response = await fetch(`/mail/undreaded/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json() 
    },

    async updateReadMail(uuid:string, userId: number): Promise<IMail> {
        const response = await fetch(`/mail/${uuid}/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()  
    },

    async getFeedBack(userId:number, exerciseId:number):Promise<IMail> {
        const response = await fetch(`/mail/feedback/${userId}/${exerciseId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()  
    }
}