import React from "react";
import LeftSidebar from "./LeftSidebar";
import { Bookcard } from "./Bookcard";
import Togglesidebar from "./ClientComponents/Togglesidebar";
import { Breadcrump } from "./Breadcrump";
import HadisCard from "./ClientComponents/HadisStatic";
import HadisStatic from "./ClientComponents/HadisStatic";
import Hadis from "./ClientComponents/Hadis";
const Hero = () => {
  return (
    <div className="w-full h-full calctest flex justify-between">
      <div className="xs:max-w-full  sm:max-w-full md:max-w-full  md:rounded-none sm:fixed lg:fixed right-0 sm:left-0 lg:left-24 md:h-full lg:h-full items-center bg-custombg justify-center xl:rounded-tl-3xl">
        <div
          id="Screentop"
          className="lg:px-5 md:px-3 md:pb-20 lg:pb-24 md:h-screen"
        >
          <div
            className="grid gap-4 xl-min:gap-6 py-5
  xss:pt-24 xss:pb-9
  xs:pb-6
  sm:col-start-1 sm-max:pt-[5rem] sm:pb-7
  md:col-start-1 md:pb-6 
  lg:grid-cols-1 
  xl:grid-cols-[350px,1fr] 2xl-min:grid-cols-[350px,1fr,335px]"
          >
            <Bookcard />
            <div
              className="xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 lg:w-[101%] xl:min-w-[101.5%] xs:p-5 sm:p-5 xl:p-0 sm:pb-24 lg:pb-12 overflow-scroll  3xl:w-full h-[calc(100vh_-_80px)]
              "
            >
              <Togglesidebar />
              <Breadcrump />
              <HadisStatic />
              <Hadis />
            </div>
          </div>
        </div>
      </div>
      <LeftSidebar />
    </div>
  );
};

export default Hero;
