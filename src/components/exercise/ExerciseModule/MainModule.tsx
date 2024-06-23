'use client'
import React, {FC} from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { TaskSplitChecker } from '@/helpers/TaskSplitChecker';
import Task from './Task';
import { useExercise } from '@/provider/ExerciseProvider';
import { DragAndDropExercise } from '@/helpers/DragAndDropExercise.helper';
import ExerciseModule from '.';
import { storyInstucrionHandler } from '@/helpers/StoryInstructionHandler';
import StoryIncsructionSticky from './StoryIncsructionSticky';
interface MainModuleProps {
    item: ITab
    tabIndex: number
}

const MainModule:FC<MainModuleProps> = ({item,tabIndex}) => {
    const {choosedTab} = useExercise()
    const { regular, left, leftScreen, right, rightScreen } = TaskSplitChecker(item.tasks)
    const {bankArr,task: TaskDrag, taskId, IdToAnswer, currentColumns} = DragAndDropExercise(item)
    const {storyLeft,storyRegular,storyRight,iconLeft,iconRegular,iconRight} = storyInstucrionHandler(regular,left,right)
    console.log('storyRegular',storyRegular)
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
                                <Typography>
                                    <StoryIncsructionSticky objective={storyLeft} icon={iconLeft}/>
                                </Typography>
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
                            <Typography>
                                <StoryIncsructionSticky objective={storyRegular} icon={iconRegular}/>
                            </Typography>
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