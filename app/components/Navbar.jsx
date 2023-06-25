"use client";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Avatar from "@radix-ui/react-avatar";
import { CaretDownIcon, BellIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState(null);
  return (
    <nav className="w-full shadow-md py-[26px] px-[32px]">
      <NavigationMenu.Root className="flex items-center justify-between ">
        <NavigationMenu.List className="flex items-center">
          <Image src={logo} alt="Logo" />
          {[
            "Resume Builder",
            "Cover Letter",
            "LinkedIn Review",
            "Interview",
            "Job Tracker & Networking",
          ].map((item, index) => (
            <NavigationMenu.Item
              onMouseEnter={() => setSelected(item)}
              key={index}
              className="relative ml-7"
            >
              <NavigationMenu.Trigger className="relative flex items-center px-5 py-3 text-sm font-normal z-[2] ">
                {item} <CaretDownIcon className="w-4 h-3 " aria-hidden />
              </NavigationMenu.Trigger>
              {item === selected && (
                <motion.div
                  layoutId="tag"
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    duration: 0.5,
                  }}
                  className="absolute top-0 left-0 w-full h-full border rounded-md tag bg-secondary border-primary"
                ></motion.div>
              )}
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
        <NavigationMenu.List className="flex items-center gap-6">
          <BellIcon className="w-5 h-6 cursor-pointer" aria-hidden />
          <Avatar.Root className="flex items-center justify-center w-12 h-12 text-white rounded-full cursor-pointer bg-quinary">
            <Avatar.Fallback className="">Suraj</Avatar.Fallback>
          </Avatar.Root>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </nav>
  );
};

export default Navbar;
