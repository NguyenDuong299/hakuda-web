import React from "react";
import Breadcrumb from "../../components/ui/breadcrumb";

const Login = () => {
  return (
    <>
      <Breadcrumb />
      <div className="flex justify-center mt-[30px] mb-10">
        <div className="w-[900px] max-w-[90%] flex justify-center border border-black border-r-0">
          <div className="p-[30px] w-full md:w-2/3">
            <form className="bg-white rounded-2xl w-full space-y-4">
              <h2 className="text-xl font-bold">Đăng nhập tài khoản</h2>
              <div>
                <label className="block mb-2 text-[15px] font-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-[#EAEBF3] p-2"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-[15px] font-bold">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  className="w-full border border-[#EAEBF3] p-2"
                  placeholder="Mật khẩu"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-black py-2 text-base font-bold"
              >
                ĐĂNG NHẬP
              </button>
            </form>
            <span className="text-base mt-5 block text-center">
              Bạn quên mật khẩu bấm{" "}
              <a
                className="text-[#007bff] underline"
                href="changepassword"
              >
                vào đây
              </a>
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
            <a
              className="text-white text-base block py-2 px-10 border border-white w-fit rounded mt-5 hover:border-[#A3A3A3] hover:bg-[#A3A3A3]"
              href="/account/register"
            >
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
