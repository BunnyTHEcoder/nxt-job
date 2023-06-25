import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show", messages: 25 },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Charge my phone" },
    "task-5": { id: "task-5", content: "Charge my phone" },
    "task-6": { id: "task-6", content: "Charge my phone" },
  },

  columns: {
    "column-1": {
      id: "column-1",
      title: "Saved",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "Applied",
      taskIds: ["task-4"],
    },
    "column-3": {
      id: "column-3",
      title: "Interviewing",
      taskIds: ["task-5"],
    },
    "column-4": {
      id: "column-4",
      title: "Offer",
      taskIds: ["task-6"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { id, url, title, company, column } = action.payload;
      state.tasks[id] = { id, url, title, company };
      state.columns[column].taskIds.push(id);
    },
    deleteCard: (state, action) => {
      const { id, column } = action.payload;
      const columnId = state.columns[column].taskIds;
      const index = columnId.indexOf(id);
      if (index > -1) {
        columnId.splice(index, 1);
      }
      delete state.tasks[id];
    },
    addColumn: (state, action) => {
      const { id, title } = action.payload;
      state.columns[id] = { id, title, taskIds: [] };
      state.columnOrder.push(id);
    },

    updateWholeState: (state, action) => {
      const { tasks, columns, columnOrder } = action.payload;
      state.tasks = tasks;
      state.columns = columns;
      state.columnOrder = columnOrder;
    },
  },
});

export const { addCard, deleteCard, addColumn, updateWholeState } =
  cardSlice.actions;

export const selectCards = (state) => state.card;

export default cardSlice.reducer;
