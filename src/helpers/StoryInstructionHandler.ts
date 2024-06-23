export const storyInstucrionHandler = (regular: ITask[], left:ITask[], right:ITask[]) => {
    let storyLeft = handlerStory(left)
    let storyRegular = handlerStory(regular)
    let storyRight = handlerStory(right)
    let iconLeft = handlerIcon(left)
    let iconRegular = handlerIcon(regular)
    let iconRight = handlerIcon(right)
    

    return {storyLeft,storyRegular,storyRight,iconLeft,iconRegular,iconRight}
}

const handlerStory = (task: ITask[]): IObjective | null => {
    let result: IObjective | null = null;
    
    task?.map((item) => {
        item.rows?.map((item2) => {
            item2?.objectives?.map((item3) => {
                if(item3.moduleType == 'storyInstruction' && result == null){
                    result = item3
                }
            })
        })
    })

    return result
}

const handlerIcon= (task: ITask[]): IObjective | null => {
    let result: IObjective | null = null;

    task?.map((item) => {
        item.rows?.map((item2) => {
            item2?.objectives?.map((item3) => {
                if((item3.moduleType == 'icon1' || item3.moduleType == 'icon2')&& result == null ){
                    result = item3
                }
            })
        })
    })

    return result
}