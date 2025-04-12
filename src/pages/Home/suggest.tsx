import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const Suggest = () => {
  const mockData = [
    {
      img: "f84eb124-0644-448c-8e8c-30776876301d-1735131922675.webp",
      name: "Mô hình Metal Build 1/100 Date Masamune (Có bonus Gacha) - Mô hình chính hãng Moshow Toys",
      price: "1400000",
    },
    {
      img: "f84eb124-0644-448c-8e8c-30776876301d-1735131922675.webp",
      name: "Mô hình Metal Build 1/100 Date Masamune (Có bonus Gacha) - Mô hình chính hãng Moshow Toys",
      price: "1400000",
    },
    {
      img: "f84eb124-0644-448c-8e8c-30776876301d-1735131922675.webp",
      name: "Mô hình Metal Build 1/100 Date Masamune (Có bonus Gacha) - Mô hình chính hãng Moshow Toys",
      price: "1400000",
    },
    {
      img: "f84eb124-0644-448c-8e8c-30776876301d-1735131922675.webp",
      name: "Mô hình Metal Build 1/100 Date Masamune (Có bonus Gacha) - Mô hình chính hãng Moshow Toys",
      price: "1400000",
    },
    {
      img: "f84eb124-0644-448c-8e8c-30776876301d-1735131922675.webp",
      name: "Mô hình Metal Build 1/100 Date Masamune (Có bonus Gacha) - Mô hình chính hãng Moshow Toys",
      price: "1400000",
    },
  ];
  return (
    <section className="mt-[30px]">
      <div className="container px-5 lg:px-0 mx-auto">
        <div className="flex items-center justify-between mb-5">
          <a href="/" className="text-2xl font-extrabold hover:text-[#A3A3A3]">
            CÓ THỂ BẠN SẼ THÍCH
          </a>
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
          {mockData.map((item, index) => (
            <SwiperSlide key={index} className="group">
              <Link to="/">
                <img src={`/images/${item.img}`} alt="" className="w-full group-hover:scale-110 duration-500" />
              </Link>
              <div className="mt-4">
                <h3 className="text-[15px] font-semibold truncate">
                  <Link className="hover:text-[#A3A3A3]" to="/">{item.name}</Link>
                </h3>
                <span className="text-[#FD0000] font-bold text-base">
                  {Number(item.price).toLocaleString("vi-VN")}₫
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Suggest;
