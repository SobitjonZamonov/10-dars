import React from "react";
import play_market from "../assets/googleplay.svg";
import app_store from "../assets/appstore.svg";

export const Footer1Product = () => {
  return (
    <div className="w-full h-[283px] flex justify-center items-center mt-[93px] bg-[#EEF4FF]">
      <div className="w-[1440px] flex justify-around">
        <div>
          <h3 className="font-bold text-xl text-[#11142d] mt-8">Платформа хақида</h3>
          <ul className="mt-4 space-y-4">
            <li><a href="#" className="text-lg text-[#11142d]">Liber ўзи нима?</a></li>
            <li><a href="#" className="text-lg text-[#11142d]">Фойдаланиш шартлари</a></li>
            <li><a href="#" className="text-lg text-[#11142d]">Ёрдам</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl text-[#11142d] mt-8">Обуна хақида</h3>
          <ul className="mt-4 space-y-4">
            <li><a href="#" className="text-lg text-[#11142d]">Обуна хақида</a></li>
            <li><a href="#" className="text-lg text-[#11142d]">Қандай тўлаш</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl text-[#11142d] mt-8">Китоблар</h3>
          <ul className="mt-4 space-y-4">
            <li><a href="#" className="text-lg text-[#11142d]">Китоблар</a></li>
            <li><a href="#" className="text-lg text-[#11142d]">Электрон китоблар</a></li>
            <li><a href="#" className="text-lg text-[#11142d]">Китоблар</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl text-[#11142d] mt-8">Мобил илова</h3>
          <div className="mt-4 space-y-4">
            <a href="#"><img src={play_market} alt="Play Market" className="w-36" /></a>
            <a href="#"><img src={app_store} alt="App Store" className="w-36" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};
