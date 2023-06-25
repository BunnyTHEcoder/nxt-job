import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { IoDocumentTextOutline } from "react-icons/io5";
import NoteCard from "./NoteCard";
import NotesContainer from "@/app/container/NotesContainer";

const Notes = () => {
  const [addNote, setAddNote] = React.useState(false);

  return (
    <Tabs.Content
      value="3"
      className="flex flex-col h-[460px] -z-10 w-full absolute top-0 left-0 gap-5 data-[state=active]:z-10 p-5"
    >
      <div className="flex justify-between">
        <span className="text-lg font-bold">Notes</span>

        <button
          className="bg-[#57A4F2] py-[6px] ml-[10px] font-semibold px-8 rounded-md text-white"
          onClick={() => setAddNote(!addNote)}
        >
          Create New Note
        </button>
      </div>

      <NotesContainer addNote={addNote} setAddNote={setAddNote} />
    </Tabs.Content>
  );
};

export default Notes;
