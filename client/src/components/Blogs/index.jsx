import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogItem from "../BlogItem";

const Blogs = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
      <SwiperSlide>
        <BlogItem />
      </SwiperSlide>
    </Swiper>
  );
};

export default Blogs;
