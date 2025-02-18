import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Service2 = ({ books, setSelectedBook }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-[522px] flex justify-center items-center mt-16">
      <div className="w-[1440px]">
        <h2 className="font-semibold text-2xl text-[#262626] mt-0">
          Аудио китоблар
        </h2>
        <Slider {...settings} className="mt-6">
          {books.map((book, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={book}
                alt={`book${index + 1}`}
                className="w-[200px] h-auto cursor-pointer"
                onClick={() => setSelectedBook(books)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
