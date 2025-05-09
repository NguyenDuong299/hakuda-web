import axios from "axios";
import React, { useEffect, useState } from "react";
import Overlay from "../../components/ui/overlay";
import { Brands, ProductLines } from "../../types";
import { useLocation, useNavigate } from "react-router-dom";

interface ProductFilterProps {
  selectedBrand: string | null;
  setSelectedBrand: (id: string | null) => void;
  selectedProductLine: string | null;
  setSelectedProductLine: (id: string | null) => void;
  minPrice: number | null;
  maxPrice: number | null;
  setMinPrice: (price: number | null) => void;
  setMaxPrice: (price: number | null) => void;
}

const ProductFilter = ({ selectedBrand, setSelectedBrand, selectedProductLine, setSelectedProductLine, minPrice, maxPrice, setMinPrice, setMaxPrice }: ProductFilterProps) => {
  const [active, setActive] = useState(false);
  const [brand, setBrand] = useState<Brands[]>([]);
  const [productLine, setProductLine] = useState<ProductLines[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [minPriceInput, setMinPriceInput] = useState<string>("");
  const [maxPriceInput, setMaxPriceInput] = useState<string>("");

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
  }, []);

  const updateUrl = () => {
    const params = new URLSearchParams();
    if (selectedBrand) {
      params.set("brandId", selectedBrand);
    }
    if (selectedProductLine) {
      params.set("productLineId", selectedProductLine);
    }

    const searchQuery = new URLSearchParams(location.search).get("query");
    if (searchQuery) params.set("query", searchQuery);

    navigate(`?${params.toString()}`, { replace: true });
  };

  useEffect(() => {
    updateUrl();
  }, [location.search, selectedBrand, selectedProductLine]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const brandId = params.get("brandId");
    const productLineId = params.get("productLineId");
    const minPrice = params.get("minPrice");
    const maxPrice = params.get("maxPrice");
    const searchQuery = params.get("search");
    if (brandId) {
      setSelectedBrand(brandId);
    }
    if (productLineId) {
      setSelectedProductLine(productLineId);
    }
    if (minPrice) {
      params.set("minPrice", String(minPrice));
    }
    if (maxPrice) {
      params.set("maxPrice", String(maxPrice));
    }
    if (searchQuery) {
      params.set("search", searchQuery);
    }
    navigate(`?${params.toString()}`, { replace: true });
  }, [location.search, setSelectedBrand, setSelectedProductLine]);

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

  const toggleBrand = (id: string) => {
    const newBrand = selectedBrand === id ? null : id;
    setSelectedBrand(newBrand);
  };

  const toggleProductLine = (id: string) => {
    const newProductLine = selectedProductLine === id ? null : id;
    setSelectedProductLine(newProductLine);
  };

  return (
    <>
      {active && <Overlay onClick={() => setActive(false)} />}
      <div onClick={() => setActive(true)} className="lg:hidden bg-black fixed p-[5px] right-0 top-[35%] z-10">
        <img src="/images/icons/filter-mobile.svg" alt="" />
      </div>
      <div
        className={`w-[270px] fixed lg:static top-0 right-0 bg-white z-50 lg:z-0 px-2.5 lg:px-0 lg:w-1/4 flex flex-col gap-4 duration-500
        ${active ? "right-0 py-5 h-screen overflow-y-scroll" : "right-[-270px]"}`}
      >
        <div className="flex flex-col gap-2">
          <h2 className="font-extrabold text-xl">MỨC GIÁ</h2>
          <div className="flex items-center gap-2">
            <input
              name="minPrice"
              onChange={(e) => setMinPriceInput(e.target.value)}
              value={minPriceInput}
              className="border border-[#DEE5EB] hover:border-[#80BDFF] duration-300 py-[8.5px] w-[48%] px-2.5 rounded"
              type="text"
              placeholder="Từ"
            />{" "}
            -{" "}
            <input
              name="maxPrice"
              onChange={(e) => setMaxPriceInput(e.target.value)}
              value={maxPriceInput}
              className="border border-[#DEE5EB] hover:border-[#80BDFF] duration-300 py-[8.5px] w-[48%] px-2.5 rounded"
              type="text"
              placeholder="Đến"
            />
          </div>
          <button
            onClick={() => {
              setMinPrice(minPriceInput ? Number(minPriceInput) : null);
              setMaxPrice(maxPriceInput ? Number(maxPriceInput) : null);
            }}
            className="text-base text-white bg-black font-extrabold py-[8.5px] rounded hover:bg-[#A3A3A3] mt-1"
          >
            ÁP DỤNG GIÁ
          </button>
        </div>
        {brand.length > 0 && (
          <div className="flex flex-col gap-2">
            <h2 className="font-extrabold text-xl">THƯƠNG HIỆU</h2>
            <ul className="flex flex-col gap-3">
              {brand.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center gap-2 min-w-[46%]">
                    <input
                      type="checkbox"
                      id={`brand-${item.id}`}
                      name="brand"
                      checked={selectedBrand === String(item.id)}
                      onChange={() => toggleBrand(String(item.id))} // Toggle brand
                      className="accent-[#FD0000]"
                    />
                    <label htmlFor={`brand-${item.id}`} className="font-normal cursor-pointer select-none">
                      {item.name}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {productLine.length > 0 && (
          <div className="flex flex-col gap-2">
            <h2 className="font-extrabold text-xl">DÒNG</h2>
            <ul className="flex flex-col gap-3">
              {productLine.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center gap-2 min-w-[46%]">
                    <input
                      type="checkbox"
                      id={`productLine-${item.id}`}
                      name="productLine"
                      checked={selectedProductLine === String(item.id)}
                      onChange={() => toggleProductLine(String(item.id))}
                      className="accent-[#FD0000]"
                    />
                    <label htmlFor={`productLine-${item.id}`} className="font-normal cursor-pointer select-none">
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
