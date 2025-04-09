import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#ebebeb]">
      <div className="flex items-center gap-[35px] py-[30px] justify-center">
        <span className="text-base hidden lg:block">
          Theo dõi HAKUDA Store tại
        </span>
        <a href="/">
          <img className="h-[54px]" src="/images/facebook.webp" alt="" />
        </a>
        <a href="/">
          <img className="h-[54px]" src="/images/instagam.png" alt="" />
        </a>
        <a href="/">
          <img className="h-[54px]" src="/images/youtube.webp" alt="" />
        </a>
        <a href="/">
          <img className="h-[54px]" src="/images/tiktok.png" alt="" />
        </a>
      </div>
      <div className="bg-[#E7E7E7]">
        <div className="container px-5 lg:px-0 mx-auto">
          <div className="flex flex-wrap pt-10 pb-5 -mx-2.5 space-y-4 lg:space-y-0">
            <div className="w-full max-w-full md:w-1/3 lg:w-1/4 px-2.5">
              <h2 className="text-xl font-bold uppercase mb-5">VỀ CHÚNG TÔI</h2>
              <p>
                HỘ KINH DOANH HAKUDA. GPDK số 01A8034114 cấp ngày 23/03/2023 do
                UBND quận Ba Đình thành phố Hà Nội. MST: 8429736828-001
              </p>
            </div>
            <div className="w-full max-w-full md:w-1/3 lg:w-1/4 px-2.5">
              <h2 className="text-xl font-bold uppercase mb-5">HƯỚNG DẪN</h2>
              <ul className="space-y-[13px]">
                <li>
                  <a href="/">Hướng dẫn đặt đơn Pre-Order</a>
                </li>
                <li>
                  <a href="/">Hướng dẫn mua hàng</a>
                </li>
                <li>
                  <a href="/">Hướng dẫn thanh toán</a>
                </li>
                <li>
                  <a href="/">Câu hỏi thường gặp - FAQs</a>
                </li>
                <li>
                  <a href="/">Trải nghiệm mua sắm 100% hài lòng</a>
                </li>
                <li>
                  <a href="/">Ưu đãi dành riêng cho hội viên</a>
                </li>
              </ul>
            </div>
            <div className="w-full max-w-full md:w-1/3 lg:w-1/4 px-2.5">
              <h2 className="text-xl font-bold uppercase mb-5">CHÍNH SÁCH</h2>
              <ul className="space-y-[13px]">
                <li>
                  <a href="/">Chính sách chung</a>
                </li>
                <li>
                  <a href="/">Chính sách bảo hành - đổi trả</a>
                </li>
                <li>
                  <a href="/">Chính sách vận chuyển</a>
                </li>
                <li>
                  <a href="/">Chính sách kiếm hàng</a>
                </li>
                <li>
                  <a href="/">Chính sách bảo mật thông tin</a>
                </li>
              </ul>
            </div>
            <div className="w-full max-w-full lg:w-1/4 px-2.5">
              <h2 className="text-xl font-bold uppercase mb-5">Liên hệ</h2>
              <p className="mb-5">
                Nếu bạn cần hỗ trợ hoặc có bất kỳ thắc mắc gì, hãy liên hệ ngay
                với HAKUDA nhé!
              </p>
              <ul className="space-y-[13px]">
                <li className="flex items-center gap-2">
                  <img
                    className="h-4"
                    src="/images/icons/location.svg"
                    alt=""
                  />
                  Số 8 ngõ 118 Đào Tấn, Phường Cống Vị, Quận Ba Đình, Hà Nội, Hà
                  Nội
                </li>
                <li className="flex items-center gap-2">
                  <img className="h-4" src="/images/icons/phone.svg" alt="" />
                  <a href="/">096 498 3498</a>
                </li>
                <li className="flex items-center gap-2">
                  <img className="h-4" src="/images/icons/mail.svg" alt="" />
                  <a href="/">hakuda.store@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
