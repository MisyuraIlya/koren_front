import React, {FC, useEffect} from 'react';
import Column from './Column';
import Row from './Row';
import TaskStyles from '@/styles/Task.module.scss';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Box } from '@mui/material';
import { themeColors } from '@/styles/mui';
import { styleHandler } from '@/helpers/StyleHandler';
interface TaskProps {
    task: ITask
    tabIndex: number
    taskIndex: number

    storySticky: IObjective | null
    iconSticky: IObjective | null
}

const Task:FC<TaskProps> = ({task,tabIndex,taskIndex,storySticky,iconSticky}) => {
    const {setValue} = useAdminExercise()

    const isShowTable = () => {
        if(!storySticky){
            return true
        }
        const isStickyTable = task?.rows?.filter((item) => 
            item.objectives?.some((item2) => item2.values[0]?.value === storySticky?.values[0]?.value)
        );
        return isStickyTable.length == 0
    }

    const backgroundColor = () => {
        const isIcon = task.columns.some((item) => item.type === 'icon1')
        const isIcon2 = task.columns.some((item) => item.type === 'icon2')
        const explanationSplited = task.columns.some((item) => item.type === 'explanationSplited')
        const instructionWhite = task.columns.some((item) => item.type === 'instructionWhite')
        const instruction = task.columns.some((item) => item.type === 'instruction')
        if(isIcon){
            return themeColors.blueOne
        } else if(isIcon2) {
            return themeColors.blueTwo
        } else if(explanationSplited) {
            return 'white'
        } else if(instructionWhite) {
            return 'white'
        } else if(instruction) {
            return themeColors.exerciseMain
        } else {
            return '#EDF2F9'
        }
    }

    useEffect(() => {
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].orden`, task.orden)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].specialModuleType`, task.specialModuleType)
        setValue(`tabs[${tabIndex}].tasks[${taskIndex}].properties`, task.properties)
    },[])
    
    const {merged,scroll} = styleHandler(task)

    return (
    <Box className='bg-secondBlue relative' sx={{background:backgroundColor()}} key={taskIndex}>
        {isShowTable() &&
        <table className={`TaskStyles ${merged ? "disbleTh" : ""}`}>
           <tbody>
               <tr className='w-full'>
                    {task?.columns.map((column, columnIndex) => 
                        <Column column={column} tabIndex={tabIndex} taskIndex={taskIndex} columnIndex={columnIndex}/>
                    )}
               </tr>
               {task?.rows.map((row, rowIndex) => (
                   <React.Fragment key={rowIndex}>
                       {/* FIX FIND ANOTHER WAY SET  */}
                       <div className={`h-1 absolute z-1 w-full bg-white`} />
                       <Row row={row} tabIndex={tabIndex} taskIndex={taskIndex} rowIndex={rowIndex} storySticky={storySticky} iconSticky={iconSticky}/>
                   </React.Fragment>
               ))}
               {/* FIX FIND ANOTHER WAY SET  */}
               <div className='bg-white h-1 w-full z-1 absolute z-10'></div>
           </tbody>
       </table>
        }
     
    </Box>


    );
};

export default Task;