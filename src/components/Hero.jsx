import React from "react";
import LeftSidebar from "./LeftSidebar";
import { Bookcard } from "./ClientComponents/Bookcard";
import Togglesidebar from "./ClientComponents/Togglesidebar";
import { Breadcrump } from "./Breadcrump";
import HadisCard from "./ClientComponents/HadisStatic";
import HadisStatic from "./ClientComponents/HadisStatic";
import Hadis from "./ClientComponents/Hadis";
const Hero = () => {
  return (
    <div className="">
      <div className="justify-between lg:flex mt-20 sm:flex md:flex">
        <LeftSidebar />
        <div className="w-full h-full p-4  bg-custombg rounded-tl-3xl ml-32 overflow-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[350px,1fr] 2xl:grid-cols-[350px,1fr,335px] gap-4 xl:gap-6">
            <Bookcard />
            <div className="col-span-1 xl:col-span-1 2xl:col-span-2 xs:col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-3 lg:w-full xl:w-full sm:pb-24 lg:pb-12 :">
              <Togglesidebar />
              <Breadcrump />
              <HadisStatic />
              <Hadis />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
