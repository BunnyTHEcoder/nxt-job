"use client";
import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import Infologo from "../../public/assets/info.svg";
import Image from "next/image";
import initialData from "../data/dnd";
import { useDispatch } from "react-redux";
import { addCard } from "../utils/slices/card";

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className="relative flex items-center px-6 py-3 text-sm leading-none rounded-md cursor-default group hover:bg-primary hover:text-white"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute group-hover:bg-primary left-0 w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";

const DialobBox = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState(initialData);
  const [selected, setSelected] = React.useState("column-1");

  const addnum = () => {
    let intialt = 6;
    intialt = intialt + 1;
    return "task-" + intialt;
  };

  const [updated, setData1] = React.useState({
    id: addnum(),
    url: "",
    title: "",
    company: "",
  });

  const onSubmit = (e) => {
    dispatch(
      addCard({
        id: updated.id,
        url: updated.url,
        title: updated.title,
        company: updated.company,
        column: selected,
      })
    );
  };

  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <div className="text-base font-bold px-[18px] py-3 rounded-lg text-white bg-tertiary">
          Create
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed p-10 flex flex-col gap-[10px] -translate-x-1/2 -translate-y-1/2 bg-white max-w-[502px] rounded-md shadow-md top-1/2 left-1/2 ">
          <Dialog.Close asChild>
            <Cross2Icon className="absolute w-5 h-5 cursor-pointer top-5 right-5" />
          </Dialog.Close>
          <Dialog.Title className="text-3xl font-semibold text-center">
            Add Job
          </Dialog.Title>
          <Dialog.Description className="text-base font-normal text-center mb-[30px] ">
            Create job card to track that job
          </Dialog.Description>
          <fieldset>
            <input
              className="w-full px-5 py-3 text-sm font-normal border rounded-md outline-none"
              type="text"
              placeholder="Company Name"
              onChange={(e) =>
                setData1({
                  ...data,
                  company: e.target.value,
                })
              }
            />
          </fieldset>
          <fieldset>
            <input
              className="w-full px-5 py-3 text-sm font-normal border rounded-md outline-none"
              type="text"
              placeholder="Job Title"
              onChange={(e) =>
                setData1({
                  ...data,
                  title: e.target.value,
                })
              }
            />
          </fieldset>
          <fieldset>
            <input
              className="w-full px-5 py-3 text-sm font-normal border rounded-md outline-none"
              type="text"
              placeholder="Job URL"
              onChange={(e) =>
                setData1({
                  ...data,
                  url: e.target.value,
                })
              }
            />
          </fieldset>
          <Select.Root onValueChange={setSelected} defaultValue="column-1">
            <Select.Trigger className="flex justify-between w-full px-5 py-3 text-sm font-normal border rounded-md">
              <Select.Value />
              <Select.Icon className="text-violet11">
                <ChevronDownIcon />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="bg-white shadow-md ">
                <Select.Viewport className="">
                  {data.columnOrder.map((item) => {
                    const column = data.columns[item];
                    return (
                      <SelectItem key={column.id} value={column.id}>
                        {column.title}
                      </SelectItem>
                    );
                  })}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
          <div className="flex  items-center gap-[10px] my-[30px]">
            <Dialog.Close>
              <button className="min-w-[206px] p-4 text-base font-bold bg-white border rounded-md outline-none">
                Cancel
              </button>
            </Dialog.Close>
            <Dialog.Close>
              <button
                onClick={(e) => onSubmit(e)}
                className="min-w-[206px] p-4 text-base font-bold text-white rounded-md outline-none bg-tertiary"
              >
                Submit
              </button>
            </Dialog.Close>
          </div>
          <div className="flex p-[10px] bg-secondary gap-[10px] rounded-lg">
            <Image src={Infologo} className="mb-auto" alt="info" />
            <p className="text-[10px] font-normal">
              Did yoy know? You can save job directly from our Extension and
              have all the data imported in a simple click! It takes just a few
              seconds
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Filtertab = () => {
  return (
    <div className="w-full mt-5 bg-white rounded-lg h-fit">
      <div className="flex items-center justify-between px-5 py-4">
        <h2 className="text-lg font-semibold">My 2023 Job Search</h2>
        <div className="flex gap-3">
          <div className="flex items-center px-5 py-4 border rounded-lg cursor-pointer">
            <MagnifyingGlassIcon className="w-[18px] h-[18px] " aria-hidden />
            <input
              type="text"
              className="text-sm font-normal outline-none"
              placeholder="Search"
            />
          </div>
          <DialobBox />
        </div>
      </div>
    </div>
  );
};

export default Filtertab;
