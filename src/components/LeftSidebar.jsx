/* eslint-disable react/jsx-key */
import React from "react";

import { GrHomeRounded } from "react-icons/gr";
import { PiBooks } from "react-icons/pi";
import { TbBook } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
import { HiArrowsExpand } from "react-icons/hi";
import { BiSolidDonateHeart } from "react-icons/bi";
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
    <div>
      <div className="bg-white cursor-pointer px-5 md:py-3 lg:py-4 lg:max-w-[96px] sm:w-full md:w-full lg:h-full lg:static  flex flex-col justify-around items-center lg:gap-7 md:gap-16 sm:flex-row md:flex-row lg:flex-col absolute  sm:bottom-0  md:bottom-0 x:drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
        {iconComponents.map((Icon, index) => (
          <Link
            href={"/"}
            key={index}
            className="text-[25px] p-4 rounded-lg hover:bg-[#f8f6f9] bg-white"
          >
            {Icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
