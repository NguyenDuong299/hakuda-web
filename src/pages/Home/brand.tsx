import "swiper/css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Brand = () => {
  return (
    <section className="mt-[30px]">
      <div className="container px-5 mx-auto lg:px-0">
        <div>
          <Swiper
            className="w-full rounded-full"
            spaceBetween={0}
            navigation={true}
            autoplay={{ delay: 127000 }}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 8,
              },
              1280: {
                slidesPerView: 10,
              },
            }}
          >
            <SwiperSlide>
              <a href="/" className="flex flex-col items-center group">
                <img
                  src="/images/hg.webp"
                  alt=""
                  className="rounded-full border-2 border-black w-20 h-20 group-hover:rotate-45 transition duration-300"
                />
                <span>RG</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/" className="flex flex-col items-center group">
                <img
                  src="/images/rg.webp"
                  alt=""
                  className="rounded-full border-2 border-black w-20 h-20 group-hover:rotate-45 transition duration-300"
                />
                <span>RG</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/" className="flex flex-col items-center group">
                <img
                  src="/images/mg.webp"
                  alt=""
                  className="rounded-full border-2 border-black w-20 h-20 group-hover:rotate-45 transition duration-300"
                />
                <span>RG</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/" className="flex flex-col items-center group">
                <img
                  src="/images/pg.webp"
                  alt=""
                  className="rounded-full border-2 border-black w-20 h-20 group-hover:rotate-45 transition duration-300"
                />
                <span>RG</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/" className="flex flex-col items-center group">
                <img
                  src="/images/motor.webp"
                  alt=""
                  className="rounded-full border-2 border-black w-20 h-20 group-hover:rotate-45 transition duration-300"
                />
                <span>RG</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/" className="flex flex-col items-center group">
                <img
                  src="/images/moshow.webp"
                  alt=""
                  className="rounded-full border-2 border-black w-20 h-20 group-hover:rotate-45 transition duration-300"
                />
                <span>RG</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/" className="flex flex-col items-center group">
                <img
                  src="/images/cangdao.webp"
                  alt=""
                  className="rounded-full border-2 border-black w-20 h-20 group-hover:rotate-45 transition duration-300"
                />
                <span>RG</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/" className="flex flex-col items-center group">
                <img
                  src="/images/in-era.webp"
                  alt=""
                  className="rounded-full border-2 border-black w-20 h-20 group-hover:rotate-45 transition duration-300"
                />
                <span>RG</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/" className="flex flex-col items-center group">
                <img
                  src="/images/30mm.webp"
                  alt=""
                  className="rounded-full border-2 border-black w-20 h-20 group-hover:rotate-45 transition duration-300"
                />
                <span>RG</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/" className="flex flex-col items-center group">
                <img
                  src="/images/30ms.webp"
                  alt=""
                  className="rounded-full border-2 border-black w-20 h-20 group-hover:rotate-45 transition duration-300"
                />
                <span>RG</span>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="/" className="flex flex-col items-center group">
                <img
                  src="/images/fig.webp"
                  alt=""
                  className="rounded-full border-2 border-black w-20 h-20 group-hover:rotate-45 transition duration-300"
                />
                <span>RG</span>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Brand;
