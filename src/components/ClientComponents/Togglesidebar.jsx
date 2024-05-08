"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Bookcard } from "../Bookcard";
import { IoCloseOutline } from "react-icons/io5";
import Category from "./Category";
import ToogleCard from "../ReusableComponent/ToogleCard";
const Togglesidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div>
      {" "}
      <div className=" lg:w-full lg:block lg:col-span-full xl:hidden xss:pt-0">
        <div className="flex flex-row justify-between p-4 rounded-lg bg-white dark:bg-hadith-dark-card rounded-2lg items-center cursor-pointer dark:bg-dark-bg xl-min:hidden ">
          <div
            className="flex gap-x-2 font-medium leading-[25px] items-center"
            onClick={toggleSidebar}
          >
            <RxHamburgerMenu />
            সহিহ বুখারী
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 bg-opacity-50 z-50">
          <div className="flex flex-col h-full bg-white transition-all delay-300">
            <div className="p-9 w-full md:w-420">
              <div className="flex justify-between gap-2">
                <div className="font-medium text-center text-2xl">
                  ক্যাটাগরি
                </div>
                <button onClick={closeSidebar} className="text-[24px]">
                  <IoCloseOutline />
                </button>
              </div>
              <div className="mt-5">
                <ToogleCard />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Togglesidebar;
