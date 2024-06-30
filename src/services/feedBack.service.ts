export const FeedBackService = {
    async getFeedBack(): Promise<IFeedBack[]>{
        const response = await fetch(`/feed-back-main`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json()
    },

    async createFeedBackItem(userId:number, title:string, type:string): Promise<IFeedBackItem> {
        const response = await fetch(`/feed-back-item/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({title,type})
        });
        return response.json()
    }



}