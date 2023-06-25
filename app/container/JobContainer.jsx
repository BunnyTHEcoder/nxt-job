"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CheckIcon, ChevronDownIcon, Cross2Icon } from "@radix-ui/react-icons";
import JobIcon from "../../public/assets/jobcontainer/joblogo.svg";
import Image from "next/image";
import { BiBuildingHouse } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import * as Select from "@radix-ui/react-select";
import ClipIcon from "../../public/assets/dndcard/clip.svg";
import DocIcon from "../../public/assets/dndcard/doc1.svg";
import MessageIcon from "../../public/assets/dndcard/message1.svg";
import JobInner from "./JobIer";
import { motion } from "framer-motion";
import { ResumePop } from "../components/Popups";

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className="relative flex items-center px-6 py-3 text-sm leading-none rounded-md cursor-default group hover:bg-secondary hover:text-black"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute group-hover:bg-secondary left-0 w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";

const JobContainer = () => {
  const vaiants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };
  return (
    <Dialog.Content className="fixed z-[20] top-1/2 left-1/2 flex pb-10 flex-col gap-5 -translate-x-1/2 -translate-y-1/2 outline-none w-[1200px] max-h-[760px] overflow-hidden rounded-md bg-white">
      <Dialog.Close>
        <Cross2Icon className="absolute w-5 h-5 cursor-pointer top-4 right-4" />
      </Dialog.Close>
      <ContainerTop />
      <div className=" border-y">
        <span className="flex my-5 mx-10 text-xs font-normal gap-[10px] text-[#9E9E9E]">
          <ResumePop>
            <motion.span
              variants={vaiants}
              initial="initial"
              animate="animate"
              className="flex items-center gap-[10px] px-[7px] py-2 rounded-sm bg-green-100"
            >
              <Image alt="ClipIcon" src={ClipIcon} />
              <span className="text-green-600">Resume Name 75%</span>
            </motion.span>
          </ResumePop>
          <ResumePop>
            <motion.span
              variants={vaiants}
              initial="initial"
              animate="animate"
              className="flex items-center px-[7px] border gap-[10px] py-2 rounded-sm"
            >
              <Image alt="DocIcon" src={DocIcon} />
              <span>Cover Letter Name</span>
            </motion.span>
          </ResumePop>
          <ResumePop>
            <motion.span
              variants={vaiants}
              initial="initial"
              animate="animate"
              className="flex items-center px-[7px] border gap-[10px] py-2 rounded-sm"
            >
              <Image alt="MessageIcon" src={MessageIcon} />
              <span>Mock Interview</span>
            </motion.span>
          </ResumePop>
        </span>
      </div>
      <JobInner />
    </Dialog.Content>
  );
};

export default JobContainer;

const ContainerTop = () => (
  <div className="mx-[40px] mt-[20px] ">
    <div className="flex gap-[10px] ">
      <Image alt="jobicon" src={JobIcon} />
      <div className="flex flex-col gap-[6px]">
        <span className="text-lg font-semibold">
          UI/UX Designer (Mobile Apps)
        </span>
        <span className="flex items-center min-w-max gap-[11.5px] text-[#5A5A5A] text-xs font-normal ">
          <span className="flex gap-[6.5px] items-center">
            <BiBuildingHouse className="w-[14.6px] h-[12px]" />
            <span>PIXSTER STUDIO</span>
          </span>
          <span className="flex gap-[6.5px] items-center">
            <MdLocationOn className="w-[12px] h-[14px]" />
            <span>Ahmedabad, Gujarat, India</span>
          </span>
          <span className="flex gap-[6.5px] items-center">
            <AiFillDollarCircle className="w-[13px] h-[13px]" />
            <span>Ahmedabad, Gujarat, India</span>
          </span>
          <span className="font-bold cursor-pointer text-primary">
            View Job Details
          </span>
        </span>
        <span className="text-[#9E9E9E] text-xs font-normal">
          Job added from linkedin.com on Tue May 30 2023
        </span>
      </div>
      <div className="flex gap-2 ml-auto">
        <button className="py-1 text-base font-bold text-white transition-all bg-red-500 rounded-md hover:scale-105 h-fit px-11">
          Delete
        </button>
        <Select.Root defaultValue="saved" className="">
          <Select.Trigger className="flex gap-2 px-8 py-1 text-sm h-fit font-normal text-[#212121] hover:scale-105 bg-white items-center border rounded-md">
            <Select.Value className="text-sm font-normal " />
            <Select.Icon className="">
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="bg-white shadow-lg z-[22] p-[10px] ">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.5 }}
              >
                <Select.Viewport>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <SelectItem value="saved">Saved</SelectItem>
                    <SelectItem value="applied">Applied</SelectItem>
                    <SelectItem value="interviewing">Inerviewing</SelectItem>
                    <SelectItem value="offer">Offer</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </motion.div>
                </Select.Viewport>
              </motion.div>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </div>
  </div>
);
