interface IExercise extends Idefinder{
    title: string
    description1: string
    description2: string
    module: number
    youtubeLink: string
    pdf: string
    isInTheBook: boolean
    tabs: ITab[] 
}

interface ITab extends Idefinder {
    title: string
    orden: number
    tasks: ITask[] 
}

interface ITask extends Idefinder {
    orden: number
    columns: IColumnTask[]
    rows: IRowTask[] 
}

interface IColumnTask extends Idefinder {
    title: string
    orden: number
    type: string;
}

interface IRowTask extends Idefinder {
    orden: number
    youtubeLink: string
    pdf: string
    objectives: IObjective[] 
}

interface IObjective extends Idefinder {
    placeholder: string
    moduleType: ModuleType
    orden: number
    isFullText: boolean
    answers: IAnswer[]
    values: IValue[] 
}

interface IAnswer extends Idefinder {
    value: string
    objective: string
}   

interface IValue extends Idefinder {
    value: string
    objective: string
}

type ModuleType = ''