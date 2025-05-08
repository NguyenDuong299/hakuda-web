import React, { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Products } from "../../types";
import axios from "axios";

const Product = () => {
  const [newProduct, setNewProduct] = useState<Products[]>([]);
  const [hotProduct, setHotProduct] = useState<Products[]>([]);
  const fetchNewProduct = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/filter/new`);
      setNewProduct(res.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchHotProduct = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/filter/hot`);
      setHotProduct(res.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchNewProduct();
    fetchHotProduct();
  }, []);
  return (
    <section className="mt-[30px]">
      <div className="container px-5 lg:px-0 mx-auto">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/4">
            <img src="/images/ads.webp" alt="" className="w-full h-auto object-cover" />
          </div>
          <div className="w-full lg:w-3/4">
            <div className="">
              <div className="flex justify-between items-center">
                <h2 className="font-extrabold text-2xl">SẢN PHẨM MỚI VỀ</h2>
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
              <div className="mt-5">
                <Swiper
                  spaceBetween={30}
                  navigation={{
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn",
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
                  {newProduct.map((item, index) => (
                    <SwiperSlide key={index} className="group">
                      <Link to={`/products/${item.id}`} className="block overflow-hidden">
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
                        <span className="text-[#FD0000] font-bold text-base">{Number(item.price).toLocaleString("vi-VN")} ₫</span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            {hotProduct.length > 0 && (
              <div className="bg-[#F91111] px-2.5 rounded-[7px] pt-6 pb-2.5 mt-5">
                <div className="flex items-center justify-between">
                  <div className="md:flex items-center gap-4 ">
                    <h2 className="text-2xl font-extrabold text-white text-nowrap">SẢN PHẨM NỔI BẬT</h2>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="prev-btn-2 bg-white w-[30px] h-[30px] rounded flex items-center justify-center"
                      style={{
                        boxShadow: "0 1px 12px 0 rgba(0,0,0,0.12)",
                      }}
                    >
                      <img className="h-4" src="/images/icons/left.svg" alt="" />
                    </button>
                    <button
                      className="next-btn-2 bg-white w-[30px] h-[30px] rounded flex items-center justify-center"
                      style={{
                        boxShadow: "0 1px 12px 0 rgba(0,0,0,0.12)",
                      }}
                    >
                      <img className="h-4" src="/images/icons/right.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div className="">
                  <Swiper
                    spaceBetween={10}
                    navigation={{
                      nextEl: ".next-btn-2",
                      prevEl: ".prev-btn-2",
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                    }}
                    modules={[Navigation]}
                    className="swiperProduct relative mt-4"
                  >
                    {hotProduct.map((item, index) => (
                      <SwiperSlide>
                        <div key={index} className="flex bg-white p-2.5 rounded gap-2.5">
                          <Link to={`/products/${item.id}`} className="block overflow-hidden">
                            {item.images &&
                              item.images
                                .filter((img) => img.isThumbnail)
                                .map((img, index) => <img key={index} src={`${process.env.REACT_APP_API_URL}/${img.image_url}`} alt={img.image_url} className="h-[120px] aspect-square" />)}
                          </Link>
                          <div className="flex-1">
                            <Link to={`produts/${item.id}`} className="text-[15px] font-semibold line-clamp-2 hover:text-[#A3A3A3]">
                              {item.name}
                            </Link>
                            <span className="text-[#FD0000] font-bold text-base">{Number(item.price).toLocaleString("vi-VN")} ₫</span>
                            <h4 className="text-xs">Đang cháy hàng</h4>
                            <div className="w-full rounded-full bg-[#ebebeb] h-2.5 mt-2 relative">
                              <div className="absolute bg-[#F91111] h-2.5 rounded-full w-[80%]"></div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product;
