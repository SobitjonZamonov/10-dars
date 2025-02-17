import React from "react";
import icon1 from "../../assets/icon.svg";
import icon2 from "../../assets/icon(1).svg";
import icon3 from "../../assets/icon(2).svg";
import icon4 from "../../assets/icon(3).svg";

export const Hero2 = () => {
    const items = [
        { icon: icon1, title: "Тезкор етказиш", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
        { icon: icon2, title: "Тўлов химояси", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
        { icon: icon3, title: "Юқори сифат", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
        { icon: icon4, title: "Энг сара китоблар", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" },
    ];

    return (
        <div className="w-full flex justify-center mt-14">
            <div className="w-[1440px] flex justify-between">
                {items.map((item, index) => (
                    <div key={index} className="w-[322px] flex items-center space-x-5">
                        <img src={item.icon} alt={`icon${index + 1}`} className="w-14 h-14" />
                        <div className="space-y-1">
                            <h3 className="font-bold text-lg text-[#11142d]">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
