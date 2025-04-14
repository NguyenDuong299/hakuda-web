import React, { useState, useEffect } from "react";
import AccountInformation from "./AccountInformation";
import ChangePassword from "./ChangePassword";
const Profile = () => {
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#change-password") {
      setActiveTab(2);
    } else {
      setActiveTab(1);
    }
  }, []);
  const handleTabChange = (tab: number) => {
    setActiveTab(tab);
    if (tab === 1) {
      window.location.hash = "#account-info";
    } else if (tab === 2) {
      window.location.hash = "#change-password";
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="container px-5 lg:px-0 mx-auto mt-[30px]">
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="w-full lg:w-1/4">
          <h2 className="text-xl font-bold">TRANG TÀI KHOẢN</h2>
          <span className="font-bold">Xin chào, Hakuda</span>
          <ul className="mt-5 flex flex-col gap-2">
            <li onClick={() => handleTabChange(1)} className={`font-bold cursor-pointer hover:text-[#a3a3a3] w-fit ${activeTab === 1 ? "text-[#a3a3a3]" : ""}`}>
              Thông tin tài khoản
            </li>
            <li onClick={() => handleTabChange(2)} className={`font-bold cursor-pointer hover:text-[#a3a3a3] w-fit ${activeTab === 2 ? "text-[#a3a3a3]" : ""}`}>
              Đổi mật khẩu
            </li>
            <li className="font-bold cursor-pointer hover:text-[#a3a3a3] w-fit" onClick={handleLogOut}>
              Đăng xuất
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-3/4">
          {activeTab === 1 && <AccountInformation />}
          {activeTab === 2 && <ChangePassword />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
