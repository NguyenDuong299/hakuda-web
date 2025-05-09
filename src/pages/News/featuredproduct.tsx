import React, { useEffect, useState } from "react";
import { Products } from "../../types";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const fetchHotProduct = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/filter/hot`);
      setProducts(res.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchHotProduct();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-extrabold mb-2.5">SẢN PHẨM NỔI BẬT</h2>
      <div className="flex flex-col gap-2.5">
        {products.slice(0, 4).map((item, index) => (
          <div key={index} className="flex gap-2.5 py-2.5 border-b border-[#ebebeb] last:border-none">
            <Link to={`/products/${item.id}`}>
              {item.images &&
                item.images
                  .filter((img) => img.isThumbnail)
                  .map((img, index) => <img key={index} src={`${process.env.REACT_APP_API_URL}/${img.image_url}`} alt={img.image_url} className="h-[100px] rounded-[5px] aspect-square" />)}
            </Link>
            <div className="flex flex-col gap-0.5 flex-1">
              <Link className="line-clamp-2 hover:text-[#A3A3A3]" to={`/products/${item.id}`}>
                {item.name}
              </Link>
              <span className="text-[#F91111] font-bold">{Number(item.price).toLocaleString("vi-VN")}₫</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProduct;
