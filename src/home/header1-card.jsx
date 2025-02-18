import React from "react";
import logo from "../assets/Logo.svg";
import flag from "../assets/Frame(3).svg";

export const Header1 = () => {
    return (
        <div className="w-full h-[90px] flex justify-center items-center bg-white shadow">
            <div className="w-[1440px] h-[90px] flex justify-between items-center px-6">
                <img src={logo} alt="logo" className="h-10" />
                
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-l-lg bg-transparent">
                        <i className='bx bx-category text-blue-600'></i>
                        <span className="font-semibold text-blue-600">Рукнлар</span>
                        <i className='bx bx-chevron-down text-blue-600'></i>
                    </button>
                    
                    <div className="flex border border-gray-300 rounded-r-lg overflow-hidden w-[555px]">
                        <input 
                            type="text" 
                            placeholder="Қидириш" 
                            className="w-full py-3 px-4 text-gray-500 bg-gray-100 focus:outline-none"
                        />
                        <button className="px-4 bg-gray-100">
                            <i className='bx bx-search text-gray-500'></i>
                        </button>
                    </div>
                </div>
                
                <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 px-5 py-3 bg-blue-100 text-blue-600 rounded-lg font-semibold">
                        <img src={flag} alt="" className="h-5" />
                        <span>Ўз</span>
                        <i className='bx bx-chevron-down'></i>
                    </button>
                    
                    <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold">
                        <i className='bx bx-user'></i>
                        <span>Кириш</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
