import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      toast.error("Mật khẩu mới không khớp khác nhau!");
      return;
    }
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/change-password`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Đổi mật khẩu thành công!");
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Mật khẩu sai!");
    }
  };
  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold">ĐỔI MẬT KHẨU</h2>
      <span className="mt-2.5">Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít nhất 8 kí tự</span>
      <form onSubmit={handleChangePassword} className="mt-5 flex flex-col gap-2.5">
        <div className="">
          <label htmlFor="oldPassword" className="block mb-1 text-[15px] font-bold">
            Mật khẩu cũ <span className="text-red-500">*</span>
          </label>
          <input onChange={handleChange} type="password" name="oldPassword" id="oldPassword" className="border border-[#ebeBEB] p-2 w-[440px] max-w-full" placeholder="Mật khẩu cũ" required />
        </div>
        <div className="">
          <label htmlFor="newPassword" className="block mb-1 text-[15px] font-bold">
            Mật khẩu mới <span className="text-red-500">*</span>
          </label>
          <input onChange={handleChange} name="newPassword" id="newPassword" type="password" className="border border-[#ebeBEB] p-2 w-[440px] max-w-full" placeholder="Mật khẩu mới" required />
        </div>
        <div className="">
          <label htmlFor="confirmPassword" className="block mb-1 text-[15px] font-bold">
            Xác nhận mật khẩu mới <span className="text-red-500">*</span>
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="border border-[#ebeBEB] p-2 w-[440px] max-w-full"
            placeholder="Xác nhận mật khẩu mới"
            required
          />
        </div>
        <button type="submit" className="bg-black hover:bg-[#A3A3A3] text-base py-2.5 w-[440px] max-w-full font-bold text-white mt-2 rounded">
          ĐẶT LẠI MẬT KHẨU
        </button>
      </form>
    </div>
  );
};
export default ChangePassword;
