import React from "react";

const FeaturedProduct = () => {
  const mockData = [
    {
      productName: "Cách Lắp Ráp Mô Hình Gundam MG Cho Người Mới: Hướng Dẫn Chi Tiết Từ A-Z",
      productImage: "fe7c1b6f-b793-47a4-8bfb-1db5282355e5-1744191018574.webp",
    },
    {
      productName: "Cách Lắp Ráp Mô Hình Gundam MG Cho Người Mới: Hướng Dẫn Chi Tiết Từ A-Z",
      productImage: "fe7c1b6f-b793-47a4-8bfb-1db5282355e5-1744191018574.webp",
    },
    {
      productName: "Cách Lắp Ráp Mô Hình Gundam MG Cho Người Mới: Hướng Dẫn Chi Tiết Từ A-Z",
      productImage: "fe7c1b6f-b793-47a4-8bfb-1db5282355e5-1744191018574.webp",
    },
    {
      productName: "Cách Lắp Ráp Mô Hình Gundam MG Cho Người Mới: Hướng Dẫn Chi Tiết Từ A-Z",
      productImage: "fe7c1b6f-b793-47a4-8bfb-1db5282355e5-1744191018574.webp",
    },
  ];
  return (
    <>
      <h2 className="text-2xl font-extrabold mb-2.5">SẢN PHẨM NỔI BẬT</h2>
      <div className="flex flex-col gap-2.5">
        {mockData.map((item, index) => (
          <div key={index} className="flex gap-2.5 py-2.5 border-b border-[#ebebeb] last:border-none">
            <img className="h-[100px] rounded-[5px]" src={`images/${item.productImage}`} alt="" />
            <div className="flex flex-col gap-0.5">
              <h2>
                <a className="line-clamp-2 hover:text-[#A3A3A3]" href="/">
                  {item.productName}
                </a>
              </h2>
              <span className="text-[#F91111] font-bold">750.000₫</span>
              <a className="bg-[#F91111] px-2.5 py-0.5 w-fit rounded text-white" href="/">
                Thêm vào giỏ
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default FeaturedProduct;
