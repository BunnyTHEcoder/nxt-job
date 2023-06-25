import React from "react";
import { animate, motion } from "framer-motion";

const Timeline = () => {
  const data = [
    {
      id: 1,
      time: "Today, 1:12 PM",
      location: "Moved to Saved",
      title: "You moved this job from Applied to saved",
    },
    {
      id: 2,
      time: "Yesterday, 1:12 PM",
      location: "Moved to Applied",
      title: "You moved this job from Applied to saved",
    },
    {
      id: 3,
      time: "Yesterday, 1:22 PM",
      location: "Moved to Rejected",
      title: "You moved this job from Applied to saved",
    },
  ];

  const lianimation = {
    hidden: {},
    animate: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1,
      },
    },
  };
  const span1animation = {
    hidden: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
    transition: {
      duration: 0.5,
    },
  };
  const span2animation = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.5,
    },
  };
  return (
    <div className="min-w-[193px] mr-[40px] rounded-sm h-fit bg-[#F9F8F8]">
      <span className=" inline-block m-[20px] text-base font-bold">
        Time Line
      </span>
      <div className="">
        <motion.ol
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 1 }}
          class="relative text-gray-500 border-l-2 ml-3 border-dashed border-[#57A4F2]"
        >
          {data.map((item) => (
            <motion.li
              variants={lianimation}
              initial="hidden"
              animate="animate"
              layoutId="timeline"
              key={item.id}
              class="mb-10 ml-6"
            >
              <motion.span
                variants={span1animation}
                class="absolute flex items-center  justify-center w-4 h-4 bg-[#57A4F2] rounded-full -left-[9px] "
              ></motion.span>
              <motion.span
                variants={span2animation}
                class="text-[10px] inline-block text-[#9E9E9E] mb-[10px] "
              >
                Today, 1:12 PM
              </motion.span>
              <motion.span
                variants={span2animation}
                className="flex flex-col w-[127px] text-[#5A5A5A] bg-[#E4F2FF] p-[10px] "
              >
                <span className="text-xs font-bold">Moved to Saved</span>
                <span className="text-[10px]">
                  You moved this job from Applied to saved
                </span>
              </motion.span>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
};

export default Timeline;
