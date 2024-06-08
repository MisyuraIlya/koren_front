export const DragAndDropExercise = (tab: ITab) => {
    let bankArr:IValue[] = []
    let task: ITask | null = null
    let taskId = 0
    tab.tasks?.map((item) => {
        if(item.specialModuleType.includes('bank') || item.specialModuleType.includes('mixDrag')) {
            item.rows?.map((item2) => {
                item2.objectives?.map((item3) => {
                    if(item3.moduleType ==='bank'){
                        bankArr = item3.values
                    }
                })
            })

            task = item
            taskId = item.id!
        }
    })

    return {bankArr,task, taskId}
 
}