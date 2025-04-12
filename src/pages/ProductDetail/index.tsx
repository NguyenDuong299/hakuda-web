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
import RecentProducts from "./RecentlyProduct";
import RelatedInformation from "./RelatedInformation";

const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quality, setQuality] = useState(1);
  const [tabActive, setTabActive] = useState(1);

  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {});
  }, []);

  return (
    <>
      <div className="container px-5 mx-auto lg:px-0 mb-[30px]">
        <Breadcrumb />
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
                  <SwiperSlide>
                    <a
                      data-fancybox="gallery"
                      href="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                    >
                      <img
                        src="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                        className="rounded-[5px] w-full"
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      data-fancybox="gallery"
                      href="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                    >
                      <img
                        src="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                        className="rounded-[5px] w-full"
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      data-fancybox="gallery"
                      href="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                    >
                      <img
                        src="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                        className="rounded-[5px] w-full"
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      data-fancybox="gallery"
                      href="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                    >
                      <img
                        src="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                        className="rounded-[5px] w-full"
                      />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      data-fancybox="gallery"
                      href="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                    >
                      <img
                        src="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                        className="rounded-[5px] w-full"
                      />
                    </a>
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Thumbs]}
                  className="mySwiper mt-2.5"
                >
                  <SwiperSlide>
                    <img
                      src="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                      className="rounded-[5px] w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                      className="rounded-[5px] w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                      className="rounded-[5px] w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                      className="rounded-[5px] w-full"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/images/1fd8fe39-98f0-4203-9522-e4aa738b66e3-1744288595490.webp"
                      className="rounded-[5px] w-full"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="w-full md:w-[calc(100%/12*7)]">
                <div>
                  <h3 className="font-bold text-lg mb-2.5">
                    Mô hình Metal Build 1/72 Duke Of Wei Guo Gong - Chính hãng
                    Moshow Toys
                  </h3>
                  <div className="flex gap-5 mb-4">
                    <span className="font-normal">
                      Thương hiệu: <strong>MOSHOW</strong>
                    </span>
                    <span className="font-normal">
                      Mã sản phẩm: <strong>MCTAP04</strong>
                    </span>
                  </div>
                  <span className="text-[#fd0000] text-xl font-bold">
                    3.500.000đ
                  </span>
                </div>
                <div className="mt-5 pt-2.5 border-t border-[#ebebeb]">
                  <h4 className="text-base">5 Mã giảm giá</h4>
                  <div className="flex flex-wrap gap-3 mt-2.5">
                    <button className="border border-[#ebebeb] px-3 py-1 relative voucher hover:bg-[#A3A3A3] hover:text-white">
                      Giảm 5%
                    </button>
                    <button className="border border-[#ebebeb] px-3 py-1 relative voucher hover:bg-[#A3A3A3] hover:text-white">
                      Giảm 6%
                    </button>
                    <button className="border border-[#ebebeb] px-3 py-1 relative voucher hover:bg-[#A3A3A3] hover:text-white">
                      Giảm 8%
                    </button>
                    <button className="border border-[#ebebeb] px-3 py-1 relative voucher hover:bg-[#A3A3A3] hover:text-white">
                      Giảm 10%
                    </button>
                    <button className="border border-[#ebebeb] px-3 py-1 relative voucher hover:bg-[#A3A3A3] hover:text-white">
                      Giảm 12%
                    </button>
                  </div>
                </div>
                <div className="mt-5 pt-2.5 border-t border-[#EBEBEB]">
                  <h4>Số lượng:</h4>
                  <div className="flex items-center mt-2.5">
                    <button
                      className="w-[30px] h-[30px] border"
                      onClick={() => setQuality(quality - 1)}
                    >
                      -
                    </button>
                    <span className="w-[35px] h-[30px] border-t border-b block flex items-center justify-center">
                      {quality}
                    </span>
                    <button
                      className="w-[30px] h-[30px] border"
                      onClick={() => setQuality(quality + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="text-base font-bold bg-black text-white w-full py-[13px] mt-5 rounded">
                  THÊM VÀO GIỎ HÀNG
                </button>
                <div className="flex items-center gap-2.5 mt-5">
                  <span>Chia sẻ ngay:</span>
                  <a
                    href="/"
                    className="flex items-center gap-1 bg-[#0094FF] rounded px-2 text-white"
                  >
                    <img
                      className="h-[15px]"
                      src="/images/icons/facebook.svg"
                      alt=""
                    />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <ul className="flex gap-5">
                <li
                  onClick={() => setTabActive(1)}
                  className={`text-base hover:text-[#A3A3A3] cursor-pointer font-bold ${
                    tabActive === 1 ? "text-[#A3A3A3]" : ""
                  }`}
                >
                  Thông tin sản phẩm
                </li>
                <li
                  onClick={() => setTabActive(2)}
                  className={`text-base hover:text-[#A3A3A3] cursor-pointer font-bold ${
                    tabActive === 2 ? "text-[#A3A3A3]" : ""
                  }`}
                >
                  Hướng dẫn mua hàng
                </li>
              </ul>
              {tabActive === 1 && (
                <div className="mt-2.5 border border-[#EBEBEB] p-5">
                  - Metal Build 1/72 Duke Of Wei Guo Gong + Chiều cao khi hoàn
                  thành 30cm + Là mô hình Action: có khả năng thay đổi nhiều tư
                  thế; trưng bày hoặc pose dáng chụp ảnh
                </div>
              )}
              {tabActive === 2 && (
                <div className="mt-2.5 border border-[#EBEBEB] p-5">
                  <img
                    className="w-full mb-2.5"
                    src="/images/huong-dan-mua-hang.webp"
                    alt=""
                  />
                  <p>
                    Chào mừng quý khách đến với{" "}
                    <strong>hakudastore.com!</strong> Để trải nghiệm mua sắm một
                    cách thuận tiện và nhanh chóng, xin vui lòng thực hiện theo
                    các bước sau:
                  </p>
                  <h3 className="text-xl mt-2.5 mb-1">
                    <strong>Bước 1: Tìm kiếm sản phẩm</strong>
                  </h3>
                  <p>Quý khách có thể tìm kiếm sản phẩm mong muốn bằng cách:</p>
                  <p>
                    Sử dụng <strong>thanh tìm kiếm</strong> ở góc trên cùng của
                    trang web.
                  </p>
                  <p>
                    Duyệt qua các <strong>danh mục sản phẩm</strong> đã được
                    phân loại rõ ràng trên trang chủ hoặc trong mục menu.
                  </p>
                  <p>
                    Xem các{" "}
                    <strong>sản phẩm mới nhất, sản phẩm bán chạy</strong>, hoặc{" "}
                    <strong>sản phẩm khuyến mãi</strong> được giới thiệu trên
                    trang chủ.
                  </p>
                  <h3 className="text-xl mt-2.5 mb-1">
                    <strong>Bước 2: Xem chi tiết sản phẩm</strong>
                  </h3>
                  <p>
                    Nhấp vào sản phẩm mà quý khách quan tâm để xem chi tiết bao
                    gồm:
                  </p>
                  <p>
                    <strong>Mô tả sản phẩm:</strong> Các thông tin về tính năng,
                    kích thước, chất liệu, màu sắc...
                  </p>
                  <p>
                    <strong>Giá bán: </strong>Giá niêm yết của sản phẩm (đã bao
                    gồm hoặc chưa bao gồm thuế, phí).
                  </p>
                  <p>
                    <strong>Chính sách bảo hành</strong> và điều kiện đổi trả.
                  </p>
                  <p>
                    <strong>Số lượng sản phẩm</strong> quý khách muốn mua (có
                    thể điều chỉnh số lượng trước khi thêm vào giỏ hàng).
                  </p>
                  <h3 className="text-xl mt-2.5 mb-1">
                    <strong>Bước 3: Thêm sản phẩm vào giỏ hàng</strong>
                  </h3>
                  <p>
                    Khi đã chọn được sản phẩm ưng ý, hãy nhấp vào nút{" "}
                    <strong>"Thêm vào giỏ hàng".</strong>{" "}
                  </p>
                  <p>
                    Quý khách có thể tiếp tục mua sắm các sản phẩm khác hoặc
                    tiến hành kiểm tra giỏ hàng để thanh toán.
                  </p>
                  <h3 className="text-xl mt-2.5 mb-1">
                    <strong>Bước 4: Kiểm tra giỏ hàng</strong>
                  </h3>
                  <p>
                    Sau khi hoàn tất lựa chọn sản phẩm, bấm vào{" "}
                    <strong>"Giỏ hàng của bạn"</strong> (biểu tượng giỏ hàng ở
                    góc trên bên phải màn hình) để kiểm tra lại các sản phẩm.
                  </p>
                  <p>
                    Quý khách có thể thay đổi số lượng sản phẩm hoặc xóa sản
                    phẩm không cần thiết.
                  </p>
                  <p>
                    Nếu có <strong>mã giảm giá</strong>, vui lòng nhập mã vào ô
                    "Mã giảm giá" để được áp dụng ưu đãi.
                  </p>
                  <h3 className="text-xl mt-2.5 mb-1">
                    <strong>Bước 5: Tiến hành thanh toán</strong>
                  </h3>
                  <p>
                    Khi đã sẵn sàng, nhấp vào nút <strong>"Thanh toán"</strong>{" "}
                    để tiếp tục.
                  </p>
                  <p>
                    <strong>Điền thông tin giao hàng:</strong> Họ tên, địa chỉ
                    nhận hàng, số điện thoại liên hệ.
                  </p>
                  <p>
                    Chọn <strong>phương thức thanh toán:</strong>
                  </p>
                  <p>
                    <strong>Thanh toán khi nhận hàng (COD):</strong> Quý khách
                    sẽ thanh toán tiền mặt khi nhận hàng.
                  </p>
                  <p>
                    <strong>Chuyển khoản ngân hàng:</strong> Quý khách vui lòng
                    chuyển khoản theo thông tin ngân hàng hiển thị trên trang
                    thanh toán.
                  </p>
                  <h3 className="text-xl mt-2.5 mb-1">
                    <strong>Bước 6: Xác nhận đơn hàng</strong>
                  </h3>
                  <p>
                    Sau khi hoàn tất nhập thông tin và chọn phương thức thanh
                    toán, quý khách hãy kiểm tra lại toàn bộ thông tin đơn hàng
                    lần cuối và nhấp vào <strong>"Đặt hàng"</strong>.
                  </p>
                  <p>
                    Hệ thống sẽ gửi cho quý khách một email hoặc tin nhắn xác
                    nhận đơn hàng kèm theo mã đơn hàng.
                  </p>
                  <h3 className="text-xl mt-2.5 mb-1">
                    <strong>Bước 7: Giao hàng</strong>
                  </h3>
                  <p>
                    <strong>hakudastore.com</strong> sẽ xử lý và gửi hàng trong
                    thời gian sớm nhất. Thời gian giao hàng dao động từ 2-5 ngày
                    làm việc tùy theo khu vực giao hàng.
                  </p>
                  <p>
                    Quý khách có thể theo dõi trạng thái đơn hàng thông qua
                    đường link trong email xác nhận hoặc liên hệ trực tiếp với
                    chúng tôi qua <strong>hotline</strong> để kiểm tra tiến độ
                    giao hàng.
                  </p>
                  <h3 className="text-xl mt-2.5 mb-1">
                    <strong>Bước 8: Nhận hàng và kiểm tra</strong>
                  </h3>
                  <p>
                    Khi nhận hàng, quý khách vui lòng kiểm tra kỹ tình trạng sản
                    phẩm trước khi ký nhận. Nếu có bất kỳ vấn đề nào liên quan
                    đến sản phẩm hoặc giao hàng, xin vui lòng liên hệ với chúng
                    tôi qua <strong>hotline</strong> hoặc <strong>email</strong>{" "}
                    để được hỗ trợ.
                  </p>
                  <h3 className="mt-2.5 pt-2.5 border-t border-[#EBEBEB] text-xl">
                    <strong>Thông tin hỗ trợ khách hàng</strong>
                  </h3>
                  <p>
                    <strong>Hotline:</strong> 096 498 3498
                  </p>
                  <p>
                    <strong>Email:</strong> hakuda.store@gmail.com
                  </p>
                  <p className="mt-2.5">
                    Chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc và hỗ trợ quý
                    khách trong quá trình mua sắm tại{" "}
                    <strong>hakudastore.com</strong>.
                  </p>
                </div>
              )}
            </div>
            <div className="mt-5">
              <RelatedProduct />
            </div>
            <div className="mt-5">
              <RecentProducts />
            </div>
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
