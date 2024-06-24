export const DragAndDropExercise = (tab: ITab) => {
    let bankArr:IValue[] = []
    let task: ITask | null = null
    let taskId = 0
    let IdToAnswer = 0
    let currentColumns: any = [];

    tab.tasks?.map((item) => {
        if(item.specialModuleType?.includes('bank') || item.specialModuleType?.includes('mixDrag')) {
            item.rows?.map((item2) => {
                item2.objectives?.map((item3) => {
                    if(item3.moduleType ==='bank'){
                        bankArr = item3.values
                        IdToAnswer = item3.id!
                        const current = item3.answers[0]?.answers?.[0].value.split('@')?.map((cur) => {
                            const split = cur.split(':')
                            const obj = {
                                table: split[0].trim(),
                                values: split[1]?.split(',').map((value:any, index:number) => ({ id: index, value: value.trim() }))
                            }
                            return obj
                        })
                        currentColumns = current
                    }

                    if(item3?.moduleType === 'mixDrag' && !task){
                        task = item
                    } 
                })
            })

            taskId = item.id!
        }
    })
    
    if(task) {
        const allAnswers: string[] = [];

        (task as ITask)?.rows?.forEach((item2: any) => {
            item2?.objectives?.forEach((item3: any) => {
                if (item3?.answers[0]?.value !== undefined) {
                    allAnswers.push(item3?.answers?.[0]?.value);
                }
            });
        });
        
        (task as any)?.columns?.map((item:any,index:number) => {
            item.answers = []
   
        })


        allAnswers.forEach((answer, index) => {
            const columnIndex = index % task!?.columns!.length;
            task!?.columns[columnIndex].answers.push(answer);
        });

    }

    return {bankArr,task, taskId, IdToAnswer, currentColumns}
 
}