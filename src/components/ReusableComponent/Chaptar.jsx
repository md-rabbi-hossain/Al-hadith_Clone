import React from "react";
import book from "../../../public/book2.png";
import Image from "next/image";
export const Chaptar = ({ title, Ayat }) => {
  return (
    <div className="bg-white dark:bg-hadith-dark-card my-4 p-5 rounded-xl sm-max:px-4">
      <div class="flex justify-between">
        <div class="grid gap-x-3 gap-y-4 grid-cols-[32px,1fr] 2xl:grid-rows-1">
          <Image src={book} alt="bookimg" />
          <h3 class="style-Kalpurush-chapter flex items-center text-[17px] font-semibold leading-5 dark:text-hadith-deepoffwhite xss:text-base xs:text-base xs:leading-4">
            ১/১. অধ্যায়ঃ
          </h3>
          <div class="style-Kalpurush text-base leading-[24px] col-span-2 xss:text-[15px] xs:text-[15px]">
            <span class="dark:text-dark-text">{title}</span>
          </div>
        </div>
      </div>
      <div class="h-full transition-all duration-1000 delay-1000">
        <div class="w-full h-[1px] bg-[#ECEEF0] dark:bg-dark-polygon my-5 transition-all duration-150 delay-150"></div>
        <div class='block "style-Kalpurush-SectionCard text-base leading-8 text-[#373737] dark:text-hadith-deepoffwhite xss:leading-7 xs:leading-7"'>
          <span>{Ayat}</span>
        </div>
      </div>
    </div>
  );
};
