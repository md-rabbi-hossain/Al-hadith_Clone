"use client";

import { useState } from "react";

const Category = () => {
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setColor(!color);
  };

  return (
    <div
      className={`border-b-[1px] lg-max:border-y-[1px] lg-max:dark:border-y-[1px] w-full flex items-center justify-center text-lg  border-[#ECEEF0] dark:border-dark-cat-border ${
        color ? "bg-white text-black" : " bg-customGreen"
      }`}
    >
      {" "}
      <p
        onClick={handleClick}
        className="w-1/2 text-center py-3 cursor-pointer rounded-tl-2xl text-xl"
      >
        বই
      </p>
      <p
        onClick={handleClick}
        className={`text-xl w-1/2 text-center py-3 cursor-pointer  ${
          color ? "bg-customGreen text-white" : "bg-white"
        }`}
      >
        অধ্যায়
      </p>
    </div>
  );
};

export default Category;
