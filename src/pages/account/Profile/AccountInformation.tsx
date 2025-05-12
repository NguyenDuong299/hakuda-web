import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "../../../types";
import axios from "axios";
import { useAuth } from "../../../store/authStore";
import Loading from "../../../components/ui/loading";
import { toast } from "react-toastify";

const AccountInformation = () => {
  const [formData, setFormData] = useState<Users>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    addressDesc: "",
    role: "",
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/my-profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const user = res.data;

        setFormData({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: "",
          confirmPassword: "",
          phoneNumber: user.phoneNumber,
          addressDesc: user.addressDesc,
          role: user.role,
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [token]);

  const { user, loading } = useAuth();
  if (loading) return <Loading />;
  if (!user) navigate("/");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/users/${user?.id}`, {
        addressDesc: formData.addressDesc,
      });
      toast.success("Cập nhật thông tin thành công!");
    } catch (error: any) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold">THÔNG TIN TÀI KHOẢN</h2>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-2.5">
        <div className="">
          <label className="block mb-1 text-[15px] font-bold">Họ tên:</label>
          <input type="text" value={formData.lastName + " " + formData.firstName} className="border border-[#ebeBEB] p-2 w-[440px] max-w-full opacity-50 cursor-not-allowed" disabled />
        </div>
        <div className="">
          <label className="block mb-1 text-[15px] font-bold">Email:</label>
          <input type="email" value={formData.email} className="border border-[#ebeBEB] p-2 w-[440px] max-w-full opacity-50 cursor-not-allowed" disabled />
        </div>
        <div className="">
          <label className="block mb-1 text-[15px] font-bold">Số điện thoại:</label>
          <input type="tel" value={formData.phoneNumber} className="border border-[#ebeBEB] p-2 w-[440px] max-w-full opacity-50 cursor-not-allowed" disabled />
        </div>
        <div className="">
          <label className="block mb-1 text-[15px] font-bold">Địa chỉ:</label>
          <input
            type="text"
            name="addressDesc"
            onChange={(e) => setFormData({ ...formData, addressDesc: e.target.value })}
            value={formData.addressDesc}
            className="border border-[#ebeBEB] p-2 w-[440px] max-w-full"
            placeholder="Địa chỉ"
          />
        </div>
        <button type="submit" className="text-base text-white bg-black font-extrabold py-[8.5px] rounded hover:bg-[#A3A3A3] mt-1 w-[440px] max-w-full">
          CẬP NHẬT
        </button>
      </form>
    </div>
  );
};
export default AccountInformation;
