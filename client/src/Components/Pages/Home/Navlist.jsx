import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Navlist Database
const NavlistData = [
  {
    id: 1,
    name: "Grocery",
    img: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
  },
  {
    id: 2,
    name: "Mobiles",
    img: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
  },
  {
    id: 3,
    name: "Fashion",
    img: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
  },
  {
    id: 4,
    name: "Electronics",
    img: "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
  },
  {
    id: 5,
    name: "Home & Furniture",
    img: "https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
  },
  {
    id: 6,
    name: "Appliances",
    img: "https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
  },
  {
    id: 7,
    name: "Travel",
    img: "https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
  },
  {
    id: 8,
    name: "Beauty, Toys & More",
    img: "https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
  },
  {
    id: 9,
    name: "Two Wheelers",
    img: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
  },
];

const Navlist = () => {
  return (
    <div className="container" id="Navlist">
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 9,
          },
        }}
      >
        {NavlistData.map((item) => (
          <SwiperSlide key={item.id} className="text-center">
            <a href="#">
              <img src={item.img} alt={item.name} className="img-fluid" />
              <p>{item.name}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Navlist;
