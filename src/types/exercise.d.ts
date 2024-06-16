interface IExercise extends Idefinder{
    title: string
    description1: string
    description2: string
    course?: ICourse
    courseId: number
    module: number
    youtubeLink: string
    pdf: string
    isInTheBook: boolean
    tabs: ITab[] 
    histories: IHistory[]
    fullPath?: string
    fullLink?: string
    group?: IConnectionGroup
    userGroup?: IExerciseUserConnection
}

interface ITab extends Idefinder {
    title: string
    orden: number
    tasks: ITask[] 
}

interface ITask extends Idefinder {
    orden: number
    specialModuleType: specialModuleType
    properties: string 
    columns: IColumnTask[]
    rows: IRowTask[] 
}

interface IColumnTask extends Idefinder {
    title: string
    orden: number
    type: ModuleType;

    // for dragn and drop
    answers: Array<string>
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
    answers: IStudentAnswer[]

    objective: string

    //FOR DRAG AND DROP
    isCorrect: boolean

}   

interface IValue extends Idefinder {
    value: string
    objective: string
}

interface IObjectiveIndexes {
    tabIndex: number
    taskIndex: number
    rowIndex: number
    objectiveIndex: number
}

interface IObjectiveModule {
    objective: IObjective
    tabIndex: number
    taskIndex: number
    rowIndex: number
    objectiveIndex: number  
}

interface TasksSplit {
    right: ITask[]
    rightScreen: number
    left: ITask[]
    leftScreen: number
    regular: ITask[]
}

type specialModuleType = 'imageRight' | 'mixDrag' | 'copy' | 'splitedScreenLeft' | 'splitedScreenRight' | 'doneSplitedScreenRight' | 'doneSplitedScreenLeft' | 'properties' | 'table' | 'tableClear' | 'video' | 'chart' | 'pdf' | 'explanation' 
type ModuleType = "word" | "orden" | "instruction" | "subInstruction" | "text" | "input" | "selectbox" | "explanation" | "rootInput" | "mix" | "bank" | 'mixDrag' | 'checkBox' | 'imageRight' |  'imageLeft' |'merged' | 'table' | 'questInstruction' | 'openQuestion' | 'mergedExercise' | 'textCopy' | 'headline2' | 'clearText' | 'typedInput' | 'openQuestionHamarot' | 'draftBank' | 'draft' | 'tableClear' | 'video' | 'chart' | 'textCentered' | 'properties' | 'inputCentered' | 'heightSpace' | 'wordBold' | 'ordenBold' | 'story' | 'storyInstruction' | 'storyHeadline' | 'explanationSplited' | 'origin' | 'splitedScreenRight' | 'doneSplitedScreenRight' | 'splitedScreenLeft' | 'doneSplitedScreenLeft' |'numberBold' | 'icon1' | 'icon2' | 'divider' | 'mainHead' | 'secondHead' | 'globalSettings' | 'instructionWhite' | 'border' | 'wordRegular' | 'song' | 'iconDescriptionOne' |'secondHeadWhite' | 'iconDescriptionTwo' | 'circle' | 'overflow' | 'textArea' | 'pdf' |'textModuled' | 'copy'


interface IHistory extends Idefinder, IDate {
    grade: number
    isDone: boolean
    totalQuestions: number
    totalCorrect: number
    totalUncorrect: number
    openQuestions: number
    errorIds: string[]
    openQuestionIds: string[]
}

interface IStudentAnswer extends Idefinder, IDate {
    isCorrect: boolean
    value: string
    grade: number
    gradeToShow: number
}