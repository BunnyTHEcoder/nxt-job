import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { HiPencil } from "react-icons/hi";
import JobLogo from "../../../public/assets/jobcontainer/joblogo.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Company = () => {
  const [data, setData] = React.useState({
    name: "PIXSTER STUDIO",
    website: "https://www.linkedin.com/company/pixster-studio/life/",
    description:
      "Pixster Studio offers a complete array of Mobile & Web-based services ranging from development of iOS, Android, and Web applications all the way to front-end and back-end website solutions. We’ve more than 15 products and satisfied clients all around the world.",
    industry: "Information Technology & Services",
    company_size: "11-50",
    address: "Ahmedabad, Gujarat, India",
  });
  const [active, setActive] = React.useState(false);
  const [updated, setUpdated] = React.useState(data);

  const handleSave = () => {
    setData(updated);
    setActive(!active);
  };
  const handleCancel = () => {
    setUpdated(data);
    setActive(!active);
  };
  const variants = {
    hidden: { opacity: 0, x: "50%" },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <Tabs.Content
      value="2"
      className="flex flex-col -z-10 h-[460px] w-full absolute top-0 left-0 gap-5 p-5 data-[state=active]:z-10"
    >
      <div className="flex justify-between">
        <span className="text-lg font-bold">Company Info</span>
        {active ? (
          <div className="text-sm">
            <motion.button
              initial="hidden"
              animate="visible"
              variants={variants}
              className="text-[#57A4F2] py-[6px] px-8 outline-none cursor-pointer border-none"
              onClick={handleCancel}
            >
              Cancel
            </motion.button>
            <motion.button
              initial="hidden"
              animate="visible"
              variants={variants}
              className="bg-[#57A4F2] py-[6px] ml-[10px] px-8 rounded-md cursor-pointer text-white"
              onClick={handleSave}
            >
              Save
            </motion.button>
          </div>
        ) : (
          <HiPencil
            onClick={() => setActive(!active)}
            className="w-5 h-5 ml-2 cursor-pointer hover:scale-110 text-primary"
          />
        )}
      </div>
      {active ? (
        <Editable data={updated} setUpdated={setUpdated} />
      ) : (
        <Detailed data={data} />
      )}
    </Tabs.Content>
  );
};

export default Company;

const Editable = ({ data, setUpdated }) => {
  return (
    <div className="z-10 flex flex-col w-full text-xs h-full text-[#5A5A5A] gap-[10px] mb-1 overflow-x-visible overflow-y-scroll rounded-md">
      <span className="flex items-center gap-[10px]">
        <Image src={JobLogo} alt="joblogo" />
        <span className="flex flex-col gap-[5px]">
          <span>Company Name</span>
          <input
            className="px-4 py-3 border rounded-md outline-none"
            type="text"
            value={data.name}
            onChange={(e) =>
              setUpdated({
                ...data,
                name: e.target.value,
              })
            }
          />
        </span>
      </span>
      <span className="flex flex-col gap-[6px]">
        <span>Description</span>
        <textarea
          className="p-5 leading-5 border rounded-md outline-none"
          value={data.description}
          onChange={(e) =>
            setUpdated({
              ...data,
              description: e.target.value,
            })
          }
        />
      </span>
      <div className="grid grid-cols-2 gap-[10px]">
        <span className="flex flex-col gap-[5px]">
          <span className="text-[#212121]">Website</span>
          <input
            type="text"
            className="px-4 py-3 border rounded-md outline-none"
            value={data.website}
            onChange={(e) =>
              setUpdated({
                ...data,
                website: e.target.value,
              })
            }
          />
        </span>
        <span className="flex flex-col gap-[5px]">
          <span className=" text-[#212121]">Industry</span>
          <input
            type="text"
            className="px-4 py-3 border rounded-md outline-none"
            value={data.industry}
            onChange={(e) =>
              setUpdated({
                ...data,
                industry: e.target.value,
              })
            }
          />
        </span>
        <span className="flex flex-col gap-[5px]">
          <span className="ftext-[#212121]">Employee Count</span>
          <input
            type="text"
            className="px-4 py-3 border rounded-md outline-none"
            value={data.company_size}
            onChange={(e) =>
              setUpdated({
                ...data,
                company_size: e.target.value,
              })
            }
          />
        </span>
        <span className="flex flex-col gap-[5px]">
          <span className="text-[#212121]">Address</span>
          <input
            type="text"
            className="px-4 py-3 border rounded-md outline-none"
            value={data.address}
            onChange={(e) =>
              setUpdated({
                ...data,
                address: e.target.value,
              })
            }
          />
        </span>
      </div>
    </div>
  );
};

const Detailed = ({ data }) => (
  <div className="z-10 flex flex-col w-full text-sm h-full text-[#5A5A5A] gap-[10px] mb-1 overflow-x-visible overflow-y-scroll rounded-md">
    <span className="flex items-center gap-[10px]">
      <Image src={JobLogo} alt="joblogo" />
      <span className="text-xl font-bold">{data.name}</span>
    </span>
    <p>{data.description}</p>
    <span className="flex flex-col">
      <span className="font-semibold text-[#212121]">Website</span>
      <a href={data.website} className="underline text-primary">
        {data.website}
      </a>
    </span>
    <span className="flex flex-col">
      <span className="font-semibold text-[#212121]">Industry</span>
      <span>{data.industry}</span>
    </span>
    <span className="flex flex-col">
      <span className="font-semibold text-[#212121]">Employee Count</span>
      <span>{data.company_size}</span>
    </span>
    <span className="flex flex-col">
      <span className="font-semibold text-[#212121]">Address</span>
      <span>{data.address}</span>
    </span>
  </div>
);
