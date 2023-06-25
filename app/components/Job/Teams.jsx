import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { BsSearch } from "react-icons/bs";
import * as Collapsible from "@radix-ui/react-collapsible";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import AvatarLogo from "../../../public/assets/avatar.svg";
import Image from "next/image";
import GreenLogo from "../../../public/assets/Collapsible/green.svg";
import RedLogo from "../../../public/assets/Collapsible/red.svg";
import YellowLogo from "../../../public/assets/Collapsible/yellow.svg";
import MessageLogo from "../../../public/assets/Collapsible/message.svg";
import OptionLogo from "../../../public/assets/Collapsible/option.svg";
import * as Popover from "@radix-ui/react-popover";
import { BsTrashFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { MoreOptions } from "../Popups";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Teams = () => {
  const variants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.3 } },
    closed: { opacity: 0, y: "-50%" },
  };
  return (
    <Tabs.Content
      value="4"
      className="flex flex-col h-[460px] -z-10 w-full absolute top-0 left-0 gap-5 data-[state=active]:z-10 p-5"
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">Your Network</span>

        <div className="flex">
          <span className="flex items-center px-4 py-[6px] bg-white rounded-md border gap-[10px]">
            <BsSearch className="w-5 h-5 text-[#5A5A5A]" />
            <input
              className="text-sm outline-none "
              type="text"
              placeholder="Search"
            />
          </span>
          <button className="bg-[#57A4F2] py-[6px] ml-[10px] font-semibold px-7 rounded-md text-white">
            Create New
          </button>
        </div>
      </div>
      <div className="max-h-[360px] overflow-y-scroll">
        <AnimatePresence>
          <CollapsibleContainer data="Follow-Up 1">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-[10px]"
            >
              <motion.div
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex bg-white items-center px-5 py-[10px] rounded-md justify-between text-[10px] text-[#9E9E9E] "
              >
                <span className="flex gap-[10px]">
                  <Image src={AvatarLogo} alt="Avatar" />
                  <span className="flex flex-col gap-[2px]">
                    <span className="text-sm text-[#212121]">Monisha Raut</span>
                    <span>UI/UX Designer at Crisil</span>
                  </span>
                </span>
                <span>Name of Company</span>
                <span>17 June, 2023</span>
                <span className="flex items-center gap-[10px]">
                  <MoreOptions>
                    <Image
                      src={YellowLogo}
                      className="cursor-pointer"
                      alt="alert"
                    />
                  </MoreOptions>
                  <Image
                    src={MessageLogo}
                    className="cursor-pointer"
                    alt="message"
                  />
                  <DeletePop />
                </span>
              </motion.div>
              <motion.div
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex bg-white items-center px-5 py-[10px] rounded-md justify-between text-[10px] text-[#9E9E9E] "
              >
                <span className="flex gap-[10px]">
                  <Image src={AvatarLogo} alt="Avatar" />
                  <span className="flex flex-col gap-[2px]">
                    <span className="text-sm text-[#212121]">Monisha Raut</span>
                    <span>UI/UX Designer at Crisil</span>
                  </span>
                </span>
                <span>Name of Company</span>
                <span>17 June, 2023</span>
                <span className="flex items-center gap-[10px]">
                  <MoreOptions>
                    <Image
                      src={GreenLogo}
                      className="cursor-pointer"
                      alt="alert"
                    />
                  </MoreOptions>
                  <Image
                    src={MessageLogo}
                    className="cursor-pointer"
                    alt="message"
                  />
                  <DeletePop />
                </span>
              </motion.div>
            </motion.div>
          </CollapsibleContainer>
          <CollapsibleContainer data="Follow-Up 2">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-[10px]"
            >
              <motion.div
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex bg-white items-center px-5 py-[10px] rounded-md justify-between text-[10px] text-[#9E9E9E] "
              >
                <span className="flex gap-[10px]">
                  <Image src={AvatarLogo} alt="Avatar" />
                  <span className="flex flex-col gap-[2px]">
                    <span className="text-sm text-[#212121]">Monisha Raut</span>
                    <span>UI/UX Designer at Crisil</span>
                  </span>
                </span>
                <span>Name of Company</span>
                <span>17 June, 2023</span>
                <span className="flex items-center gap-[10px]">
                  <MoreOptions>
                    <Image
                      src={RedLogo}
                      className="cursor-pointer"
                      alt="alert"
                    />
                  </MoreOptions>
                  <Image
                    src={MessageLogo}
                    className="cursor-pointer"
                    alt="message"
                  />
                  <DeletePop />
                </span>
              </motion.div>
              <motion.div
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex bg-white items-center px-5 py-[10px] rounded-md justify-between text-[10px] text-[#9E9E9E] "
              >
                <span className="flex gap-[10px]">
                  <Image src={AvatarLogo} alt="Avatar" />
                  <span className="flex flex-col gap-[2px]">
                    <span className="text-sm text-[#212121]">Monisha Raut</span>
                    <span>UI/UX Designer at Crisil</span>
                  </span>
                </span>
                <span>Name of Company</span>
                <span>17 June, 2023</span>
                <span className="flex items-center gap-[10px]">
                  <MoreOptions>
                    <Image
                      src={YellowLogo}
                      className="cursor-pointer"
                      alt="alert"
                    />
                  </MoreOptions>
                  <Image
                    src={MessageLogo}
                    className="cursor-pointer"
                    alt="message"
                  />
                  <DeletePop />
                </span>
              </motion.div>
            </motion.div>
          </CollapsibleContainer>
          <CollapsibleContainer data="Follow-Up 3">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-[10px]"
            >
              <motion.div
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex bg-white items-center px-5 py-[10px] rounded-md justify-between text-[10px] text-[#9E9E9E] "
              >
                <span className="flex gap-[10px]">
                  <Image src={AvatarLogo} alt="Avatar" />
                  <span className="flex flex-col gap-[2px]">
                    <span className="text-sm text-[#212121]">Monisha Raut</span>
                    <span>UI/UX Designer at Crisil</span>
                  </span>
                </span>
                <span>Name of Company</span>
                <span>17 June, 2023</span>
                <span className="flex items-center gap-[10px]">
                  <MoreOptions>
                    <Image
                      src={RedLogo}
                      className="cursor-pointer"
                      alt="alert"
                    />
                  </MoreOptions>
                  <Image
                    src={MessageLogo}
                    className="cursor-pointer"
                    alt="message"
                  />
                  <DeletePop />
                </span>
              </motion.div>
              <motion.div
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex bg-white items-center px-5 py-[10px] rounded-md justify-between text-[10px] text-[#9E9E9E] "
              >
                <span className="flex gap-[10px]">
                  <Image src={AvatarLogo} alt="Avatar" />
                  <span className="flex flex-col gap-[2px]">
                    <span className="text-sm text-[#212121]">Monisha Raut</span>
                    <span>UI/UX Designer at Crisil</span>
                  </span>
                </span>
                <span>Name of Company</span>
                <span>17 June, 2023</span>
                <span className="flex items-center gap-[10px]">
                  <Image
                    src={YellowLogo}
                    className="cursor-pointer"
                    alt="alert"
                  />
                  <Image
                    src={MessageLogo}
                    className="cursor-pointer"
                    alt="message"
                  />
                  <DeletePop />
                </span>
              </motion.div>
            </motion.div>
          </CollapsibleContainer>
        </AnimatePresence>
      </div>
    </Tabs.Content>
  );
};

export default Teams;

const CollapsibleContainer = ({ data, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div>
        <Collapsible.Trigger className="flex items-center gap-[10px] mb-[10px]">
          {open ? <AiFillCaretUp /> : <AiFillCaretDown />}
          {data}
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content className="flex flex-col gap-[10px] mb-5 ">
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

const DeletePop = () => {
  return (
    <DropdownMenu.Root className="">
      <DropdownMenu.Trigger>
        <Image
          src={OptionLogo}
          className="relative cursor-pointer"
          alt="delete"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          className="w-[160px] z-[100] px-5 py-3 shadow-md rounded-md cursor-pointer bg-white "
        >
          <div className="bg-white flex gap-[10px]">
            <BsTrashFill className="text-[#F44336] text-[20px] cursor-pointer" />
            <span className="text-[#212121] text-sm">Delete</span>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
