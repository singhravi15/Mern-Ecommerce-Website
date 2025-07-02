import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox";
import AdsBanner1 from "../../assets/AdsBanner.jpg";
const AdsBanner = (props) => {
  return (
    <div className="!w-full !py-8">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="adsSlider"
      >
        <SwiperSlide>
          <BannerBox img={AdsBanner1} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={AdsBanner1} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={AdsBanner1} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={AdsBanner1} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={AdsBanner1} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={AdsBanner1} link={"/"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBanner;
