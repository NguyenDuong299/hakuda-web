import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AccountInformation = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/account/login");
    }
  }, [navigate, token]);

  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold">THÔNG TIN TÀI KHOẢN</h2>
      <form className="mt-5 flex flex-col gap-2.5">
        <div className="">
          <label className="block mb-1 text-[15px] font-bold">Họ tên:</label>
          <input type="text" className="border border-[#ebeBEB] p-2 w-[440px] max-w-full" placeholder="Tên tài khoản" disabled />
        </div>
        <div className="">
          <label className="block mb-1 text-[15px] font-bold">Email:</label>
          <input type="email" className="border border-[#ebeBEB] p-2 w-[440px] max-w-full" placeholder="Email" disabled />
        </div>
        <div className="">
          <label className="block mb-1 text-[15px] font-bold">Số điện thoại:</label>
          <input type="tel" className="border border-[#ebeBEB] p-2 w-[440px] max-w-full" placeholder="Số điện thoại" disabled />
        </div>
        <div className="">
          <label className="block mb-1 text-[15px] font-bold">Địa chỉ:</label>
          <input type="text" className="border border-[#ebeBEB] p-2 w-[440px] max-w-full" placeholder="Địa chỉ" disabled />
        </div>
      </form>
    </div>
  );
};
export default AccountInformation;
