import React from "react";

const Service = () => {
  return <section className="my-[30px]">
    <div className="container px-5 lg:px-0 mx-auto">
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/4 flex items-center gap-2.5 py-4">
                <img className="h-[45px]" src="/images/ico_sv1.png" alt="" />
                <h2 className="text-base font-bold">Dịch vụ đóng gói riêng</h2>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 flex items-center gap-2.5 py-4">
                <img className="h-[45px]" src="/images/ico_sv2.png" alt="" />
                <h2 className="text-base font-bold">Tích điểm đặc quyền</h2>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 flex items-center gap-2.5 py-4">
                <img className="h-[45px]" src="/images/ico_sv3.png" alt="" />
                <h2 className="text-base font-bold">Quà tặng bí mật</h2>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 flex items-center gap-2.5 py-4">
                <img className="h-[45px]" src="/images/ico_sv4.png" alt="" />
                <h2 className="text-base font-bold">Mã giảm giá đặc quyền</h2>
            </div>
        </div>
    </div>
  </section>;
};
export default Service;
