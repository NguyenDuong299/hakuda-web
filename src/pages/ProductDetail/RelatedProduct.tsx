import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Products } from "../../types";

interface Props {
  products: Products[];
}

const RelatedProduct = ({ products }: Props) => {
  return (
    <>
      {products.length > 0 && (
        <div className="">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">SẢN PHẨM LIÊN QUAN</h2>
            <div className="flex items-center gap-1.5">
              <button
                className="prev-btn-4 bg-white w-[30px] h-[30px] rounded flex items-center justify-center"
                style={{
                  boxShadow: "0 1px 12px 0 rgba(0,0,0,0.12)",
                }}
              >
                <img className="h-4" src="/images/icons/left.svg" alt="" />
              </button>
              <button
                className="next-btn-4 bg-white w-[30px] h-[30px] rounded flex items-center justify-center"
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
                nextEl: ".next-btn-4",
                prevEl: ".prev-btn-4",
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
                  <Link to={`/products/${item.id}`}>
                    {item.images &&
                      item.images
                        .filter((img) => img.isThumbnail)
                        .map((img, index) => (
                          <img key={index} src={`${process.env.REACT_APP_API_URL}/${img.image_url}`} alt={img.image_url} className="w-full group-hover:scale-110 duration-500 aspect-square" />
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
        </div>
      )}
    </>
  );
};
export default RelatedProduct;
