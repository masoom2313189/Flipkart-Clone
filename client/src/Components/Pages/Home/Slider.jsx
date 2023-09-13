import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const SliderData = [
  {
    id: 1,
    img: "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/fe85ef3ca993b6e5.jpg?q=50",
  },
  {
    id: 2,
    img: "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/489d3110296ee3bc.jpg?q=50",
  },
  {
    id: 3,
    img: "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/05adcdf765d309fd.jpg?q=50",
  },
  {
    id: 4,
    img: "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/9f046dbb7cebbf42.jpg?q=50",
  },
  {
    id: 5,
    img: "https://rukminim2.flixcart.com/fk-p-flap/50/50/image/4529fd434a85c683.jpg?q=50",
  },
  {
    id: 6,
    img: "https://rukminim2.flixcart.com/fk-p-flap/50/50/image/8a89ee09acc1a9e5.jpg?q=50",
  },
];

const Slider = () => {
  return (
    <div className="container-fluid" id="Slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {SliderData.map((item) => (
          <SwiperSlide>
            <a href="#">
              <img src={item.img} alt="Image" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
