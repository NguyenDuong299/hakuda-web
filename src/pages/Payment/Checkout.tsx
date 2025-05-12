import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import axios from "axios";
import { useAuth } from "../../store/authStore";
import { toast } from "react-toastify";
import { Vouchers } from "../../types";
const Payment = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const clearCart = useCartStore((state) => state.clearCart);
  const products = useCartStore((state) => state.products);
  const [loading, setLoading] = useState(false);
  const [voucher, setVoucher] = useState<Vouchers>({
    id: 0,
    code: "",
    discountType: "",
    discountValue: 0,
    quantity: 0,
    startDate: "",
    endDate: "",
    createdAt: "",
    updatedAt: "",
  });
  const [form, setForm] = useState({
    user_id: 0,
    voucher_id: 0,
    total_price: 0,
    recipient_name: "",
    recipient_email: "",
    recipient_phone: "",
    recipient_address: "",
    note: "",
    status: "pending",
    order_items: [] as { product_id: number; quantity: number; price: number }[],
  });
  const handlePayment = async () => {
    setLoading(true);
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/orders`, {
        ...form,
        user_id: user?.id,
        voucher_id: voucher.id,
        total_price: totalPrice,
        order_items: products.map((item) => ({
          product_id: item.id,
          quantity: item.cart_quantity,
          price: item.price,
        })),
      });
      toast.success("Đặt hàng thành công!");
      clearCart();
      navigate("/");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const checkVoucher = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/vouchers/check/${voucher.code}`);
      if (res.status === 200) {
        toast.success("Kiểm tra thành công!");
        setVoucher({
          ...res.data,
        });
      }
    } catch (error) {
      setVoucher({
        id: 0,
        code: "",
        discountType: "",
        discountValue: 0,
        quantity: 0,
        startDate: "",
        endDate: "",
        createdAt: "",
        updatedAt: "",
      });
      toast.error("Voucher không hợp lệ hoặc đã hết hạn / hết số lượng");
      console.error("Error fetching data:", error);
    }
  };
  const rawTotal = products.reduce((acc, item) => acc + item.price * item.cart_quantity, 0);
  const totalPrice = voucher.discountType === "percentage" ? rawTotal - (rawTotal * voucher.discountValue) / 100 : rawTotal - voucher.discountValue;
  return (
    <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2 mt-[60px]">
          <div className="text-center">
            <Link className="text-5xl font-bold" to="/">
              BANDAI
            </Link>
          </div>

          <div className="mt-[30px]">
            <h3 className="text-2xl font-semibold mb-5">Thông tin nhận hàng</h3>
            <form className="space-y-6">
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="recipient_email"
                  id="recipient_email"
                  onChange={handleChange}
                  required
                  className="peer w-full border border-gray-300 rounded px-4 pt-5 pb-2 placeholder-transparent focus:outline-none focus:border-blue-500"
                  placeholder="Email người nhận"
                />
                <label
                  htmlFor="recipient_email"
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Email người nhận <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="recipient_name"
                  required
                  className="peer w-full border border-gray-300 rounded px-4 pt-5 pb-2 placeholder-transparent focus:outline-none focus:border-blue-500"
                  placeholder="Tên người nhận"
                  onChange={handleChange}
                  value={form.recipient_name}
                />
                <label
                  htmlFor="recipient_name"
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Tên người nhận <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  name="recipient_phone"
                  required
                  className="peer w-full border border-gray-300 rounded px-4 pt-5 pb-2 placeholder-transparent focus:outline-none focus:border-blue-500"
                  placeholder="Số điện thoại người nhận"
                  onChange={handleChange}
                  value={form.recipient_phone}
                />
                <label
                  htmlFor="recipient_phone"
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Số điện thoại người nhận <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Address */}
              <div className="relative">
                <input
                  type="text"
                  name="recipient_address"
                  required
                  className="peer w-full border border-gray-300 rounded px-4 pt-5 pb-2 placeholder-transparent focus:outline-none focus:border-blue-500"
                  placeholder="Địa chỉ người nhận"
                  onChange={handleChange}
                  value={form.recipient_address}
                />
                <label
                  htmlFor="recipient_address"
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Địa chỉ người nhận <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Note */}
              <div className="relative">
                <textarea
                  rows={2}
                  name="note"
                  className="peer w-full border border-gray-300 rounded px-4 pt-5 pb-2 placeholder-transparent focus:outline-none focus:border-blue-500"
                  placeholder="Ghi chú (tuỳ chọn)"
                  onChange={handleChange}
                  value={form.note}
                />
                <label
                  htmlFor="note"
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Ghi chú (tuỳ chọn)
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[#FAFAFA] p-7 border-l border-[#ebeBEB] min-h-screen">
          <div className="pb-7 border-b border-[#ebeBEB]">
            <h2 className="text-lg font-b old">Đơn hàng (1 sản phẩm)</h2>
          </div>
          <div className="pt-7">
            {products.length > 0 &&
              products.map((item, index) => (
                <div key={index} className="flex gap-2 items-center border-b border-[#ebeBEB] py-4">
                  <div className="flex gap-2">
                    <div className="relative">
                      <img className="h-20 w-20 object-cover" src={`${process.env.REACT_APP_API_URL}/${item.images[0].image_url}`} alt={item.name} />
                      <div className="w-5 h-5 rounded-full bg-[#2A9DCC] text-white flex items-center justify-center absolute -top-2 -right-2">{item.cart_quantity}</div>
                    </div>
                    <div className="flex-1">{item.name}</div>
                  </div>
                  <div>{Number(item.price).toLocaleString("vi-VN")}₫</div>
                </div>
              ))}
          </div>
          <div className="mt-10 flex gap-2 pb-7 border-b border-[#ebeBEB]">
            <div className="relative w-full">
              <input
                type="text"
                name="code"
                id="code"
                value={voucher.code}
                onChange={(e) => setVoucher({ ...voucher, code: e.target.value })}
                className="peer w-full border border-gray-300 rounded px-4 pt-5 pb-2 placeholder-transparent focus:outline-none focus:border-blue-500"
                placeholder="Nhập mã giảm giá"
              />
              <label
                htmlFor="voucher"
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Nhập mã giảm giá
              </label>
            </div>
            <button onClick={checkVoucher} className="w-[100px] rounded bg-[#357EBD] text-white" type="button">
              Kiểm tra
            </button>
          </div>
          <div className="pt-7 flex flex-col gap-4 pb-7 border-b border-[#ebeBEB]">
            <div className="flex justify-between">
              <span>Tạm tính</span> <span>{Number(totalPrice).toLocaleString("vi-VN")}₫</span>
            </div>
            <div className="flex justify-between">
              <span>Áp dụng giá giảm</span>
              {voucher.discountType === "percentage" ? <span>{voucher.discountValue}%</span> : <span>{Number(voucher.discountValue).toLocaleString("vi-VN")}₫</span>}
            </div>
          </div>
          <div className="pt-7 flex flex-col gap-4">
            <div className="flex justify-between">
              <span>Tổng cộng</span> <span>{Number(totalPrice).toLocaleString("vi-VN")}₫</span>
            </div>
          </div>
          <div className="pt-7 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <Link className="text-[#357EBD]" to="/cart">
                Quay về giỏ hàng
              </Link>
              <button onClick={handlePayment} className={`w-[100px] py-3.5 rounded bg-[#357EBD] text-white` + (loading ? " opacity-50 cursor-not-allowed" : "")} type="button" disabled={loading}>
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
