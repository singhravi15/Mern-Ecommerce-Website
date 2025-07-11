import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import ProductImage from "../../assets/Productimage.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductDetailsImg1 from "../../assets/productdetailimg1.jpg";
import ProductDetailsImg2 from "../../assets/productdetailimg2.jpg";
import ProductDetailsImg3 from "../../assets/productdetailimg3.jpg";
import ProductDetailsImg4 from "../../assets/productdetailimg4.jpg";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSlideBig = useRef();
  const zoomSlideSmall = useRef();
  const goto = (index) => {
    setSlideIndex(index);
    zoomSlideBig.current.swiper.slideTo(index);
    zoomSlideSmall.current.swiper.slideTo(index);
  };
  return (
    <>
      <div className="flex gap-3">
        <div className="swiper w-[20%]">
          <Swiper
            ref={zoomSlideSmall}
            direction="vertical"
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="zoomthumb !h-[360px] overflow-hidden"
          >
            <SwiperSlide>
              <div
                slideIndex
                className={`"item rounded-md overflow-hidden cursor-pointer group" ${
                  slideIndex === 0 ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => goto(0)}
              >
                <img
                  src={ProductDetailsImg1}
                  alt=""
                  srcset=""
                  className="w-full transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`"item rounded-md overflow-hidden cursor-pointer group" ${
                  slideIndex === 1 ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => goto(1)}
              >
                <img
                  src={ProductDetailsImg2}
                  alt=""
                  srcset=""
                  className="w-full transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`"item rounded-md overflow-hidden cursor-pointer group" ${
                  slideIndex === 2 ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => goto(2)}
              >
                <img
                  src={ProductDetailsImg3}
                  alt=""
                  srcset=""
                  className="w-full transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`"item rounded-md overflow-hidden cursor-pointer group" ${
                  slideIndex === 3 ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => goto(3)}
              >
                <img
                  src={ProductDetailsImg4}
                  alt=""
                  srcset=""
                  className="w-full transition-all group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="zoom w-[80%] h-[360px] overflow-hidden">
          <Swiper
            ref={zoomSlideBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={ProductDetailsImg1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={ProductDetailsImg2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={ProductDetailsImg3}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={ProductDetailsImg4}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
