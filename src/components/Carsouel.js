import React from "react";
import Slider from "react-slick";
export default function Carousel() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <div className="bg-purple-500 h-96">
          <h3 className=" mt-32 bg-purple-500 h-64 text-4xl font-serif tracking-tighter text-white font-extrabold text-center">
            Your convenience is at your fingertips.
          </h3>
        </div>
        <div className="bg-green-400 h-96">
          <h3 className="mt-32 text-white font-extrabold font-serif text-4xl text-center">
            Where dream romance becomes reality
          </h3>
        </div>
        <div className="bg-red-500 h-96 ">
          <h3 className="mt-32 h-64 text-white  font-serif font-extrabold text-4xl text-center">
            Where dream romance becomes reality
          </h3>
        </div>
      </Slider>
    </div>
  );
}
