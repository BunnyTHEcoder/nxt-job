import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const { title, time } = action.payload;
      const id = state.length + 1;
      state.push({ id, title, time });
    },
    deleteNote: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((note) => note.id === id);
      state.splice(index, 1);
    },
  },
});
export const selectNotes = (state) => state.notes;
export const { addNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
