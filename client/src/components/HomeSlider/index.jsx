import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Banner1 from "../../assets/Banner1.jpg";
import Banner2 from "../../assets/Banner2.jpg";
import Banner3 from "../../assets/Banner3.jpg";
import Banner4 from "../../assets/Banner4.jpg";

const HomeSlider = () => {
  return (
    <div className="homeSlider !py-4">
      <div className="container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={Banner1} alt="banner" srcset="" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px]  overflow-hidden">
              <img src={Banner2} alt="banner" srcset="" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px]  overflow-hidden">
              <img src={Banner3} alt="banner" srcset="" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px]  overflow-hidden">
              <img src={Banner4} alt="banner" srcset="" className="w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
