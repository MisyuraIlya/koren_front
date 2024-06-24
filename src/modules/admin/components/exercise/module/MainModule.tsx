import React, {FC} from 'react';
import Task from './Task';
import { useEffect } from 'react';
import { useAdminExercise } from '@/modules/admin/provider/AdminExerciseProvider';
import { Box, Container, Grid } from '@mui/material';
import { TaskSplitChecker } from '@/helpers/TaskSplitChecker';
import { DragAndDropExercise } from '@/helpers/DragAndDropExercise.helper';
import { storyInstucrionHandler } from '@/helpers/StoryInstructionHandler';
import StoryIncsructionSticky from '@/components/exercise/ExerciseModule/StoryIncsructionSticky';
import ExerciseModule from '@/components/exercise/ExerciseModule';
interface MainModuleProps {
    item: ITab
    tabIndex: number
}
const MainModule:FC<MainModuleProps> = ({item,tabIndex}) => {
    const {setValue, choosedTab} = useAdminExercise()
    
    useEffect(() => {
        setValue(`tabs[${tabIndex}].orden`, item.orden)
        setValue(`tabs[${tabIndex}].title`, item.title)
    },[])
    const { regular, left, leftScreen, right, rightScreen } = TaskSplitChecker(item.tasks)
    const {bankArr,task: TaskDrag, taskId, IdToAnswer, currentColumns} = DragAndDropExercise(item)
    const {storyLeft,storyRegular,storyRight,iconLeft,iconRegular,iconRight} = storyInstucrionHandler(regular,left,right)
    return (
        <Box style={{ display: choosedTab === tabIndex ? '' : 'none' }} key={tabIndex}>
            <Grid container spacing={1}>
                {right?.length > 0 &&
                <Grid item xs={rightScreen} sx={{ position: "relative" }}>
                    <Box sx={{height:storyRight ? '80vh' : 'auto', overflow:'auto'}}>
                        {storyRight &&
                        <Box sx={{ position: 'sticky', top: '0px', zIndex: 200}}>
                            <StoryIncsructionSticky objective={storyRight} icon={iconRight}/>
                        </Box>
                        }
                    {right.map((task, taskIndex) => 
                        <Task task={task} tabIndex={tabIndex} taskIndex={taskIndex} storySticky={storyRight} iconSticky={iconRight}/>
                    )}
                    </Box>
                </Grid>
                }
                {left?.length > 0 &&
                <Grid item xs={leftScreen}>
                    <Box sx={{height: storyLeft ?'80vh':'auto', overflow:'auto'}}>
                        {storyLeft &&
                            <Box sx={{ position: 'sticky', top: '0px', zIndex: 200}}>
                                <StoryIncsructionSticky objective={storyLeft} icon={iconLeft}/>
                            </Box>
                        }
                        {left.map((task, taskIndex) => 
                            <Task task={task} tabIndex={tabIndex} taskIndex={taskIndex} storySticky={storyLeft} iconSticky={iconLeft}/>
                        )}
                    </Box>
                </Grid>
                }

            </Grid>
            {regular?.length > 0 &&
            <Grid item xs={12} >
                <Box sx={{height:storyRegular?'80vh':'auto', overflow:'auto'}}>
                    {storyRegular &&
                        <Box sx={{ position: 'sticky', top: '0px', zIndex: 200}}>
                            <StoryIncsructionSticky objective={storyRegular} icon={iconRegular}/>
                        </Box>
                    }
                    {regular.map((task, taskIndex) => 
                        <Box key={taskIndex}>
                            <>
                            <Task task={task} tabIndex={tabIndex} taskIndex={taskIndex} storySticky={storyRegular} iconSticky={iconRegular}/>
                            {task.id == taskId && 
                                <ExerciseModule.DragAndDropModule bankArr={bankArr} task={TaskDrag} IdToAnswer={IdToAnswer} currentColumns={currentColumns}/>
                            }
                            </>
                        </Box>
                    )}
                </Box>
            </Grid>
            }
        </Box>
    );
};

export default MainModule;