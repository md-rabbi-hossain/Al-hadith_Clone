"use client";

import { useState } from "react";

const Category = () => {
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setColor(!color);
  };

  console.log(color);

  return (
    <div className="border-b-[1px] lg-max:border-y-[1px] lg-max:dark:border-y-[1px] w-full flex items-center justify-center text-lg text-white border-[#ECEEF0] dark:border-dark-cat-border">
      <p
        className="w-1/2 text-center text-black py-3 cursor-pointer rounded-tl-2xl text-xl"
        onClick={handleClick}
      >
        বই
      </p>
      <p
        className="bg-customGreen
         text-xl  w-1/2 text-center py-3 cursor-pointer rounded-tr-xl"
        onClick={handleClick}
      >
        অধ্যায়
      </p>
    </div>
  );
};

export default Category;
