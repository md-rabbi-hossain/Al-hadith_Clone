import React from "react";
import LeftSidebar from "./LeftSidebar";

const HeroSection = () => {
  return (
    <div className="justify-between calctest lg:flex sm:flex md:flex">
      <LeftSidebar />
      <div className="w-full h-full p-4 bg-custombg  rounded-tl-3xl "></div>
    </div>
  );
};

export default HeroSection;
