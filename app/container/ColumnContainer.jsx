"use client";
import dynamic from "next/dynamic";
import React from "react";
const Col = dynamic(() => import("./Column"), { ssr: false });
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import {
  updateWholeState,
  selectCards,
  addColumn,
} from "../utils/slices/card";
import { useDispatch } from "react-redux";

const ColumnContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectCards);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];
    // Moving within the same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      dispatch(
        updateWholeState({
          tasks: newState.tasks,
          columns: newState.columns,
          columnOrder: newState.columnOrder,
        })
      );

      return;
    } else {
      // Moving from one column to another
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      dispatch(
        updateWholeState({
          tasks: newState.tasks,
          columns: newState.columns,
          columnOrder: newState.columnOrder,
        })
      );
    }
  };

  const AddColumn = () => {
    let columnId = `column-${state.columnOrder.length + 1}`;
    dispatch(
      addColumn({
        id: columnId,
        title: columnId,
      })
    );
  };

  return (
    <div className="flex h-full gap-3 overflow-x-scroll overflow-y-hidden">
      <DragDropContext onDragEnd={onDragEnd}>
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
          return <Col key={column.id} column={column} tasks={tasks} />;
        })}
        <button
          onClick={() => AddColumn()}
          className="mt-5 outline-none p-5 bg-primary h-fit text-center text-white rounded-md min-w-[320px]"
        >
          Create New Column
        </button>
      </DragDropContext>
    </div>
  );
};

export default ColumnContainer;
