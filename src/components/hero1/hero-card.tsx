import React from "react";
import background_photo from "../../assets/MaskGroup.svg";
import book1 from "../../assets/book1.png";
import book2 from "../../assets/book2.png";
import book3 from "../../assets/book3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-red-500`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-green-500`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export const Hero1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full h-[351px] flex justify-around items-center mt-4">
      <div className="flex justify-around items-center gap-[24px] w-[1440px]">
        <div className="w-[1005px] h-[351px] flex justify-between bg-[#EEF4FF] rounded-xl">
          <div className="p-8">
            <h2 className="text-[#262626] font-bold text-lg">Кўп ўқилаётганлар</h2>
            <img src={background_photo} alt="background" className="mt-4" />
          </div>
          <div className="w-[570px] mt-8 mr-10">
            <Slider {...settings}>
              <div className="text-center">
                <img src={book1} alt="book1" className="mx-auto" />
                <h3 className="text-[#262626] text-lg font-normal mt-2">1884</h3>
              </div>
              <div className="text-center">
                <img src={book2} alt="book2" className="mx-auto" />
                <h3 className="text-[#262626] text-lg font-normal mt-2">Code 8</h3>
              </div>
              <div className="text-center">
                <img src={book3} alt="book3" className="mx-auto" />
                <h3 className="text-[#262626] text-lg font-normal mt-2">Rich dad poor dad</h3>
              </div>
            </Slider>
          </div>
        </div>
        <div className="w-[261px] h-[351px] bg-[#3748A5] rounded-xl p-6 flex flex-col justify-between text-white">
          <h2 className="text-lg font-bold">Китоб ўқишни ёқтирасизми?</h2>
          <p className="text-sm">Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>
          <button className="bg-white text-[#262626] font-bold px-4 py-2 rounded-md flex items-center gap-2">
            <i className='bx bx-heart'></i> Обуна бўлиш
          </button>
        </div>
      </div>
    </div>
  );
};
