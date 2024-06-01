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

    async createFeedBack(title: string, user: IUser, uuid: string){
        const response = await fetch(`/feed-back-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title,user,uuid}),
        });
        return response.json()
    }

}