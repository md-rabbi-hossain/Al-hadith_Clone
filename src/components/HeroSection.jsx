import React from "react";
import LeftSidebar from "./LeftSidebar";
import Category from "./ClientComponents/Category";

const HeroSection = () => {
  return (
    <div className="justify-between calctest lg:flex sm:flex md:flex">
      <LeftSidebar />
      <div className="w-full h-full p-4 bg-custombg  rounded-tl-3xl">
        <div className="flex gap-4 p-4">
          <div className="rounded-2xl h-[calc(100vh_-_115px)] bg-white flex items-center flex-col w-[350px]">
            <Category />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
