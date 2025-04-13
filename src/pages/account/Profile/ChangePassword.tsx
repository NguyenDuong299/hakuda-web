import React from "react";

const ChangePassword = () => {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold">ĐỔI MẬT KHẨU</h2>
      <span className="mt-2.5">
        Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít nhất 8 kí
        tự
      </span>
      <form className="mt-5 flex flex-col gap-2.5">
        <div className="">
          <label className="block mb-1 text-[15px] font-bold">Mật khẩu cũ:</label>
          <input
            type="password"
            className="border border-[#ebeBEB] p-2 w-[440px] max-w-full"
            placeholder="Mật khẩu cũ"
            disabled
          />
        </div>
        <div className="">
          <label className="block mb-1 text-[15px] font-bold">Mật khẩu mới:</label>
          <input
            type="password"
            className="border border-[#ebeBEB] p-2 w-[440px] max-w-full"
            placeholder="Mật khẩu mới"
            disabled
          />
        </div>
        <div className="">
          <label className="block mb-1 text-[15px] font-bold">
            Xác nhận mật khẩu mới:
          </label>
          <input
            type="password"
            className="border border-[#ebeBEB] p-2 w-[440px] max-w-full"
            placeholder="Xác nhận mật khẩu mới"
            disabled
          />
        </div>
        <button className="bg-black hover:bg-[#A3A3A3] text-base py-2.5 w-[440px] max-w-full font-bold text-white mt-2 rounded">ĐẶT LẠI MẬT KHẨU</button>
      </form>
    </div>
  );
};
export default ChangePassword;
