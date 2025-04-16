import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Breadcrumb from "../../components/ui/breadcrumb";
import { Users } from "../../types";
import { useAuth } from "../../store/authStore";
import Loading from "../../components/ui/loading";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Users>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();
  
  const onSubmit = async (formData: Users) => {
    setIsLoading(true);
    try {
      const payload = {
        email: formData.email,
        password: formData.password,
      };
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, payload);
      const { token } = res.data;
      localStorage.setItem("token", token);
      setUser(res.data);
      toast.success("Đăng nhập thành công!");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error: any) {
      console.error("Error fetching data:", error);
      toast.error(error?.response?.data?.message || "Đăng nhập thất bại, có lỗi xảy ra!");
    } finally {
      setIsLoading(false);
    }
  };

  const { user, loading } = useAuth();
  if (loading) return <Loading />;
  if (user) navigate("/");

  return (
    <>
      <Breadcrumb />
      <div className="flex justify-center mt-[30px] mb-10">
        <div className="w-[900px] max-w-[90%] flex justify-center border border-black border-r-0">
          <div className="p-[30px] w-full md:w-2/3">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl w-full space-y-4">
              <h2 className="text-xl font-bold">Đăng nhập tài khoản</h2>
              <div>
                <label className="block mb-2 text-[15px] font-bold">Email</label>
                <input type="email" placeholder="Email" className="w-full border border-[#EAEBF3] p-2" {...register("email", { required: "Email không được bỏ trống" })} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block mb-2 text-[15px] font-bold">Mật khẩu</label>
                <input type="password" placeholder="Mật khẩu" className="w-full border border-[#EAEBF3] p-2" {...register("password", { required: "Mật khẩu không được bỏ trống" })} />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>

              <button type="submit" className={`w-full text-white bg-black py-2 text-base font-bold rounded` + (isLoading ? " opacity-50 cursor-not-allowed" : "")} disabled={isLoading}>
                ĐĂNG NHẬP
              </button>
            </form>

            <span className="text-base mt-5 block text-center">
              Bạn quên mật khẩu bấm{" "}
              <Link className="text-[#007bff] underline" to="/account/forgot-password">
                vào đây
              </Link>
            </span>
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
            <a className="text-white text-base block py-2 px-10 border border-white w-fit rounded mt-5 hover:border-[#A3A3A3] hover:bg-[#A3A3A3]" href="/account/register">
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
