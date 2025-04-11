import "swiper/css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Brand = () => {
  const mockData = [
    {
      nameBrand: "RG",
      imageBrand: "hg.webp",
    },
    {
      nameBrand: "RG",
      imageBrand: "rg.webp",
    },
    {
      nameBrand: "RG",
      imageBrand: "mg.webp",
    },
    {
      nameBrand: "RG",
      imageBrand: "rg.webp",
    },
    {
      nameBrand: "RG",
      imageBrand: "rg.webp",
    },
    {
      nameBrand: "RG",
      imageBrand: "rg.webp",
    },
    {
      nameBrand: "RG",
      imageBrand: "rg.webp",
    },
    {
      nameBrand: "RG",
      imageBrand: "rg.webp",
    },
    {
      nameBrand: "RG",
      imageBrand: "rg.webp",
    },
    {
      nameBrand: "RG",
      imageBrand: "rg.webp",
    },
    {
      nameBrand: "RG",
      imageBrand: "rg.webp",
    },
    {
      nameBrand: "RG",
      imageBrand: "rg.webp",
    },
    {
      nameBrand: "RG",
      imageBrand: "rg.webp",
    },
  ];
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
            {mockData.map((item, index) => (
              <SwiperSlide key={index}>
                <a href="/" className="flex flex-col items-center group">
                  <img
                    src={`/images/${item.imageBrand}`}
                    alt=""
                    className="rounded-full border-2 border-black w-20 h-20 group-hover:rotate-45 transition duration-500"
                  />
                  <span>{item.nameBrand}</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Brand;
