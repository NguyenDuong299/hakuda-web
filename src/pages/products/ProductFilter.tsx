import axios from "axios";
import React, { useEffect, useState } from "react";
import Overlay from "../../components/ui/overlay";
import { Brands, ProductLines } from "../../types";

const ProductFilter = () => {
  const [active, setActive] = useState(false);
  const [brand, setBrand] = useState<Brands[]>([]);
  const [productLine, setProductLine] = useState<ProductLines[]>([]);
  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/brands`);
        setBrand(res.data.brands);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchProductLine = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product-lines`);
        setProductLine(res.data.productLines);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBrand();
    fetchProductLine();
  });
  useEffect(() => {
    const classes = ["overflow-hidden", "h-screen"];
    if (active) {
      classes.forEach((cls) => document.body.classList.add(cls));
    } else {
      classes.forEach((cls) => document.body.classList.remove(cls));
    }
    return () => {
      classes.forEach((cls) => document.body.classList.remove(cls));
    };
  }, [active]);

  return (
    <>
      {active && <Overlay onClick={() => setActive(false)} />}
      <div onClick={() => setActive(true)} className="lg:hidden bg-black fixed p-[5px] right-0 top-[35%] z-10">
        <img src="/images/icons/filter-mobile.svg" alt="" />
      </div>
      <div
        className={`w-[270px] fixed lg:static top-0 right-0 bg-white z-50 lg:z-0 px-2.5 lg:px-0 lg:w-1/4 flex flex-col gap-4 duration-500
        ${active ? "right-0 py-5 h-screen overflow-y-scroll" : "right-[-270px]"}
        `}
      >
        <div className="flex flex-col gap-2">
          <h2 className="font-extrabold text-xl">THƯƠNG HIỆU</h2>
          <ul className="flex flex-col gap-3">
            {brand.map((item, index) => (
              <li key={index}>
                <div className="flex items-center gap-2 min-w-[46%]">
                  <input type="checkbox" id={String(item.id)} className="accent-[#FD0000]" />
                  <label htmlFor={String(item.id)} className="font-normal cursor-pointer select-none">
                    {item.name}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-extrabold text-xl">MỨC GIÁ</h2>
          <div className="flex items-center gap-2">
            <input className="border border-[#DEE5EB] hover:border-[#80BDFF] duration-300 py-[8.5px] w-[48%] px-2.5 rounded" type="text" placeholder="Từ" /> -{" "}
            <input className="border border-[#DEE5EB] hover:border-[#80BDFF] duration-300 py-[8.5px] w-[48%] px-2.5 rounded" type="text" placeholder="Đến" />
          </div>
          <button className="text-base text-white bg-black font-extrabold py-[8.5px] rounded hover:bg-[#A3A3A3] mt-1">ÁP DỤNG GIÁ</button>
        </div>
        {productLine.length > 0 && (
          <div className="flex flex-col gap-2">
            <h2 className="font-extrabold text-xl">DÒNG</h2>
            <ul className="flex flex-col gap-3">
              {productLine.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center gap-2 min-w-[46%]">
                    <input type="checkbox" id={String(item.id)} className="accent-[#FD0000]" />
                    <label htmlFor={String(item.id)} className="font-normal cursor-pointer select-none">
                      {item.name}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default ProductFilter;
