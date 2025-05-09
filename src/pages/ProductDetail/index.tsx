import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";
import Breadcrumb from "../../components/ui/breadcrumb";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import RelatedProduct from "./RelatedProduct";
// import RecentProducts from "./RecentlyProduct";
import RelatedInformation from "./RelatedInformation";
import { useNavigate, useParams } from "react-router-dom";
import { Products } from "../../types";
import axios from "axios";
import BuyingGuide from "./BuyingGuide";
import { useCartStore } from "../../store/cartStore";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quality, setQuality] = useState(1);
  const [tabActive, setTabActive] = useState(1);
  const [product, setProduct] = useState<Products | null>(null);
  const [relatedProduct, setRelatedProduct] = useState<Products[]>([]);
  const { addToCart } = useCartStore();

  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {});
  }, []);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/${id}`);
        if (res.data.product) {
          setProduct(res.data.product);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProductById();
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (product) {
      const cartProduct = {
        ...product,
        cart_quantity: quality,
      };
      addToCart(cartProduct);
      toast.success("Thêm vào giỏ hàng thành công!");
    }
  };
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/filter/related/${product?.id}`);
      setRelatedProduct(res.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [product]);
  return (
    <>
      <div className="container px-5 mx-auto lg:px-0 mb-[30px]">
        <Breadcrumb br1="Sản phẩm" url="/products" br2={product?.name} />
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-[calc(100%/12*5)]">
                <Swiper
                  style={{
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Thumbs]}
                  className="mySwiper2"
                >
                  {product?.images.map((item, index) => (
                    <SwiperSlide key={index}>
                      <a data-fancybox="gallery" href={`${process.env.REACT_APP_API_URL}/${item.image_url}`}>
                        <img src={`${process.env.REACT_APP_API_URL}/${item.image_url}`} className="rounded-[5px] w-full aspect-square" alt={item.image_url} />
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={5} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Thumbs]} className="mySwiper mt-2.5">
                  {product?.images.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img src={`${process.env.REACT_APP_API_URL}/${item.image_url}`} className="rounded-[5px] w-full aspect-square" alt={item.image_url} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-full md:w-[calc(100%/12*7)]">
                <div>
                  <h3 className="font-bold text-lg mb-2.5">{product?.name}</h3>
                  <div className="flex gap-5 mb-4">
                    {product?.brand_id && (
                      <span className="font-normal">
                        Thương hiệu: <strong>{product?.brand_id}</strong>
                      </span>
                    )}
                    <span className="font-normal">
                      Mã sản phẩm: <strong>{product?.code}</strong>
                    </span>
                  </div>
                  <span className="text-[#fd0000] text-xl font-bold">{Number(product?.price).toLocaleString("vi-VN")} ₫</span>
                </div>
                {/* <div className="mt-5 pt-2.5 border-t border-[#ebebeb]">
                  <h4 className="text-base">5 Mã giảm giá</h4>
                  <div className="flex flex-wrap gap-3 mt-2.5">
                    <button className="border border-[#ebebeb] px-3 py-1 relative voucher hover:bg-[#A3A3A3] hover:text-white">Giảm 5%</button>
                    <button className="border border-[#ebebeb] px-3 py-1 relative voucher hover:bg-[#A3A3A3] hover:text-white">Giảm 6%</button>
                    <button className="border border-[#ebebeb] px-3 py-1 relative voucher hover:bg-[#A3A3A3] hover:text-white">Giảm 8%</button>
                    <button className="border border-[#ebebeb] px-3 py-1 relative voucher hover:bg-[#A3A3A3] hover:text-white">Giảm 10%</button>
                    <button className="border border-[#ebebeb] px-3 py-1 relative voucher hover:bg-[#A3A3A3] hover:text-white">Giảm 12%</button>
                  </div>
                </div> */}
                <div className="mt-5 pt-2.5 border-t border-[#EBEBEB]">
                  <h4>Số lượng:</h4>
                  <div className="flex items-center mt-2.5">
                    <button className="w-[30px] h-[30px] border" onClick={() => setQuality(Math.max(1, quality - 1))}>
                      -
                    </button>
                    <span className="w-[35px] h-[30px] border-t border-b flex items-center justify-center">{quality}</span>
                    <button className="w-[30px] h-[30px] border" onClick={() => setQuality(quality + 1)}>
                      +
                    </button>
                  </div>
                </div>
                <button onClick={handleAddToCart} className="text-base font-bold bg-black text-white w-full py-[13px] mt-5 rounded">
                  THÊM VÀO GIỎ HÀNG
                </button>
                <div className="flex items-center gap-2.5 mt-5">
                  <span>Chia sẻ ngay:</span>
                  <a href="/" className="flex items-center gap-1 bg-[#0094FF] rounded px-2 text-white">
                    <img className="h-[15px]" src="/images/icons/facebook.svg" alt="" />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <ul className="flex gap-5">
                <li onClick={() => setTabActive(1)} className={`text-base hover:text-[#A3A3A3] cursor-pointer font-bold ${tabActive === 1 ? "text-[#A3A3A3]" : ""}`}>
                  Thông tin sản phẩm
                </li>
                <li onClick={() => setTabActive(2)} className={`text-base hover:text-[#A3A3A3] cursor-pointer font-bold ${tabActive === 2 ? "text-[#A3A3A3]" : ""}`}>
                  Hướng dẫn mua hàng
                </li>
              </ul>
              {tabActive === 1 && (
                <div className="mt-2.5 border border-[#EBEBEB] p-5">
                  - Metal Build 1/72 Duke Of Wei Guo Gong + Chiều cao khi hoàn thành 30cm + Là mô hình Action: có khả năng thay đổi nhiều tư thế; trưng bày hoặc pose dáng chụp ảnh
                </div>
              )}
              {tabActive === 2 && <BuyingGuide />}
            </div>
            <div className="mt-5">
              <RelatedProduct products={relatedProduct} />
            </div>
            {/* <div className="mt-5">
              <RecentProducts />
            </div> */}
          </div>
          <div className="w-full lg:w-1/4">
            <RelatedInformation />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
