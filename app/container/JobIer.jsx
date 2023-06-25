import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import JobDescription from "../components/Job/JobDescription";
import { BsGrid } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import Timeline from "../components/Job/Timeline";
import Company from "../components/Job/Company";
import Notes from "../components/Job/Notes";
import Teams from "../components/Job/Teams";
import { motion } from "framer-motion";

const JobInner = () => {
  const data = [
    {
      id: 1,
      title: "Job Description",
      logo: <BsGrid className="w-4 h-4" />,
      value: "1",
    },
    {
      id: 2,
      title: "Company",
      logo: <BiBuildingHouse className="w-4 h-4" />,
      value: "2",
    },
    {
      id: 3,
      title: "Notes",
      logo: <IoDocumentTextOutline className="w-4 h-4" />,
      value: "3",
    },
    {
      id: 4,
      title: "Teams",
      logo: <HiOutlineUserGroup className="w-4 h-4" />,
      value: "4",
    },
  ];
  const [selected, setSelected] = React.useState("1");
  return (
    <>
      <Tabs.Root defaultValue="1" className="flex gap-5">
        <Tabs.List className="flex flex-col gap-[10px] p-[10px] max-h-[580px] border-r border-[#DCDCDC] min-w-[213px]">
          {data.map((item) => (
            <Tabs.Trigger
              key={item.id}
              value={item.value}
              onClick={() => setSelected(item.value)}
              className="flex relative items-center group p-[9px] text-xs font-normal hover:bg-gray-50 text-[#9E9E9E] rounded-md cursor-pointer "
            >
              <motion.span
                animate={{
                  color: selected === item.value ? "#8246FD" : "#9E9E9E",
                  fontWeight: selected === item.value ? "600" : "400",
                }}
                className="flex items-center z-[2] group-hover:text-primary  gap-[10px]"
              >
                {item.logo}
                <span>{item.title}</span>
              </motion.span>
              {selected === item.value && (
                <motion.div
                  layoutId="some1"
                  transition={{
                    type: "spring",
                    bounce: 0.55,
                    duration: 0.5,
                  }}
                  className="absolute top-0 left-0 w-full h-full rounded-md bg-secondary"
                ></motion.div>
              )}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div className="relative z-10 w-full bg-secondary">
          <JobDescription />
          <Company />
          <Notes />
          <Teams />
        </div>
        <Timeline />
      </Tabs.Root>
    </>
  );
};

export default JobInner;
