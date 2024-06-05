export const styleHandler = (task: ITask) => {
    let merged = false
    
    task.columns?.map((item) => {
        if(item.type === 'merged'){
            merged = true
        }
    })

    return {
        merged
    }
}   