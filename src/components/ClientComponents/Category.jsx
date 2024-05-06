"use client";

import { useState } from "react";

const Category = () => {
  const [color, setColor] = useState(true);
  const handleClick = () => {
    setColor(!color); // Toggles the color state
  };
  return (
    <div className="border-b-[1px] lg-max:border-y-[1px] lg-max:dark:border-y-[1px] w-full flex items-center justify-center text-lg text-white border-[#ECEEF0] dark:border-dark-cat-border">
      <p
        className={`bg-${color ? "customGreen" : "white"} text-${
          color ? "white" : "black"
        } w-1/2 text-center py-3 cursor-pointer rounded-tl-2xl text-xl`}
        onClick={handleClick}
      >
        বই
      </p>
      <p
        className={`bg-${color ? "white" : "customGreen"} text-${
          color ? "black" : "white"
        } text-xl style-Kalpurush-webKit w-1/2 text-center py-3 cursor-pointer rounded-tr-xl`}
        onClick={handleClick}
      >
        অধ্যায়
      </p>
    </div>
  );
};

export default Category;
