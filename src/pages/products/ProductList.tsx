import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Products } from "../../types";

interface Props {
  selectedBrands: string | null;
  selectedProductLines: string | null;
  minPrice: number | null;
  maxPrice: number | null;
}

const ProductList = ({ selectedBrands, selectedProductLines, minPrice, maxPrice }: Props) => {
  const [product, setProduct] = useState<Products[]>([]);
  const [total, setTotal] = useState(0);
  const totalPages = Math.ceil(total / 10);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`, {
          params: {
            page,
            brandId: selectedBrands,
            productLineId: selectedProductLines,
            minPrice: minPrice,
            maxPrice: maxPrice,
            sortBy,
          },
        });
        setProduct(response.data.products);
        setTotal(response.data.totalProduct);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProduct();
  }, [page, selectedBrands, selectedProductLines, minPrice, maxPrice, sortBy]);

  return (
    <>
      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-extrabold text-xl">SẢN PHẨM</h2>
          <select onChange={(e) => setSortBy(e.target.value)} className="border border-[#A3A3A3] rounded p-1">
            <option value="default">Mặc định</option>
            <option value="nameAsc">Tên A-Z</option>
            <option value="nameDesc">Tên Z-A</option>
            <option value="priceAsc">Giá thấp đến cao</option>
            <option value="priceDesc">Giá cao xuống thấp</option>
            <option value="newest">Mới nhất</option>
            <option value="oldest">Cũ nhất</option>
          </select>
        </div>
        {product.length > 0 ? (
          <div>
            <div className="flex flex-wrap -mx-2.5">
              {product.map((item, index) => (
                <div className="w-1/2 md:w-1/4 px-2.5 mb-5 group" key={index}>
                  <Link className="block overflow-hidden" to={`/products/${item.id}`}>
                    {item.images && item.images.length > 0 ? (
                      item.images
                        .filter((img) => img && img.isThumbnail && img.image_url)
                        .slice(0, 1)
                        .map((img, index) => <img key={index} src={`${process.env.REACT_APP_API_URL}/${img.image_url}`} alt="thumbnail" className="group-hover:scale-110 duration-500 aspect-square" />)
                    ) : (
                      <img src="/images/uploads/error-img.jpg" alt="thumbnail" className="group-hover:scale-110 duration-500 aspect-square" />
                    )}
                  </Link>
                  <div className="mt-2.5">
                    <Link className="text-base font-bold line-clamp-1 hover:text-[#a3a3a3]" to={`/products/${item.id}`}>
                      {item.name}
                    </Link>
                    <span className="text-[#fd0000] font-bold">{Number(item.price).toLocaleString("vi-VN")}₫</span>
                  </div>
                </div>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="flex justify-end mb-4">
                <nav className="inline-flex items-center space-x-1">
                  <button
                    onClick={() => setPage(page > 1 ? page - 1 : 1)}
                    className="px-3 py-1 rounded bg-white border border-[#ebebeb] rounded-l hover:bg-[#A3A3A3] hover:border-[#A3A3A3] hover:text-white"
                  >
                    «
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setPage(index + 1)}
                      className={`px-3 py-1 rounded border ${
                        page === index + 1 ? "text-white bg-[#A3A3A3] border-[#A3A3A3]" : "text-black bg-white border-[#ebebeb] hover:bg-[#A3A3A3] hover:border-[#A3A3A3] hover:text-white"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
                    className="px-3 py-1 rounded bg-white border border-[#ebebeb] rounded-r hover:bg-[#A3A3A3] hover:border-[#A3A3A3] hover:text-white"
                  >
                    »
                  </button>
                </nav>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center flex-col gap-2 w-full mt-20">
            <img src="/images/icons/empty.svg" alt="loading" className="h-12" />
            <span className="text-base">Không có sản phẩm nào</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
