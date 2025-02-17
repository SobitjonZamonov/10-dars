import React from "react";
import "./header2-card.css";


export const Header2 = () => {
    return (
        <div className="w-full h-[48px] flex justify-center items-center">
            <div className="w-[1440px] h-[48px] border border-[#f0f0f0] flex justify-items-start items-center">
                <ul className="flex gap-5 list-none">
                    <li><a href="#" className="font-semibold size-4 text-blue-600">Аудиокитоб</a></li>
                    <li><a href="#" className="font-semibold size-4 text-blue-600">Электрон китоблар</a></li>
                    <li><a href="#" className="font-semibold size-4 text-blue-600">Босма китоблар</a></li>
                    <li><a href="#" className="font-semibold size-4 text-blue-600">Контакт</a></li>
                    <li><a href="#" className="font-semibold size-4 text-blue-600">Биз хақимизда</a></li>
                </ul>
            </div>
        </div>
    )
}

