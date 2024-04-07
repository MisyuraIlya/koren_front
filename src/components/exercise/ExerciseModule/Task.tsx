import React, {FC} from 'react';
import { Box } from '@mui/material';
import { themeColors } from '@/styles/mui';
import Column from './Column';
import Row from './Row';
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
        
        if(isIcon){
            return themeColors.blueOne
        } else if(isIcon2) {
            return themeColors.blueTwo
        } else if(explanationSplited) {
            return 'white'
        } else if(instructionWhite) {
            return 'white'
        } else {
            return themeColors.exerciseMain
        }
    }
    return (
        <Box className='bg-secondBlue relative' sx={{background:backgroundColor()}} key={taskIndex}>
            <table className={'TaskStyles'}>
                <tbody>
                    <tr className='w-full'>
                        {task?.columns.map((column, columnIndex) => 
                            <Column column={column} columnIndex={columnIndex}/>
                        )}
                    </tr>
                    {task?.rows.map((row, rowIndex) => 
                        <>
                        <div className={`h-1 absolute z-1 w-full bg-white`} key={rowIndex}></div>       
                        <Row row={row} tabIndex={tabIndex} taskIndex={taskIndex} rowIndex={rowIndex}/>
                        </>
                    )}
                    <div className='bg-white h-1 w-full z-1 absolute z-10'></div>
                </tbody>
            </table>
        </Box>
    );
};

export default Task;