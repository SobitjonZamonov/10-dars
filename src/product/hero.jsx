import React from "react";
import status1 from "../assets/Frame 33899.svg";
import status2 from "../assets/rating.svg";
import status3 from "../assets/review.svg";
import info from "../assets/lowerInfo.svg";

export const HeroProduct = ({ selectedBook }) => {
  return (
    <div className="w-full h-[422px] flex justify-center items-center">
      <div className="w-[1440px] h-[422px] flex gap-[24px]">
        <img src={selectedBook} alt="Selected Book" className="w-[250px] h-auto" />
        <div>
          <div className="flex w=[966px] h-[56px] gap-[94px] justify-start items-center">
            <h2 className="font-bold text-3xl text-[#11142d] w-[398px] h-[56px]">
              Китоб номи
            </h2>
            <div className="flex justify-between gap-[30px] w-[474px] h-[24px]">
              <img src={status1} alt="" />
              <img src={status2} alt="" />
              <img src={status3} alt="" />
            </div>
          </div>
          <div>
            <h3 className="w-[142px] h-[19px] flex text-[14px] font-normal text-[#3F51B5] mb-[14px]">
              SIYOSAT, FANTASTIKA
            </h3>
            <p className="w-[960px] h-[144px] flex text-[14px] font-normal text-[#11142d mb-[16px]]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </div>
          <div>
            <img className="mb-[46px]" src={info} alt="" />
          </div>
          <div className="flex gap-4">
            <button className="w-[258px] h-[44px] border-none text-[#fff] text-[16px] rounded-[14px] bg-[#3F51B5] cursor-pointer active:bg-[#8f9ddb] transition">
              Сотиб олиш - 65 000 сум
            </button>
            <button className="w-[258px] h-[44px] border rounded-[14px] bg-[transparent] text-[16px] cursor-pointer active:bg-[#c9c3c3] transition">
              Аудио тинглаш - 55 000 сум
            </button>
            <button className="w-[258px] h-[44px] border rounded-[14px] bg-[transparent] text-[16px] cursor-pointer active:bg-[#c9c3c3] transition">
              Онлайн укиш - 45 000 сум
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
