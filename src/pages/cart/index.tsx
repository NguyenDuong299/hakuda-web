import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/ui/breadcrumb";
import { useCartStore } from "../../store/cartStore";

const Cart = () => {
  const products = useCartStore((state) => state.products);
  const totalPrice = products.reduce((acc, item) => acc + item.price * item.cart_quantity, 0);
  const deleteProduct = useCartStore((state) => state.removeFromCart);
  return (
    <>
      <Breadcrumb br1="Giỏ hàng" url="/cart" />
      <div className="container px-5 lg:px-0 mx-auto">
        <h2 className="text-2xl font-extrabold text-center">GIỎ HÀNG CỦA BẠN</h2>
        <div>
          <div className="flex gap-2.5 my-[30px] px-5 py-[18px] border-l-4 border-[#FF3D00] rounded" style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}>
            <img src="/images/icons/warning.svg" alt="" className="h-6" />
            <div>
              <h3 className="text-lg font-bold mb-1.5">Lưu ý quan trọng</h3>
              <p className="font-normal text-[#555] text-base">
                Bạn vui lòng <strong className="text-[#FF3D00]">kiểm tra kỹ số lượng và loại sản phẩm</strong> trước khi tiến hành đặt hàng và thanh toán. Đơn hàng sẽ được xử lý ngay sau khi xác nhận
                thành công.
              </p>
            </div>
          </div>
          {products.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-5 mb-10">
              <div className="w-full lg:w-3/4">
                <div className="">
                  <table className="table-auto w-full">
                    <thead className="border">
                      <tr>
                        <th className="text-left py-2 px-2.5 max-w-[50%]">Thông tin sản phẩm</th>
                        <th className="py-2 max-w-[17%]">Đơn giá</th>
                        <th className="py-2 max-w-[17%]">Số lượng</th>
                        <th className="py-2 max-w-[17%] hidden lg:table-cell">Thành tiền</th>
                      </tr>
                    </thead>
                    <tbody className="border">
                      {products.length > 0 &&
                        products.map((item, index) => (
                          <tr key={index}>
                            <td className="py-2 pl-2.5 pr-20 flex flex-col sm:flex-row gap-2.5 sm:items-center">
                              <Link to={`/products/${item.id}`}>
                                {item.images &&
                                  item.images
                                    .filter((img) => img.isThumbnail)
                                    .map((img, index) => (
                                      <img key={index} src={`${process.env.REACT_APP_API_URL}/${img.image_url}`} alt={img.image_url} className="h-[110px] w-[110px] object-cover aspect-square" />
                                    ))}
                              </Link>
                              <div className="flex flex-col flex-1">
                                <Link className="text-base font-bold" to="/">
                                  {item.name}
                                </Link>
                                <button onClick={() => deleteProduct(item.id)} className="text-xs text-left font-normal">
                                  Xóa
                                </button>
                              </div>
                            </td>
                            <td className="py-2 text-center text-[#ef1104] font-bold">{Number(item.price).toLocaleString("vi-VN")}₫</td>
                            <td className="py-2 text-center">
                              <span>{item.cart_quantity}</span>
                            </td>
                            <td className="py-2 text-center text-[#ef1104] font-bold hidden lg:table-cell"> {(item.price * item.cart_quantity).toLocaleString("vi-VN")}₫</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-full lg:w-1/4">
                <div className="p-2.5 pb-5 bg-[#F8F8F8]">
                  <div className="h-[27.5px] w-full border-b"></div>
                  <div className="flex items-center justify-between pt-2.5">
                    <span className="text-[15px] font-bold">Tổng tiền</span>
                    <span className="text[15px] text-[#fd0000] font-bold">{Number(totalPrice).toLocaleString("vi-VN")}₫</span>
                  </div>
                  <Link to="/checkout" className="text-base bg-black text-white w-full py-2 mt-[15px] rounded hover:bg-[#A3A3A3] font-bold block text-center">
                    THANH TOÁN
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-col gap-2">
              <img src="/images/icons/empty.svg" alt="loading" className="h-12" />
              <span className="text-base">Không có sản phẩm nào trong giỏ hàng của bạn</span>
              <Link to={"/"} className="text-base bg-black text-white py-2 mt-[15px] rounded hover:bg-[#A3A3A3] font-bold block text-center px-10">
                TIẾP TỤC MUA HÀNG
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
