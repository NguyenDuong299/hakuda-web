import "swiper/css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import axios from "axios";
import { Banners } from "../../types";

const Banner = () => {
  const [banner, setBanner] = useState<Banners[]>([]);
  const fetchBanner = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/banners`);
      setBanner(res.data.banners);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <>
      {banner.length > 0 && (
        <section className="mt-2.5">
          <div className="container px-5 mx-auto lg:px-0">
            <div>
              <Swiper className="w-full" spaceBetween={0} slidesPerView={1} loop={true} autoplay={{ delay: 7000 }} navigation={true} modules={[Autoplay, Navigation]}>
                {banner.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={`${process.env.REACT_APP_API_URL}/${item.image}`} alt={item.name} className="w-full aspect-[1400/546]" />
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
export default Banner;
