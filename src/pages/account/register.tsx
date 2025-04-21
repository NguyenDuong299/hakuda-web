import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import Breadcrumb from "../../components/ui/breadcrumb";
import { toast } from "react-toastify";
import { Users } from "../../types";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Users>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (formData: Users) => {
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast.error("Mật khẩu xác nhận không khớp");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };
      await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, payload);
      toast.success("Đăng ký thành công!");
      setTimeout(() => {
        navigate("/account/login");
      }, 1000);
    } catch (error: any) {
      console.error("Error fetching data:", error);
      toast.error(error?.response?.data?.message || "Đăng ký thất bại, có lỗi xảy ra!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb />
      <div className="flex justify-center mt-[30px] mb-10">
        <div className="w-[900px] max-w-[90%] flex justify-center border border-black border-r-0">
          <div className="p-[30px] w-full md:w-2/3">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl w-full space-y-4">
              <h2 className="text-xl font-bold">Đăng ký tài khoản</h2>
              <div>
                <label className="block mb-2 text-[15px] font-bold">Họ</label>
                <Controller
                  control={control}
                  name="lastName"
                  rules={{ required: "Họ là bắt buộc" }}
                  render={({ field }) => <input {...field} type="text" className="w-full border border-[#EAEBF3] p-2" placeholder="Họ" />}
                />
                {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}
              </div>
              <div>
                <label className="block mb-2 text-[15px] font-bold">Tên</label>
                <Controller
                  control={control}
                  name="firstName"
                  rules={{ required: "Tên là bắt buộc" }}
                  render={({ field }) => <input {...field} type="text" className="w-full border border-[#EAEBF3] p-2" placeholder="Tên" />}
                />
                {errors.firstName && <span className="text-red-500">{errors.firstName.message}</span>}
              </div>
              <div>
                <label className="block mb-2 text-[15px] font-bold">Số điện thoại</label>
                <Controller
                  control={control}
                  name="phoneNumber"
                  rules={{ required: "Số điện thoại là bắt buộc" }}
                  render={({ field }) => <input {...field} type="tel" className="w-full border border-[#EAEBF3] p-2" placeholder="Số điện thoại" />}
                />
                {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber.message}</span>}
              </div>
              <div>
                <label className="block mb-2 text-[15px] font-bold">Email</label>
                <Controller
                  control={control}
                  name="email"
                  rules={{
                    required: "Email là bắt buộc",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Email không hợp lệ",
                    },
                  }}
                  render={({ field }) => <input {...field} type="email" className="w-full border border-[#EAEBF3] p-2" placeholder="Email" />}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>
              <div>
                <label className="block mb-2 text-[15px] font-bold">Mật khẩu</label>
                <Controller
                  control={control}
                  name="password"
                  rules={{ required: "Mật khẩu là bắt buộc" }}
                  render={({ field }) => <input {...field} type="password" className="w-full border border-[#EAEBF3] p-2" placeholder="Mật khẩu" />}
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              </div>
              <div>
                <label className="block mb-2 text-[15px] font-bold">Xác nhận mật khẩu</label>
                <Controller
                  control={control}
                  name="confirmPassword"
                  rules={{ required: "Xác nhận mật khẩu là bắt buộc" }}
                  render={({ field }) => <input {...field} type="password" className="w-full border border-[#EAEBF3] p-2" placeholder="Xác nhận mật khẩu" />}
                />
                {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
              </div>
              <button type="submit" className={`w-full text-white bg-black py-2 text-base font-bold rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`} disabled={loading}>
                ĐĂNG KÝ
              </button>
            </form>
          </div>
          <div className="bg-black text-white p-[30px] w-full md:w-1/3">
            <h2 className="font-bold">Quyền lợi thành viên</h2>
            <ul className="mt-10 mb-5 space-y-4">
              <li className="text-[15px]">🔥Dịch vụ đóng gói riêng</li>
              <li className="text-[15px]">🔥Tích điểm đặc quyền</li>
              <li className="text-[15px]">🔥Quà tặng bí mật</li>
              <li className="text-[15px]">🔥Chăm sóc khách hàng 1-1</li>
            </ul>
            <p className="text-[15px]">
              👉Chi tiết hơn về chương trình hội viên, bạn có thể{" "}
              <a className="text-[#3498db]" href="/">
                xem tại đây.
              </a>
            </p>
            <a className="text-white text-base block py-2 px-10 border border-white w-fit rounded mt-5 hover:border-[#A3A3A3] hover:bg-[#A3A3A3]" href="/account/login">
              Đăng nhập
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
