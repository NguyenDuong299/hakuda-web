import React from "react";
import { Link } from "react-router-dom";

const RelatedInformation = () => {
  return (
    <>
      <div className="">
        <h2 className="font-bold text-2xl">ƯU ĐÃI THÀNH VIÊN</h2>
        <div className="mt-5 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <img className="h-10" src="/images/ico_sv1.png" alt="" />
            <span className="font-bold">Dịch vụ đóng gói riêng</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="h-10" src="/images/ico_sv2.png" alt="" />
            <span className="font-bold">Tích điểm đặc quyền</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="h-10" src="/images/ico_sv3.png" alt="" />
            <span className="font-bold">Quà tặng bí mật</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="h-10" src="/images/ico_sv4.png" alt="" />
            <span className=" font-bold">Mã giảm giá đặc quyền</span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="font-bold text-2xl">TIN MỚI NHẤT</h2>
        <div className="mt-5 flex flex-col space-y-2">
          <div className="flex flex-col gap-2 pb-2.5 border-b border-[#EBEBEB]">
            <Link to="/">
              <img
                src="/images/cach-lap-rap-mo-hinh-mg-cho-nguoi-moi.webp"
                alt=""
                className="w-full"
              />
            </Link>
            <Link className="line-clamp-2 text-[15px]" to="/">
              Cách Lắp Ráp Mô Hình Gundam MG Cho Người Mới: Hướng Dẫn Chi Tiết
              Từ A-Z
            </Link>
          </div>
          <div className="flex flex-col gap-2 pb-2.5 border-b border-[#EBEBEB]">
            <Link to="/">
              <img
                src="/images/cach-lap-rap-mo-hinh-mg-cho-nguoi-moi.webp"
                alt=""
                className="w-full"
              />
            </Link>
            <Link className="line-clamp-2 text-[15px]" to="/">
              Cách Lắp Ráp Mô Hình Gundam MG Cho Người Mới: Hướng Dẫn Chi Tiết
              Từ A-Z
            </Link>
          </div>
          <div className="flex flex-col gap-2 pb-2.5 border-b border-[#EBEBEB]">
            <Link to="/">
              <img
                src="/images/cach-lap-rap-mo-hinh-mg-cho-nguoi-moi.webp"
                alt=""
                className="w-full"
              />
            </Link>
            <Link className="line-clamp-2 text-[15px]" to="/">
              Cách Lắp Ráp Mô Hình Gundam MG Cho Người Mới: Hướng Dẫn Chi Tiết
              Từ A-Z
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default RelatedInformation;
