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



}