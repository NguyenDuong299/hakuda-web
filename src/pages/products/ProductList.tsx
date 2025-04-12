import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/ui/pagination";

const ProductList = () => {
  const mockData = [
    {
      nameProduct:
        "Bộ phụ kiện Figure Rise - Jet Effect (Clear Blue) - Chính hãng Bandai Nhật Bản",
      price: "200000",
      imgProduct: "5c0b9325-21aa-4108-ad4f-6584a1926abe.webp",
    },
    {
      nameProduct:
        "Bộ phụ kiện Figure Rise - Jet Effect (Clear Blue) - Chính hãng Bandai Nhật Bản",
      price: "200000",
      imgProduct: "5c0b9325-21aa-4108-ad4f-6584a1926abe.webp",
    },
    {
      nameProduct:
        "Bộ phụ kiện Figure Rise - Jet Effect (Clear Blue) - Chính hãng Bandai Nhật Bản",
      price: "200000",
      imgProduct: "5c0b9325-21aa-4108-ad4f-6584a1926abe.webp",
    },
    {
      nameProduct:
        "Bộ phụ kiện Figure Rise - Jet Effect (Clear Blue) - Chính hãng Bandai Nhật Bản",
      price: "200000",
      imgProduct: "5c0b9325-21aa-4108-ad4f-6584a1926abe.webp",
    },
    {
      nameProduct:
        "Bộ phụ kiện Figure Rise - Jet Effect (Clear Blue) - Chính hãng Bandai Nhật Bản",
      price: "200000",
      imgProduct: "5c0b9325-21aa-4108-ad4f-6584a1926abe.webp",
    },
    {
      nameProduct:
        "Bộ phụ kiện Figure Rise - Jet Effect (Clear Blue) - Chính hãng Bandai Nhật Bản",
      price: "200000",
      imgProduct: "5c0b9325-21aa-4108-ad4f-6584a1926abe.webp",
    },
    {
      nameProduct:
        "Bộ phụ kiện Figure Rise - Jet Effect (Clear Blue) - Chính hãng Bandai Nhật Bản",
      price: "200000",
      imgProduct: "5c0b9325-21aa-4108-ad4f-6584a1926abe.webp",
    },
  ];
  return (
    <>
      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-extrabold text-xl">MODEL KIT</h2>
          <select className="border border-[#A3A3A3] rounded p-1">
            <option>Mặc định</option>
            <option>Tên A-Z</option>
            <option>Tên Z-A</option>
            <option>Giá thấp đến cao</option>
            <option>Giá cao xuống thấp</option>
            <option>Mới nhất</option>
            <option>Cũ nhất</option>
          </select>
        </div>
        <div className="flex flex-wrap -mx-2.5">
          {mockData.map((item, index) => (
            <div className="w-1/2 md:w-1/4 px-2.5 mb-5 group" key={index}>
              <Link className="block overflow-hidden" to="/">
                <img className="group-hover:scale-110 duration-500" src={`/images/${item.imgProduct}`} alt="" />
              </Link>
              <div className="mt-2.5">
                <Link className="text-base font-bold line-clamp-1 hover:text-[#a3a3a3]" to="/">
                  {item.nameProduct}
                </Link>
                <span className="text-[#fd0000] font-bold">
                  {Number(item.price).toLocaleString("vi-VN")}₫
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mb-4">
          <Pagination />
        </div>
      </div>
    </>
  );
};
export default ProductList;
