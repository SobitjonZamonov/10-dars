import React from "react";
import social_sites from "../assets/social.svg"
import payment1 from "../assets/payment1.svg"
import payment2 from "../assets/payment2.svg"
import payment3 from "../assets/payment3.svg"

export const Footer2Product = () => {
    return (
        <div className="w-full h-24 flex justify-center items-center bg-[#10182C]">
            <div className="w-[1440px] h-24 flex justify-start items-center gap-32">
                <div className="ml-20">
                    <h3 className="text-white text-sm font-light leading-[114%]">Ижтимоий тармоқлар</h3>
                    <img src={social_sites} alt="social web sites logo" />
                </div>
                <div>
                    <h3 className="text-white text-sm font-light leading-[114%]">Боғланиш</h3>
                    <div className="flex gap-6">
                        <p className="text-white text-sm font-light leading-[114%]">+998 90 253 77 53</p>
                        <p className="text-white text-sm font-light leading-[114%]">support@liber.uz</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-white text-sm font-light leading-[114%]">Биз қабул қиламиз</h3>
                    <div className="flex">
                        <img src={payment1} alt="uzkard" />
                        <img src={payment2} alt="humo" />
                        <img src={payment3} alt="payme" />
                    </div>
                </div>
            </div>
        </div>
    )
}
