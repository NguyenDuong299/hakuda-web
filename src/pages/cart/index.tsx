import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/ui/breadcrumb";

const Cart = () => {
  const [quality, setQuality] = useState(1);
  return (
    <>
      <Breadcrumb />
      <div className="container px-5 lg:px-0 mx-auto">
        <h2 className="text-2xl font-extrabold text-center">
          GIỎ HÀNG CỦA BẠN
        </h2>
        <div>
          <div
            className="flex gap-2.5 my-[30px] px-5 py-[18px] border-l-4 border-[#FF3D00] rounded"
            style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}
          >
            <img src="/images/icons/warning.svg" alt="" className="h-6" />
            <div>
              <h3 className="text-lg font-bold mb-1.5">Lưu ý quan trọng</h3>
              <p className="font-normal text-[#555] text-base">
                Bạn vui lòng{" "}
                <strong className="text-[#FF3D00]">
                  kiểm tra kỹ số lượng và loại sản phẩm
                </strong>{" "}
                trước khi tiến hành đặt hàng và thanh toán. Đơn hàng sẽ được xử
                lý ngay sau khi xác nhận thành công.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 mb-10">
            <div className="w-full lg:w-3/4">
              <div className="overflow-x-scroll">
                <table className="table-auto w-full">
                  <thead className="border">
                    <tr>
                      <th className="text-left py-2 px-2.5 max-w-[50%]">
                        Thông tin sản phẩm
                      </th>
                      <th className="py-2 max-w-[17%]">Đơn giá</th>
                      <th className="py-2 max-w-[16%]">Số lượng</th>
                      <th className="py-2 max-w-[17%] hidden lg:block">
                        Thành tiền
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border">
                    <tr>
                      <td className="py-2 px-2.5 flex flex-col sm:flex-row gap-2.5 sm:items-center">
                        <Link to="/">
                          <img
                            src="/images/b9211a26-dc96-4662-89ea-38f85e5cae40-1735181035947.jpg"
                            alt=""
                            className="h-[110px] w-[110px] object-cover"
                          />
                        </Link>
                        <div className="flex flex-col flex-1">
                          <Link className="text-base font-bold" to="/">
                            Mô hình Mecha Asgard 1/100 - Mô hình chính hãng
                            EDDAS
                          </Link>
                          <button className="text-xs text-left font-normal">
                            Xóa
                          </button>
                        </div>
                      </td>
                      <td className="py-2 text-center text-[#ef1104] font-bold">
                        900.000.000đ
                      </td>
                      <td className="py-2 text-center">
                        <div className="flex items-center">
                          <button
                            className="w-[26px] h-[26px] border"
                            onClick={() => setQuality(quality - 1)}
                          >
                            -
                          </button>
                          <span className="w-[35px] h-[26px] border-t border-b block">
                            {quality}
                          </span>
                          <button
                            className="w-[26px] h-[26px] border"
                            onClick={() => setQuality(quality + 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-2 text-center text-[#ef1104] font-bold hidden lg:table-cell">
                        900.000.000đ
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full lg:w-1/4">
              <div className="p-2.5 pb-5 bg-[#F8F8F8]">
                <div className="h-[27.5px] w-full border-b"></div>
                <div className="flex items-center justify-between pt-2.5">
                  <span className="text-[15px] font-bold">Tổng tiền</span>
                  <span className="text[15px] text-[#fd0000] font-bold">
                    900.000.000đ
                  </span>
                </div>
                <button className="text-base bg-black text-white w-full py-2 mt-[15px] rounded hover:bg-[#A3A3A3] font-bold">
                  THANH TOÁN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
