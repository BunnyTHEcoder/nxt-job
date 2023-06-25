"use client";
import React from "react";
import boardlogo from "../../public/assets/board.svg";
import archivelogo from "../../public/assets/archive.svg";
import grouplogo from "../../public/assets/group.svg";
import looplogo from "../../public/assets/loop.svg";
import reportogo from "../../public/assets/report.svg";
import suggestlogo from "../../public/assets/suggest.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsGridFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { RiInboxArchiveFill } from "react-icons/ri";
import { AiTwotoneBulb } from "react-icons/ai";
import { BsFillBugFill } from "react-icons/bs";
import { TfiLoop } from "react-icons/tfi";

const Sidebars = () => {
  const [selected, setSelected] = React.useState({
    title: "Board",
  });
  const data = [
    {
      title: "Board",
      logo: <BsGridFill className="w-[22px] h-[22px] z-[2]" />,
    },
    {
      title: "Networking",
      logo: <FaUsers className="w-[22px] h-[22px] z-[2]" />,
    },
    {
      title: "Archive Jobs",
      logo: <RiInboxArchiveFill className="w-[22px] z-[2] h-[22px]" />,
    },
    {
      title: "Loop Settings",
      logo: <TfiLoop className="w-[22px] h-[22px] z-[2] " />,
    },
    {
      title: "Suggest a Feature",
      logo: <AiTwotoneBulb className="w-[22px] z-[2] h-[22px] " />,
    },
    {
      title: "Report an Issue",
      logo: <BsFillBugFill className="w-[22px] z-[2] h-[22px] " />,
    },
  ];
  return (
    <aside className="w-[213px] h-max bg-white rounded-lg  mt-5 ml-8 ">
      <div className="flex flex-col gap-3 px-3 py-5">
        {data.map((item, index) => (
          <motion.div
            animate={{
              color: selected?.title === item?.title ? "#fff" : "#212121",
            }}
            transition={{ duration: 0.2, delay: 0.1 }}
            key={index}
            onClick={() => setSelected(item)}
            className="relative flex items-center w-full gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100 min-w-max "
          >
            {item.logo}
            <p className="z-[2] text-sm font-medium ">{item.title}</p>
            {selected?.title === item?.title && (
              <motion.div
                layoutId="some"
                className="absolute top-0 left-0 w-full h-full rounded-lg -z-[1px] some bg-primary"
              ></motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebars;
