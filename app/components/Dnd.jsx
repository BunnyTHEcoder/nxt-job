"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/dndcard/logo.svg";
import HouseIcon from "../../public/assets/dndcard/house.svg";
import ClipIcon from "../../public/assets/dndcard/clip.svg";
import Docicon from "../../public/assets/dndcard/doc.svg";
import Messageicon from "../../public/assets/dndcard/message.svg";
import MessageiconR from "../../public/assets/dndcard/messageR.svg";
import { Draggable } from "react-beautiful-dnd";
import * as Dialog from "@radix-ui/react-dialog";
import JobContainer from "../container/JobContainer";
import { motion } from "framer-motion";

import {
  DeletePop,
  ResumePop,
  CoverPop,
  MockPop,
  Resume1Pop,
} from "./Popups";

const DndCards = ({ index, task }) => {
  return (
    <Dialog.Root>
      {/* <Dialog.Trigger> */}
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            className="bg-white rounded-md "
          >
            <div className="p-[10px] flex flex-col gap-[10px]">
              <div className="flex gap-[10px] items-center">
                <span className="text-xs font-bold text-quinary">
                  Saved By Loop
                </span>
                <span className="text-[10px] font-normal mr-auto text-senary">
                  Expired in 2 days
                </span>
                {/* <Image className='ml-auto justify-self-end' alt='menu' src={Menuicon} /> */}
                <DeletePop />
              </div>
              <Dialog.Trigger>
                <div className="flex gap-[10px] items-center">
                  <Image alt="logo" src={Logo} width={24} height={24} />
                  <div className="flex flex-col font-normal">
                    <span className="inline-block text-sm text-start ">
                      UI/UX Designer
                    </span>
                    <span className="flex items-center gap-[10px]">
                      <Image alt="house" src={HouseIcon} />
                      <span className="text-xs text-[#AFAFAF]">
                        Ajmera Infotech Inc.
                      </span>
                    </span>
                  </div>
                </div>
              </Dialog.Trigger>
              <div className="flex items-center mt-[10px] gap-[10px]">
                <ResumePop>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 px-3 py-2 bg-green-100 rounded-md"
                  >
                    <Image alt="clip" src={ClipIcon} />
                    <span className="text-xs">75%</span>
                  </motion.span>
                </ResumePop>
                <CoverPop>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className=""
                  >
                    <Image alt="doc" src={Docicon} />
                  </motion.span>
                </CoverPop>
                {task.messages ? (
                  <Resume1Pop>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-2 px-3 py-2 bg-red-100 rounded-md"
                    >
                      <Image alt="message" src={MessageiconR} />
                      <span className="text-xs">{task.messages}%</span>
                    </motion.span>
                  </Resume1Pop>
                ) : (
                  <MockPop>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className=""
                    >
                      <Image alt="message" src={Messageicon} />
                    </motion.span>
                  </MockPop>
                )}
              </div>
            </div>
          </div>
        )}
      </Draggable>
      {/* </Dialog.Trigger> */}
      <Dialog.Portal className="z-20">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <JobContainer />
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DndCards;
