import { Cross1Icon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import { BsCheck, BsTrashFill } from "react-icons/bs";
import Menuicon from "../../public/assets/dndcard/menu.svg";
import Popplayicon from "../../public/assets/dndcard/popplay.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Checkbox from "@radix-ui/react-checkbox";
import { MdEdit } from "react-icons/md";
import { IoIosCopy } from "react-icons/io";
import LinkedinLogo from "../../public/assets/linkedin.svg";
// Delete Popover
export const DeletePop = () => {
  return (
    <Popover.Root className="ml-auto justify-self-end">
      <Popover.Trigger>
        <Image src={Menuicon} className="cursor-pointer" alt="delete" />
      </Popover.Trigger>
      <Popover.Content
        sideOffset={8}
        className="w-[160px] px-5 py-3 shadow-md rounded-md cursor-pointer bg-white "
      >
        <div className="bg-white flex gap-[10px]">
          <BsTrashFill className="text-[#F44336] text-[20px] cursor-pointer" />
          <span className="text-[#212121] text-sm">Delete</span>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

// Cover Popover
export const CoverPop = ({ children }) => {
  return (
    <Popover.Root>
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Content
        hideWhenDetached={true}
        sideOffset={8}
        className="w-[362px] z-20 px-[10px] py-[7px] shadow-md rounded-md cursor-pointer bg-white "
      >
        <span className="flex items-center mb-[10px]">
          <span className="text-[#212121] text-sm">Cover Letter</span>
          <Popover.Close className="ml-auto">
            <Cross1Icon className="text-[#212121] w-[16px] h-[16px] cursor-pointer " />
          </Popover.Close>
        </span>
        <div className=" flex gap-[10px]">
          <input
            className="text-[#AFAFAF] w-full rounded-md text-sm px-[18px] py-[14px] border outline-none"
            placeholder="Cover Leter Name"
            type="text"
          />
          <button className="text-white w-full  bg-primary px-[32px] py-[6px] rounded-md text-sm">
            Create New
          </button>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

// Mock Popover
export const MockPop = ({ children }) => {
  return (
    <Popover.Root>
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Content
        sideOffset={8}
        className="w-[362px] z-20 px-[10px] py-[7px] shadow-md rounded-md cursor-pointer bg-white "
      >
        <span className="flex items-center mb-[10px]">
          <span className="text-[#212121] text-sm">Cover Letter</span>
          <Popover.Close className="ml-auto">
            <Cross1Icon className="text-[#212121] w-[16px] h-[16px] cursor-pointer " />
          </Popover.Close>
        </span>
        <div className=" flex gap-[10px]">
          <input
            className="text-[#AFAFAF] w-full rounded-md text-sm px-[18px] py-[14px] border outline-none"
            placeholder="Cover Leter Name"
            type="text"
          />
          <button className="text-white w-full bg-primary px-[32px] py-[6px] rounded-md text-sm">
            Create New
          </button>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

// Resume Popover
export const ResumePop = ({ children }) => {
  return (
    <Popover.Root>
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Content
        hideWhenDetached={true}
        sideOffset={8}
        className="w-[213px] z-20 px-[10px] py-[7px] shadow-md rounded-md cursor-pointer bg-white "
      >
        <div className="flex flex-col gap-[10px]">
          <span className="text-sm text-[#212121] ">Gopal_Sapara_V1</span>
          <span className="text-xs text-green-600">
            75% Match with Job Description
          </span>
          <button className="font-bold p-[6px] rounded-md text-white mt-[10px] bg-primary w-full">
            Customize It
          </button>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

// Resume1 Popover

export const Resume1Pop = ({ children }) => {
  return (
    <Popover.Root>
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Content
        hideWhenDetached={true}
        sideOffset={8}
        className="w-[213px] shadow-md rounded-md cursor-pointer overflow-hidden bg-white "
      >
        <div className="w-full h-[181px] flex items-center justify-center bg-black relative rounderd-t-md ">
          <Image className="" src={Popplayicon} alt="play" />
        </div>
        <div className="flex flex-col p-[10px] gap-[10px]">
          <span className="text-sm text-[#212121] ">UI/UX Designer</span>
          <span className="text-xs text-green-600">25%</span>
          <button className="font-bold p-[6px] rounded-md text-white mt-[10px] bg-primary w-full">
            Give Mock Interview
          </button>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

export const MoreOptions = ({ children }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>{children}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          hideWhenDetached={true}
          sideOffset={8}
          className="w-[213px] z-[100] overflow-y-scroll text-[#212121] py-[17px] px-[20px] flex flex-col gap-[10px] text-sm shadow-md rounded-md cursor-pointer overflow-hidden bg-white "
        >
          <div className="flex items-center gap-[10px]">
            <Checkbox.Root className="w-4 h-4 border rounded-full data-[state=checked]:bg-green-100 ">
              <Checkbox.Indicator className="">
                <BsCheck className="text-[#212121] " />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="text-[#212121] text-sm">Like 1 post</label>
          </div>
          <div className="flex items-center gap-[10px]">
            <Checkbox.Root className="w-4 h-4 border rounded-full data-[state=checked]:bg-green-100 ">
              <Checkbox.Indicator>
                <BsCheck className="text-[#212121]" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="text-[#212121] text-sm">Send a message</label>
          </div>
          <div className="mx-[10px]">
            <span className="text-xs mb-[10px] font-semibold">
              To a ux designer who works at Google
            </span>
            <p className="text-[10px]  text-[#5A5A5A]">
              {`Hi [Name],`}
              <br />
              {`I'm Gopal Sapara and I am currently working as a UX designer. Being passionate about user experience, I am interested in exploring the opportunity of becoming part of Google's UX team. Could you provide me with some insights on how to initiate this process? Thank you for your time!`}
            </p>
          </div>
          <div className="flex items-center">
            <MdEdit className="text-[#9E9E9E] w-4 " />
            <IoIosCopy className="text-[#9E9E9E] w-4 " />
            <Image className="ml-auto" src={LinkedinLogo} alt="linkedin" />
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
