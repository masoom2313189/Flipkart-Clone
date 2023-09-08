import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const BestOfElectronicsData = [
  {
    id: 1,
    img: "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
    name: "Top Mirrorless Cameras",
    price: "Shop Now!",
    desc: "Canon, Sony, Fujifilm",
  },
  {
    id: 2,
    img: "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
    name: "Top Mirrorless Cameras",
    price: "Shop Now!",
    desc: "Canon, Sony, Fujifilm",
  },
  {
    id: 3,
    img: "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
    name: "Top Mirrorless Cameras",
    price: "Shop Now!",
    desc: "Canon, Sony, Fujifilm",
  },
  {
    id: 4,
    img: "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
    name: "Top Mirrorless Cameras",
    price: "Shop Now!",
    desc: "Canon, Sony, Fujifilm",
  },
  {
    id: 5,
    img: "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
    name: "Top Mirrorless Cameras",
    price: "Shop Now!",
    desc: "Canon, Sony, Fujifilm",
  },
  {
    id: 6,
    img: "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
    name: "Top Mirrorless Cameras",
    price: "Shop Now!",
    desc: "Canon, Sony, Fujifilm",
  },
  {
    id: 7,
    img: "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
    name: "Top Mirrorless Cameras",
    price: "Shop Now!",
    desc: "Canon, Sony, Fujifilm",
  },
  {
    id: 8,
    img: "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
    name: "Top Mirrorless Cameras",
    price: "Shop Now!",
    desc: "Canon, Sony, Fujifilm",
  },
];

const BestOfElectronics = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 4.5,
          },
          1200: {
            slidesPerView: 6.5,
          },
        }}
      >
        <SwiperSlide>
          <h2 className="text-center">Best of Electronics</h2>
        </SwiperSlide>

        {BestOfElectronicsData.map((item) => (
          <SwiperSlide key={item.id} className="text-center">
            <a href="#">
              <img src={item.img} alt={item.name} className="img-fluid" />
              <h6>{item.name}</h6>
              <p>{item.price}</p>
              <p>{item.desc}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestOfElectronics;
