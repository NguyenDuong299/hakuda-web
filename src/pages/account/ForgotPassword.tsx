import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/ui/breadcrumb";
import { Users } from "../../types";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Users>();

  return (
    <>
      <Breadcrumb br1="Quên mật khẩu" url="account/forgot-password" />
      <div className="flex justify-center mt-[30px] mb-10">
        <div className="w-[900px] max-w-[90%] flex justify-center border border-black border-r-0">
          <div className="p-[30px] w-full md:w-2/3">
            <form className="bg-white rounded-2xl w-full space-y-4">
              <h2 className="text-xl font-bold mb-2">Quên mật khẩu</h2>
              <span>Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật khẩu.</span>
              <div>
                <label className="block mb-2 text-[15px] font-bold">Email</label>
                <input type="email" placeholder="Email" className="w-full border border-[#EAEBF3] p-2" {...register("email", { required: "Email không được bỏ trống" })} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <button type="submit" className={`w-full text-white bg-black py-2 text-base font-bold rounded`}>
                ĐĂNG NHẬP
              </button>
              <Link to="/account/login" className="w-full border border-black py-2 text-base font-bold rounded block text-center">
                HỦY
              </Link>
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
            <a className="text-white text-base block py-2 px-10 border border-white w-fit rounded mt-5 hover:border-[#A3A3A3] hover:bg-[#A3A3A3]" href="/account/register">
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
