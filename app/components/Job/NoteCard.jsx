import React from "react";
import { HiPencil } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { deleteNote } from "@/app/utils/slices/notesSlice";
import { useDispatch } from "react-redux";

const NoteCard = ({ note }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(
      deleteNote({
        id: note.id,
      })
    );
  };

  return (
    <div className="bg-white rounded-md shadow-sm">
      <textarea
        name=""
        className="w-full min-h-[100px] p-4 resize-none"
        disabled={true}
        defaultValue={note.title}
      ></textarea>
      <div className="h-[2px] w-full bg-[#DCDCDC] "></div>
      <div className="flex items-center justify-between p-4">
        <span className="flex gap-2">
          <AiOutlineClockCircle className="w-4 h-4 text-[#9E9E9E]" />
          <span className="text-xs text-[#9E9E9E]">a few seconds ago</span>
        </span>
        <span className="flex gap-[10px]">
          <HiPencil className="w-6 h-6 ml-2 cursor-pointer text-primary" />
          <BsTrash
            onClick={() => handleDelete()}
            className="w-6 h-6 ml-2 text-red-500 cursor-pointer"
          />
        </span>
      </div>
    </div>
  );
};

export default NoteCard;
