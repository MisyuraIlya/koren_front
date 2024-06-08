'use client';
import { Box, Grid } from '@mui/material';
import React, { FC, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';


type DragAndDropModuleProps = {
  bankArr: IValue[];
  task: ITask | null;
};

const DragAndDropModule: FC<DragAndDropModuleProps> = ({ bankArr, task }) => {
  const initialColumns = task?.columns.map(col => ({ ...col, items: [] })) ?? [];
  const [bankItems, setBankItems] = useState(bankArr);
  const [taskColumns, setTaskColumns] = useState(initialColumns);
  
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
         //@ts-ignore
      sourceItems = Array.from(taskColumns.find(col => col.id === sourceDroppableId)?.items || []);
    }

    if (destinationDroppableId === 'bank') {
      destinationItems = Array.from(bankItems);
    } else {
         //@ts-ignore
      destinationItems = Array.from(taskColumns.find(col => col.id === destinationDroppableId)?.items || []);
    }

    const [removedItem] = sourceItems.splice(source.index, 1);

    // Check for duplicates in destination
    if (destinationItems.some(item => item.value === removedItem.value)) {
      return;
    }

    destinationItems.splice(destination.index, 0, removedItem);

    if (sourceDroppableId === 'bank') {
      setBankItems(sourceItems);
    } else {
         //@ts-ignore
      setTaskColumns(taskColumns.map(col => col.id === sourceDroppableId ? { ...col, items: sourceItems } : col));
    }

    if (destinationDroppableId === 'bank') {
      setBankItems(destinationItems);
    } else {
      // Remove the item from all other columns
      //@ts-ignore
      setTaskColumns(taskColumns.map(col => {
         //@ts-ignore
        if (col.id === destinationDroppableId) {
          return { ...col, items: destinationItems };
        } else {
            //@ts-ignore
          return { ...col, items: col.items.filter(item => item.value !== removedItem.value) };
        }
      }));
    }
  };

  return (
    <Box>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container sx={{ width: '100%' }}>
          <Droppable droppableId="bank">
            {(provided) => (
              <Grid
                item
                xs={3}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="bg-[#BACEE9] fontSizeExercise py-2 px-4 text-center">מחסן מילים</h2>
                {bankItems.map((item, index) => (
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
                ))}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
          <Grid item xs={9} container>
          {taskColumns.map((col) => (
             //@ts-ignore
            <Droppable key={col.id} droppableId={col.id}>
              {(provided) => (
                <Grid
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  item
                  xs={3}
                >
                  <h2 className="bg-[#BACEE9] fontSizeExercise py-2 px-4 text-center" dangerouslySetInnerHTML={{ __html: col.title ?? '' }} />
                  {col.items.map((item, index) => (
                     //@ts-ignore
                    <Draggable key={item.value} draggableId={item.value} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white m-2 text-center px-1 rounded-md w-auto fontSizeExercise"
                        >
                            {/* @ts-ignore */}
                          {item.value}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Grid>
              )}
            </Droppable>
          ))}
          </Grid>

        </Grid>
      </DragDropContext>
    </Box>
  );
};

export default DragAndDropModule;
