import React, {FC} from 'react';
import { Box } from '@mui/material';
import { themeColors } from '@/styles/mui';
import Column from './Column';
import Row from './Row';
import { styleHandler } from '@/helpers/StyleHandler';

interface TaskProps {
    task: ITask
    tabIndex: number
    taskIndex: number
}
const Task:FC<TaskProps> = ({task,tabIndex,taskIndex}) => {


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
    const {merged,scroll} = styleHandler(task)

    return (
        <Box className='bg-secondBlue relative' sx={{background:backgroundColor()}} key={taskIndex}>
            <table className={`TaskStyles ${merged ? "disbleTh" : ""}`}>
                <tbody>
                    <tr className='w-full'>
                        {task?.columns.map((column, columnIndex) => {
                            if(
                                (column?.title && column?.type !=='bank'  && column?.type !=='mixDrag') || 
                                column?.type === 'orden'  || 
                                column?.type === 'word' ||
                                column?.type === 'wordRegular' ||
                                column?.type === 'overflow' || 
                                column.type === 'text'
                            )
                            {
                                return (
                                    <th key={columnIndex} style={{textAlign:'center'}} >
                                        <Column column={column}/>
                                    </th>
                                )
                            }}
                        )}
                    </tr>
                    {task?.rows.map((row, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                            {/* FIX FIND ANOTHER WAY SET  */}
                            <div className={`h-1 absolute z-1 w-full bg-white`} />
                            <Row row={row} tabIndex={tabIndex} taskIndex={taskIndex} rowIndex={rowIndex}/>
                        </React.Fragment>
                    ))}
                    {/* FIX FIND ANOTHER WAY SET  */}
                    <div className='bg-white h-1 w-full z-1 absolute z-10'></div>
                </tbody>
            </table>
        </Box>
    );
};

export default Task;