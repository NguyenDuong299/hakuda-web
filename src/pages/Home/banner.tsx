import "swiper/css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Navigation  } from "swiper/modules";

const Banner = () => {
  return (
    <section className="mt-2.5">
      <div className="container px-5 mx-auto lg:px-0">
        <div>
          <Swiper
            className="w-full"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 7000 }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide>
              <a href="/">
                <img src="/images/slider_1.webp" alt="" className="w-full" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <img src="/images/slider_1.webp" alt="" className="w-full" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/">
                <img src="/images/slider_1.webp" alt="" className="w-full" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Banner;
