import React from "react";
import picture1 from "../assets/p1.png"
import picture2 from "../assets/p2.png"
import picture3 from "../assets/p3.png"
import picture4 from "../assets/p4.png"
import picture5 from "../assets/p5.png"
import picture6 from "../assets/p6.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
}

export const Hero3 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <div className="w-full h-[236px] mt-10 flex justify-center items-center">
            <div className="w-[1440px] h-[236px]">
                <h2 className="font-semibold size-8 text-[#262626] mt-0 mb-[32px]">Рукнлар</h2>
                <div className="slider2">
                        <Slider {...settings}>
                            <div>
                                <img src={picture1} alt="book1" />
                            </div>
                            <div>
                                <img src={picture2} alt="book1" />
                            </div>
                            <div>
                                <img src={picture3} alt="book1" />
                            </div>
                            <div>
                                <img src={picture4} alt="book1" />
                            </div>
                            <div>
                                <img src={picture5} alt="book1" />
                            </div>
                            <div>
                                <img src={picture6} alt="book1" />
                            </div>
                        </Slider>
                    </div>
            </div>
        </div>
    )
}
