import React from "react";

const FeaturedNews = () => {
  const mockData = [
    {
      productName:
        "Cách Lắp Ráp Mô Hình Gundam MG Cho Người Mới: Hướng Dẫn Chi Tiết Từ A-Z",
      productImage: "cach-lap-rap-mo-hinh-mg-cho-nguoi-moi.webp",
    },
    {
      productName:
        "Cách Lắp Ráp Mô Hình Gundam MG Cho Người Mới: Hướng Dẫn Chi Tiết Từ A-Z",
      productImage: "cach-lap-rap-mo-hinh-mg-cho-nguoi-moi.webp",
    },
    {
      productName:
        "Cách Lắp Ráp Mô Hình Gundam MG Cho Người Mới: Hướng Dẫn Chi Tiết Từ A-Z",
      productImage: "cach-lap-rap-mo-hinh-mg-cho-nguoi-moi.webp",
    },
    {
      productName:
        "Cách Lắp Ráp Mô Hình Gundam MG Cho Người Mới: Hướng Dẫn Chi Tiết Từ A-Z",
      productImage: "cach-lap-rap-mo-hinh-mg-cho-nguoi-moi.webp",
    },
  ];
  return (
    <>
      <h2 className="text-2xl font-extrabold mb-2.5">TIN NỔI BẬT</h2>
      <div className="flex flex-col gap-2.5">
        {mockData.map((item, index) => (
          <div
            key={index}
            className="flex gap-2.5 py-2.5 border-b border-[#ebebeb] last:border-none"
          >
            <img
              className="h-[50px] rounded-[5px]"
              src={`images/${item.productImage}`}
              alt=""
            />
            <h2>
              <a className="line-clamp-2 hover:text-[#A3A3A3]" href="/">
                {item.productName}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};
export default FeaturedNews;
