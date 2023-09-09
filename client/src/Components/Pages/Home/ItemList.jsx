import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const ItemList = ({ data, item_name }) => {
  return (
    <div className="container-fluid" id="item_list">
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
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
          <div id="item_head">
            <h2 className="text-center">{item_name}</h2>
            <a href="#">View All</a>
          </div>
        </SwiperSlide>

        {data.map((item) => (
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

export default ItemList;
