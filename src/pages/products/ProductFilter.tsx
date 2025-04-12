import React, { useEffect, useState } from "react";
import Overlay from "../../components/ui/overlay";

const ProductFilter = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const classes = ["overflow-hidden", "h-screen"];
    if (active) {
      classes.forEach(cls => document.body.classList.add(cls));
    } else {
      classes.forEach(cls => document.body.classList.remove(cls));
    }
    return () => {
      classes.forEach(cls => document.body.classList.remove(cls));
    };
  }, [active]);
  
  return (
    <>
      {active && <Overlay onClick={() => setActive(false)} />}
      <div
        onClick={() => setActive(true)}
        className="lg:hidden bg-black fixed p-[5px] right-0 top-[35%] z-10"
      >
        <img src="/images/icons/filter-mobile.svg" alt="" />
      </div>
      <div
        className={`w-[270px] fixed lg:static top-0 right-0 bg-white z-50 lg:z-0 px-2.5 lg:px-0 lg:w-1/4 flex flex-col gap-4 duration-500
        ${active ? "right-0 py-5 h-screen overflow-y-scroll" : "right-[-270px]"}
        `}
      >
        <div className="flex flex-col gap-2">
          <h2 className="font-extrabold text-xl">HÌNH THỨC VẬN CHUYỂN</h2>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="delivery-now"
              className="accent-[#FD0000]"
            />
            <label
              htmlFor="delivery-now"
              className="font-normal cursor-pointer text-nowrap"
            >
              <strong className="text-[#FD0000]">NOW</strong> Siêu tốc trong 2H
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-extrabold text-xl">THƯƠNG HIỆU</h2>
          <ul className="flex flex-col gap-3">
            <li>
              <div className="flex items-center gap-2 min-w-[46%]">
                <input
                  type="checkbox"
                  id="delivery-now"
                  className="accent-[#FD0000]"
                />
                <label
                  htmlFor="delivery-now"
                  className="font-normal cursor-pointer select-none"
                >
                  Machine Core Industry
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 min-w-[46%]">
                <input
                  type="checkbox"
                  id="delivery-now"
                  className="accent-[#FD0000]"
                />
                <label
                  htmlFor="delivery-now"
                  className="font-normal cursor-pointer select-none"
                >
                  30 Minutes Missions
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 min-w-[46%]">
                <input
                  type="checkbox"
                  id="delivery-now"
                  className="accent-[#FD0000]"
                />
                <label
                  htmlFor="delivery-now"
                  className="font-normal cursor-pointer select-none"
                >
                  Machine Core Industry
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 min-w-[46%]">
                <input
                  type="checkbox"
                  id="delivery-now"
                  className="accent-[#FD0000]"
                />
                <label
                  htmlFor="delivery-now"
                  className="font-normal cursor-pointer select-none"
                >
                  Machine Core Industry
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 min-w-[46%]">
                <input
                  type="checkbox"
                  id="delivery-now"
                  className="accent-[#FD0000]"
                />
                <label
                  htmlFor="delivery-now"
                  className="font-normal cursor-pointer select-none"
                >
                  Machine Core Industry
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 min-w-[46%]">
                <input
                  type="checkbox"
                  id="delivery-now"
                  className="accent-[#FD0000]"
                />
                <label
                  htmlFor="delivery-now"
                  className="font-normal cursor-pointer select-none"
                >
                  Machine Core Industry
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-extrabold text-xl">MỨC GIÁ</h2>
          <div className="flex items-center gap-2">
            <input
              className="border border-[#DEE5EB] hover:border-[#80BDFF] duration-300 py-[8.5px] w-[48%] px-2.5 rounded"
              type="text"
              placeholder="Từ"
            />{" "}
            -{" "}
            <input
              className="border border-[#DEE5EB] hover:border-[#80BDFF] duration-300 py-[8.5px] w-[48%] px-2.5 rounded"
              type="text"
              placeholder="Đến"
            />
          </div>
          <button className="text-base text-white bg-black font-extrabold py-[8.5px] rounded hover:bg-[#A3A3A3] mt-1">
            ÁP DỤNG GIÁ
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-extrabold text-xl">LOẠI</h2>
          <ul className="flex flex-col gap-3">
            <li>
              <div className="flex items-center gap-2 min-w-[46%]">
                <input
                  type="checkbox"
                  id="delivery-now"
                  className="accent-[#FD0000]"
                />
                <label
                  htmlFor="delivery-now"
                  className="font-normal cursor-pointer select-none"
                >
                  Machine Core Industry
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 min-w-[46%]">
                <input
                  type="checkbox"
                  id="delivery-now"
                  className="accent-[#FD0000]"
                />
                <label
                  htmlFor="delivery-now"
                  className="font-normal cursor-pointer select-none"
                >
                  30 Minutes Missions
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 min-w-[46%]">
                <input
                  type="checkbox"
                  id="delivery-now"
                  className="accent-[#FD0000]"
                />
                <label
                  htmlFor="delivery-now"
                  className="font-normal cursor-pointer select-none"
                >
                  Machine Core Industry
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 min-w-[46%]">
                <input
                  type="checkbox"
                  id="delivery-now"
                  className="accent-[#FD0000]"
                />
                <label
                  htmlFor="delivery-now"
                  className="font-normal cursor-pointer select-none"
                >
                  Machine Core Industry
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 min-w-[46%]">
                <input
                  type="checkbox"
                  id="delivery-now"
                  className="accent-[#FD0000]"
                />
                <label
                  htmlFor="delivery-now"
                  className="font-normal cursor-pointer select-none"
                >
                  Machine Core Industry
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 min-w-[46%]">
                <input
                  type="checkbox"
                  id="delivery-now"
                  className="accent-[#FD0000]"
                />
                <label
                  htmlFor="delivery-now"
                  className="font-normal cursor-pointer select-none"
                >
                  Machine Core Industry
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ProductFilter;
