import React, { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import axios from "axios";
import { Products } from "../../types";

const Suggest = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const fetchSugestProducts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/filter/suggest`);
      setProducts(res.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchSugestProducts();
  }, []);

  return (
    <section className="mt-[30px]">
      <div className="container px-5 lg:px-0 mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-extrabold">CÓ THỂ BẠN SẼ THÍCH</h2>
          <div className="flex items-center gap-1.5">
            <button
              className="prev-btn bg-white w-[30px] h-[30px] rounded flex items-center justify-center"
              style={{
                boxShadow: "0 1px 12px 0 rgba(0,0,0,0.12)",
              }}
            >
              <img className="h-4" src="/images/icons/left.svg" alt="" />
            </button>
            <button
              className="next-btn bg-white w-[30px] h-[30px] rounded flex items-center justify-center"
              style={{
                boxShadow: "0 1px 12px 0 rgba(0,0,0,0.12)",
              }}
            >
              <img className="h-4" src="/images/icons/right.svg" alt="" />
            </button>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          navigation={{
            nextEl: ".next-btn-3",
            prevEl: ".prev-btn-3",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          modules={[Navigation]}
          className="swiperProduct relative"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index} className="group">
              <Link className="overflow-hidden block" to={`/products/${item.id}`}>
                {item.images &&
                  item.images
                    .filter((img) => img.isThumbnail)
                    .map((img, index) => (
                      <img
                        key={index}
                        src={`${process.env.REACT_APP_API_URL}/${img.image_url}`}
                        alt={img.image_url}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500 aspect-square"
                      />
                    ))}
              </Link>
              <div className="mt-4">
                <h3 className="text-[15px] font-semibold truncate">
                  <Link className="hover:text-[#A3A3A3]" to={`/products/${item.id}`}>
                    {item.name}
                  </Link>
                </h3>
                <span className="text-[#FD0000] font-bold text-base">{Number(item.price).toLocaleString("vi-VN")}₫</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Suggest;
