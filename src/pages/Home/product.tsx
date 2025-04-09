import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Product = () => {
  return (
    <section className="mt-[30px]">
      <div className="container px-5 lg:px-0 mx-auto">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/4">
            <img
              src="/images/ads.webp"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-3/4">
            <div className="">
              <div className="flex justify-between items-center">
                <a className="font-extrabold text-2xl" href="/">
                  SẢN PHẨM MỚI VỀ
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
              <div className="mt-5">
                <Swiper
                  slidesPerView={5}
                  spaceBetween={30}
                  navigation={{
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn",
                  }}
                  modules={[Navigation]}
                  className="swiperProduct relative"
                >
                  <SwiperSlide>
                    <img
                      src="/images/f84eb124-0644-448c-8e8c-30776876301d-1735131922675.webp"
                      alt=""
                      className="w-full"
                    />
                    <div className="mt-4">
                      <h3 className="text-[15px] font-semibold truncate">
                        Mô hình Metal Build 1/100 Date Masamune (Có bonus Gacha)
                        - Mô hình chính hãng Moshow Toys
                      </h3>
                      <span className="text-[#FD0000] font-bold text-base">
                        1.400.000đ
                      </span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/images/f84eb124-0644-448c-8e8c-30776876301d-1735131922675.webp"
                      alt=""
                      className="w-full"
                    />
                    <div className="mt-4">
                      <h3 className="text-[15px] font-semibold truncate">
                        Mô hình Metal Build 1/100 Date Masamune (Có bonus Gacha)
                        - Mô hình chính hãng Moshow Toys
                      </h3>
                      <span className="text-[#FD0000] font-bold text-base">
                        1.400.000đ
                      </span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/images/f84eb124-0644-448c-8e8c-30776876301d-1735131922675.webp"
                      alt=""
                      className="w-full"
                    />
                    <div className="mt-4">
                      <h3 className="text-[15px] font-semibold truncate">
                        Mô hình Metal Build 1/100 Date Masamune (Có bonus Gacha)
                        - Mô hình chính hãng Moshow Toys
                      </h3>
                      <span className="text-[#FD0000] font-bold text-base">
                        1.400.000đ
                      </span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/images/f84eb124-0644-448c-8e8c-30776876301d-1735131922675.webp"
                      alt=""
                      className="w-full"
                    />
                    <div className="mt-4">
                      <h3 className="text-[15px] font-semibold truncate">
                        Mô hình Metal Build 1/100 Date Masamune (Có bonus Gacha)
                        - Mô hình chính hãng Moshow Toys
                      </h3>
                      <span className="text-[#FD0000] font-bold text-base">
                        1.400.000đ
                      </span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/images/f84eb124-0644-448c-8e8c-30776876301d-1735131922675.webp"
                      alt=""
                      className="w-full"
                    />
                    <div className="mt-4">
                      <h3 className="text-[15px] font-semibold truncate">
                        Mô hình Metal Build 1/100 Date Masamune (Có bonus Gacha)
                        - Mô hình chính hãng Moshow Toys
                      </h3>
                      <span className="text-[#FD0000] font-bold text-base">
                        1.400.000đ
                      </span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/images/f84eb124-0644-448c-8e8c-30776876301d-1735131922675.webp"
                      alt=""
                      className="w-full"
                    />
                    <div className="mt-4">
                      <h3 className="text-[15px] font-semibold truncate">
                        Mô hình Metal Build 1/100 Date Masamune (Có bonus Gacha)
                        - Mô hình chính hãng Moshow Toys
                      </h3>
                      <span className="text-[#FD0000] font-bold text-base">
                        1.400.000đ
                      </span>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="bg-[#F91111] px-2.5 rounded-[7px] pt-6 pb-2.5 mt-5">
              <div className="flex items-center justify-between">
                <div className=" flex items-center gap-4">
                  <a className="text-2xl font-extrabold text-white" href="/">
                    GIÁ TỐT HÔM NAY
                  </a>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#FF9473] text-white px-3 py-1.5 rounded text-lg">
                      22
                    </span>
                    <span className="text-[#FF9473]">:</span>
                    <span className="bg-[#FF9473] text-white px-3 py-1.5 rounded text-lg">
                      05
                    </span>
                    <span className="text-[#FF9473]">:</span>
                    <span className="bg-[#FF9473] text-white px-3 py-1.5 rounded text-lg">
                      22
                    </span>
                  </div>
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
                  slidesPerView={3}
                  spaceBetween={10}
                  navigation={{
                    nextEl: ".next-btn-2",
                    prevEl: ".prev-btn-2",
                  }}
                  modules={[Navigation]}
                  className="swiperProduct relative mt-4"
                >
                  <SwiperSlide>
                    <div className="flex bg-white p-2.5 rounded gap-2.5">
                      <img
                        src="/images/b9211a26-dc96-4662-89ea-38f85e5cae40-1735181035947.jpg"
                        alt=""
                        className="h-[120px]"
                      />
                      <div>
                        <a
                          href="/"
                          className="text-[15px] font-semibold line-clamp-2"
                        >
                          Mô hình HGBDR 1/144 Nepteight Unit - Mô hình gundam
                          chính hãng Bandai Nhật Bản
                        </a>
                        <span className="text-[#FD0000] font-bold text-base">
                          1.400.000đ
                        </span>
                        <h4 className="text-xs">Đang cháy hàng</h4>
                        <div className="w-full rounded-full bg-[#ebebeb] h-2.5 mt-2 relative">
                          <div className="absolute bg-[#F91111] h-2.5 rounded-full w-[80%]"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex bg-white p-2.5 rounded gap-2.5">
                      <img
                        src="/images/b9211a26-dc96-4662-89ea-38f85e5cae40-1735181035947.jpg"
                        alt=""
                        className="h-[120px]"
                      />
                      <div>
                        <a
                          href="/"
                          className="text-[15px] font-semibold line-clamp-2"
                        >
                          Mô hình HGBDR 1/144 Nepteight Unit - Mô hình gundam
                          chính hãng Bandai Nhật Bản
                        </a>
                        <span className="text-[#FD0000] font-bold text-base">
                          1.400.000đ
                        </span>
                        <h4 className="text-xs">Đang cháy hàng</h4>
                        <div className="w-full rounded-full bg-[#ebebeb] h-2.5 mt-2 relative">
                          <div className="absolute bg-[#F91111] h-2.5 rounded-full w-[80%]"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex bg-white p-2.5 rounded gap-2.5">
                      <img
                        src="/images/b9211a26-dc96-4662-89ea-38f85e5cae40-1735181035947.jpg"
                        alt=""
                        className="h-[120px]"
                      />
                      <div>
                        <a
                          href="/"
                          className="text-[15px] font-semibold line-clamp-2"
                        >
                          Mô hình HGBDR 1/144 Nepteight Unit - Mô hình gundam
                          chính hãng Bandai Nhật Bản
                        </a>
                        <span className="text-[#FD0000] font-bold text-base">
                          1.400.000đ
                        </span>
                        <h4 className="text-xs">Đang cháy hàng</h4>
                        <div className="w-full rounded-full bg-[#ebebeb] h-2.5 mt-2 relative">
                          <div className="absolute bg-[#F91111] h-2.5 rounded-full w-[80%]"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex bg-white p-2.5 rounded gap-2.5">
                      <img
                        src="/images/b9211a26-dc96-4662-89ea-38f85e5cae40-1735181035947.jpg"
                        alt=""
                        className="h-[120px]"
                      />
                      <div>
                        <a
                          href="/"
                          className="text-[15px] font-semibold line-clamp-2"
                        >
                          Mô hình HGBDR 1/144 Nepteight Unit - Mô hình gundam
                          chính hãng Bandai Nhật Bản
                        </a>
                        <span className="text-[#FD0000] font-bold text-base">
                          1.400.000đ
                        </span>
                        <h4 className="text-xs">Đang cháy hàng</h4>
                        <div className="w-full rounded-full bg-[#ebebeb] h-2.5 mt-2 relative">
                          <div className="absolute bg-[#F91111] h-2.5 rounded-full w-[80%]"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product;
