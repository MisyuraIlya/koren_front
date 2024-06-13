'use client';
import { useExercise } from '@/provider/ExerciseProvider';
import { Box, Card, Grid, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';


type DragAndDropModuleProps = {
  bankArr: IValue[];
  task: ITask | null;
  IdToAnswer: number
  currentColumns: any
};

const DragAndDropModule: FC<DragAndDropModuleProps> = ({ bankArr, task, IdToAnswer,currentColumns }) => {
  const initialColumns = task?.columns.map(col => ({ ...col, items: [] })) ?? [];
  const [bankItems, setBankItems] = useState(bankArr);

  const handleState:any = () => {

    if(currentColumns) {
      const deleteFroBank:string[] = []
      initialColumns?.map((item:any) => {
        currentColumns?.map((item2:any) => {
          if(item.title == item2.table){
            item.items = item2.values
            item2.values?.map((item3:any) => {
              deleteFroBank.push(item3.value)
            })
          }
        }) 
      })
    
      return initialColumns
    } else {
      return initialColumns
    }
  }

  const [taskColumns, setTaskColumns] = useState(handleState());
  const {handleAnswer} = useExercise()
  

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceDroppableId = source.droppableId;
    const destinationDroppableId = destination.droppableId;

    if (sourceDroppableId === destinationDroppableId && source.index === destination.index) {
      return;
    }

    let sourceItems, destinationItems;
    if (sourceDroppableId === 'bank') {
      sourceItems = Array.from(bankItems);
    } else {
      // @ts-ignore
      sourceItems = Array.from(taskColumns.find(col => col.id === sourceDroppableId)?.items || []);
    }

    if (destinationDroppableId === 'bank') {
      destinationItems = Array.from(bankItems);
    } else {
      // @ts-ignore
      destinationItems = Array.from(taskColumns.find(col => col.id === destinationDroppableId)?.items || []);
    }

    const [removedItem] = sourceItems.splice(source.index, 1);

    // Check for duplicates in destination
    // @ts-ignore
    if (destinationItems.some(item => item.value === removedItem.value)) {
      return;
    }

    destinationItems.splice(destination.index, 0, removedItem);

    let newTaskColumns = taskColumns;

    if (sourceDroppableId === 'bank') {
      // @ts-ignore
      setBankItems(sourceItems);
    } else {
      // @ts-ignore
      newTaskColumns = newTaskColumns.map(col => col.id === sourceDroppableId ? { ...col, items: sourceItems } : col);
    }

    if (destinationDroppableId === 'bank') {
      // @ts-ignore
      setBankItems(destinationItems);
    } else {
      // Remove the item from all other columns
      // @ts-ignore
      newTaskColumns = newTaskColumns.map(col => {
        // @ts-ignore
        if (col.id === destinationDroppableId) {
          return { ...col, items: destinationItems };
        } else {
          // @ts-ignore
          return { ...col, items: col.items.filter(item => item.value !== removedItem.value) };
        }
      });
    }

    setTaskColumns(newTaskColumns);
    console.log('newTaskColumns',newTaskColumns)
    // Log the updated taskColumns state
    // @ts-ignore
    newTaskColumns.forEach(task => {
      // @ts-ignore
      const answerSet = new Set(task.answers.filter(answer => answer !== ""));
      // @ts-ignore
      const itemSet = new Set(task.items.map(item => item.value));
      // @ts-ignore
      const allAnswersExistInItems = [...answerSet].every(answer => itemSet.has(answer));
      // @ts-ignore
      task.isCorrect = allAnswersExistInItems
  });
  // @ts-ignore
    const resultValue = newTaskColumns.map(task => {
        // Join the item values into a single string
        // @ts-ignore
        const itemsString = task.items.map(item => item.value!).join(", ");
        // Return the formatted string
        return `${task.title}: ${itemsString}`;
    }).join(" @ ");

    // @ts-ignore
    const isAllCorrect = newTaskColumns.every(item => item.isCorrect);
    // @ts-ignore
    handleAnswer({id:IdToAnswer},resultValue,isAllCorrect,'bank')
  };

  useEffect(() => {
    const deleteFroBank:string[] = []
    initialColumns?.map((item:any) => {
      currentColumns?.map((item2:any) => {
        if(item.title == item2.table){
          item.items = item2.values
          item2.values?.map((item3:any) => {
            deleteFroBank.push(item3.value)
          })
        }
      }) 
    })
      const filteredItems = bankItems.filter(item => !deleteFroBank.includes(item.value));
      setBankItems(filteredItems)
  },[])


  return (
    <Box sx={{padding:'20px', minHeight:'450px'}}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container sx={{ width: '100%' }} spacing={2}>
          <Droppable droppableId="bank">
            {(provided) => (
              <Grid
                item
                xs={3}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="bg-[#BACEE9] fontSizeExercise py-2 px-4 text-center">מחסן מילים</h2>
                <Grid container spacing={2} sx={{mt:'10px', mb:'10px'}}>
                  {bankItems.map((item, index) => (
                    <Draggable key={item.value} draggableId={item.value} index={index}>
                      {(provided) => (
                        <Grid
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          item 
                          xs={6}
                        >
                          <Card sx={{bgcolor:'white', textAlign:'center'}}>
                            <Typography variant='h5' sx={{padding:'15px'}}>
                            {item.value}
                            </Typography>
                          </Card>
                        </Grid>
                      )}
                    </Draggable>
                  ))}
                </Grid>
        
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
          <Grid item xs={9} container spacing={2}>
             {/* @ts-ignore */}
          {taskColumns.map((col) => (
            <Droppable key={col.id} droppableId={col.id}>
              {(provided) => (
                <Grid
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  item
                  xs={3}
                >
                  <h2 className="bg-[#BACEE9] fontSizeExercise py-2 px-4 text-center" dangerouslySetInnerHTML={{ __html: col.title ?? '' }} />
                  {/* @ts-ignore */}
                  {col.items.map((item, index) => {
                    return(
                      <Draggable key={item.value} draggableId={item.value} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white m-2 text-center px-1 rounded-md w-auto fontSizeExercise"
                          >
                            {item.value}
                          </div>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </Grid>
              )}
            </Droppable>
          ))}
          </Grid>

        </Grid>
      </DragDropContext>

      {/* {taskColumns?.map((item) => 
        <div>
          <h2 className="bg-[#BACEE9] fontSizeExercise py-2 px-4 text-center" dangerouslySetInnerHTML={{ __html: item.title ?? '' }} />
          {item.items?.map((item2,index) => 
            <div>
              index: {index}
              {item2}
            </div>
          )}
        </div>
      )} */}
    </Box>
  );
};

export default DragAndDropModule;
