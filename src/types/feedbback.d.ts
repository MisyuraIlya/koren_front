interface IFeedBack {
    id: number
    title:string
    type: 'negative' | 'positive'
    items: IFeedBackItem[]
}

interface IFeedBackItem {
    id: number
    title: string
}