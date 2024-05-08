/* eslint-disable react/jsx-key */
import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { PiBooks } from "react-icons/pi";
import { TbBook } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
import { HiArrowsExpand } from "react-icons/hi";
import { BiSolidDonateHeart } from "react-icons/bi";
import imgbook from "../../public/bread-crumb-book.png";
import Link from "next/link";

const iconComponents = [
  <GrHomeRounded />,
  <PiBooks />,
  <TbBook />,
  <CiBookmark />,
  <HiArrowsExpand />,
  <BiSolidDonateHeart />,
];

const LeftSidebar = () => {
  return (
    <div className=" xs:fixed xs:bottom-0 sm:fixed md:fixed sm:bottom-0 bottom-0 w-full lg:static md:w-full lg:w-[96px] bg-white cursor-pointer px-5 md:py-3 lg:py-4 lg:h-full flex flex-col justify-around items-center lg:gap-1 md:gap-16 xs:flex-row sm:flex-row md:flex-row lg:flex-col x:drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] z-[1000] overflow-y-hidden">
      {iconComponents.map((Icon, index) => (
        <Link
          href={"/"}
          key={index}
          className={`text-[25px] p-4 rounded-lg hover:bg-[#f8f8f9] ${
            index === 1 || index === 5
              ? "bg-customGreen text-white hover:bg-customGreen"
              : "bg-white"
          } ${index === 5 ? "lg:block md:hidden sm:hidden xs:hidden" : ""}`}
        >
          <span
            className={`transition-all duration-300  ${
              index === 1 || index === 5
                ? "hover:text-white hover:bg-customGreen"
                : "hover:text-customGreen"
            }`}
          >
            {Icon}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default LeftSidebar;
