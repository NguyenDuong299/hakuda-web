import "swiper/css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Brands } from "../../types";
import axios from "axios";
import { Link } from "react-router-dom";
const Brand = () => {
  const [brand, setBrand] = useState<Brands[]>([]);
  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/brands`);
        setBrand(res.data.brands);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBrand();
  }, []);
  return (
    <>
      {brand.length > 0 && (
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
                {brand.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Link to="/" className="flex flex-col items-center group">
                      <img
                        src={`${process.env.REACT_APP_API_URL}/${item.image}`}
                        alt={item.name}
                        className="rounded-full border-2 border-black w-20 h-20 group-hover:rotate-45 transition duration-500"
                      />
                      <span className="mt-1 font-semibold group-hover:text-[#a3a3a3]">
                        {item.name}
                      </span>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Brand;
