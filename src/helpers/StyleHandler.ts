export const styleHandler = (task: ITask) => {
    let merged = false
    let scroll = 0
    let explanation = null
    let isTable = task.specialModuleType === 'table'
    task.columns?.map((item) => {
        if(item.type === 'merged'){
            merged = true
        }
        if(item.type === 'overflow'){
            console.log('task',task)
            scroll = +task.properties.split(":")[1]
        }
        


    })

    return {
        merged,
        scroll,
        isTable
    }
}   