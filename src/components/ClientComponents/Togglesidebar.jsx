"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
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
      <div className="  lg:w-full lg:block lg:col-span-full xl:hidden xss:pt-0">
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
        <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-50">
          {/* Sidebar Content Goes Here */}
          <div className="flex flex-col h-full w-64 bg-white dark:bg-dark-bg">
            {/* Close Button */}
            <div className="p-2">
              <button
                onClick={closeSidebar}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Your sidebar content */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Togglesidebar;
