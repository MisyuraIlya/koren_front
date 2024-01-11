interface IExercise extends Idefinder{
    title: string
    description1: string
    description2: string
    courseId: number
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
    specialModuleType: specialModuleType
    properties: string 
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

type specialModuleType = 'draggenDrop' | 'imageRight' | 'video' | 'pdf'
type ModuleType = "word" | "orden" | "instruction" | "subInstruction" | "text" | "input" | "selectbox" | "explanation" | "rootInput" | "mix" | "bank" | 'mixDrag' | 'checkBox' | 'imageRight' |  'imageLeft' |'merged' | 'table' | 'questInstruction' | 'openQuestion' | 'mergedExercise' | 'textCopy' | 'headline2' | 'clearText' | 'typedInput' | 'openQuestionHamarot' | 'draftBank' | 'draft' | 'tableClear' | 'video' | 'chart' | 'textCentered' | 'properties' | 'inputCentered' | 'heightSpace' | 'wordBold' | 'ordenBold' | 'story' | 'storyInstruction' | 'storyHeadline' | 'explanationSplited' | 'origin' | 'splitedScreenRight' | 'doneSplitedScreenRight' | 'splitedScreenLeft' | 'doneSplitedScreenLeft' |'numberBold' | 'icon1' | 'icon2' | 'divider' | 'mainHead' | 'secondHead' | 'globalSettings' | 'instructionWhite' | 'border' | 'wordRegular' | 'song' | 'iconDescriptionOne' |'secondHeadWhite' | 'iconDescriptionTwo' | 'circle' | 'overflow' | 'textArea' | 'pdf' |'textModuled' | 'copy'