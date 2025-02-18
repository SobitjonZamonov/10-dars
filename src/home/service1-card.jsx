import React from "react";
import book4 from "../assets/book4.png";
import book5 from "../assets/book5.png";
import book6 from "../assets/book6.png";
import book7 from "../assets/book7.png";
import book8 from "../assets/book8.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Product } from "../components/product-card";
import { useNavigate } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-red-500 rounded-full`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-green-500 rounded-full`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export const Service1 = () => {
  const navigate = useNavigate()

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const books = [book4, book5, book6, book7, book8];

  return (
    <div className="w-full h-[522px] flex justify-center items-center mt-16">
      <div className="w-[1440px]">
        <h2 className="font-semibold text-2xl text-[#262626] mt-0">Янги қўшилганлар</h2>
        <Slider {...settings} className="mt-6">
          {books.map((book, index) => (
            <div key={index} className="flex justify-center">
              <img src={book} alt={`book${index + 1}`} className="w-[200px] h-auto" onClick={() => navigate("/product")}/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
