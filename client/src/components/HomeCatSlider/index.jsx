import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import HCBanner1 from "../../assets/HCBanner1.png";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homecatslider !pt-4 !py-8">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={HCBanner1}
                  alt=""
                  srcset=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={HCBanner1}
                  alt=""
                  srcset=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={HCBanner1}
                  alt=""
                  srcset=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={HCBanner1}
                  alt=""
                  srcset=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={HCBanner1}
                  alt=""
                  srcset=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={HCBanner1}
                  alt=""
                  srcset=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={HCBanner1}
                  alt=""
                  srcset=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={HCBanner1}
                  alt=""
                  srcset=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={HCBanner1}
                  alt=""
                  srcset=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-8 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src={HCBanner1}
                  alt=""
                  srcset=""
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] !mt-3">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
