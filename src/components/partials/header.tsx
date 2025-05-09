import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Overlay from "../ui/overlay";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/authStore";
import { toast } from "react-toastify";
import { Brands } from "../../types";
import axios from "axios";
import { useCartStore } from "../../store/cartStore";
const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path: string) => currentPath.startsWith(path);
  const [active, setActive] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [brand, setBrand] = useState<Brands[]>([]);
  const [productLine, setProductLine] = useState<Brands[]>([]);
  const [query, setQuery] = useState("");
  // Đồng bộ trạng thái token nếu có thay đổi từ tab khác
  useEffect(() => {
    const syncLogout = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", syncLogout);
    return () => window.removeEventListener("storage", syncLogout);
  }, [token]);

  // Xử lý đăng xuất
  const handleLogout = () => {
    localStorage.setItem("token", "");
    setUser(null);
    navigate("/");
    toast.success("Đăng xuất thành công!");
  };

  const fetchBrands = async () => {
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

  useEffect(() => {
    fetchBrands();
    fetchProductLine();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      navigate(`/products?search=${encodeURIComponent(trimmed)}`);
    } else {
      navigate(`/products`);
    }
  };
  const products = useCartStore((state) => state.products);
  const cartNumber = products.length;

  return (
    <header>
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex py-[18px] justify-between items-center flex-wrap">
          <div className="w-1/2 md:w-auto">
            <Link to="/" className="font-bold text-4xl pl-2 lg:pl-10">
              BANDAI
            </Link>
          </div>
          <div className="flex gap-8 md:order-1 w-1/2 md:w-auto justify-end">
            <div className="items-center gap-[7px] hidden lg:flex">
              <img src="/images/icons/profile.svg" className="h-[34px]" alt="" />
              {user ? (
                <>
                  <div className="flex flex-col gap-0.5 leading-[18px]">
                    <div className="flex gap-1">
                      <Link className="font-semibold hover:opacity-50" to="/account/profile#account-info">
                        Tài khoản
                      </Link>
                      <button className="font-semibold hover:opacity-50" onClick={handleLogout}>
                        Đăng xuất
                      </button>
                    </div>
                    <span className="text-[#666]">Tài khoản của bạn!</span>
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-0.5 leading-[18px]">
                  <div className="flex gap-1">
                    <Link className="font-semibold hover:opacity-50" to="/account/login">
                      Đăng nhập
                    </Link>
                    <Link className="font-semibold hover:opacity-50" to="/account/register">
                      Đăng ký
                    </Link>
                  </div>
                  <span className="text-[#666]">Xin chào bạn!</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-[7px]">
              <div className="relative">
                <Link to="/cart">
                  <img src="/images/icons/cart.svg" className="h-[34px]" alt="" />
                </Link>
                <span className="bg-[#DB0015] rounded-full text-white absolute w-5 h-5 flex items-center justify-center left-0 -top-[3px]">{cartNumber}</span>
              </div>
              <Link to="/cart" className="hover:opacity-50 leading-[18px] hidden lg:block">
                Giỏ hàng <br /> của bạn
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <form onSubmit={handleSubmit} className="relative w-full">
              <input value={query} onChange={(e) => setQuery(e.target.value)} className="rounded border border-black pl-2.5 pr-11 py-[7px] w-full" type="text" placeholder="Tìm kiếm sản phẩm" />
              <img src="/images/icons/search.svg" className="h-[23px] absolute right-2.5 top-2" alt="" />
            </form>
          </div>
        </div>
        <div className="items-center hidden lg:flex">
          <div className="relative group/menu">
            <span className="font-bold text-base flex items-center gap-2 text-white bg-black py-[9px] w-fit pl-2 pr-[54px] rounded-[7px]">
              <img src="/images/icons/bars.svg" className="h-[22px]" alt="bars" />
              DANH MỤC SẢN PHẨM
            </span>
          </div>
          <ul className="space-x-8 flex ml-2.5 border-t border-[#EBEBEB] flex-1">
            <li className={`relative ${currentPath === "/" ? "border-t border-black" : ""}`}>
              <Link className="text-base font-bold py-3 block" to="/">
                Trang chủ
              </Link>
            </li>
            <li className={`relative ${isActive("/about-us") ? "border-t border-black" : ""}`}>
              <Link className="text-base font-bold py-3 block" to="/about-us">
                Về chúng tôi
              </Link>
            </li>
            <li className={`relative ${isActive("/products") ? "border-t border-black" : ""}`}>
              <Link className="text-base font-bold py-3 block" to="/products">
                Sản phẩm
              </Link>
            </li>
            <li className="relative group/menu">
              <Link className="text-base font-bold py-3 block" to="/products">
                Thương Hiệu
              </Link>
              <ul className="absolute bg-white top-full left-0 hidden group-hover/menu:block w-[220px] z-10" style={{ boxShadow: "0 1px 2px 2px rgba(0, 0, 0, 0.04)" }}>
                {brand.length > 0 &&
                  brand.map((item, index) => (
                    <li key={index} className="group relative">
                      <Link className="text-base uppercase font-bold py-[5.5px] block pl-2.5 pr-5 group-hover:text-[#A3A3A3]" to={`/products?brandId=${item.id}`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
            <li className="relative group/menu">
              <Link className="text-base font-bold py-3 block" to="/products">
                Dòng Sản Phẩm
              </Link>
              <ul className="absolute bg-white top-full left-0 hidden group-hover/menu:block w-[220px] z-10" style={{ boxShadow: "0 1px 2px 2px rgba(0, 0, 0, 0.04)" }}>
                {productLine.length > 0 &&
                  productLine.map((item, index) => (
                    <li key={index} className="group relative">
                      <Link className="text-base uppercase font-bold py-[5.5px] block pl-2.5 pr-5 group-hover:text-[#A3A3A3]" to={`/products?productLineId=${item.id}`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
            <li className={`relative ${isActive("/news") ? "border-t border-black" : ""}`}>
              <Link className="text-base font-bold py-3 block" to="/news">
                Tin Tức
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:hidden flex fixed bottom-0 w-full bg-white z-10" style={{ boxShadow: "0 0 10px #c9c9c9" }}>
        <button onClick={() => setActive(true)} className="w-1/4 max-w-[25%] flex justify-center py-[7.5px]">
          <img src="/images/icons/bars-black.svg" className="h-[35px]" alt="" />
        </button>
        <Link className="w-1/4 max-w-[25%] flex justify-center py-[7.5px]" to="/">
          <img src="/images/icons/home.svg" className="h-[35px]" alt="" />
        </Link>
        <Link className="w-1/4 max-w-[25%] flex justify-center py-[7.5px]" to="/cart">
          <img src="/images/icons/cart.svg" className="h-[35px]" alt="" />
        </Link>
        <a className="w-1/4 max-w-[25%] flex justify-center py-[7.5px]" href="/account/profile">
          <img src="/images/icons/profile.svg" className="h-[35px]" alt="" />
        </a>
      </div>
      <div className={`w-4/5 bg-white fixed top-0 h-screen z-20 lg:hidden transition-all duration-300 ${active ? "left-0" : "-left-full"}`}>
        <div style={{ boxShadow: "0px 0px 20px 0px rgba(44,44,44,0.05)" }}>
          <span className="text-xs font-bold bg-black text-white flex items-center gap-2 p-3">
            <img onClick={() => setActive(false)} src="/images/icons/bars.svg" className="h-[22px]" alt="" />
            DANH MỤC SẢN PHẨM
          </span>
        </div>
        <ul>
          <li>
            <Link className="text-base font-bold py-1.5 px-2  block" to="/">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link className="text-base font-bold py-1.5 px-2  block" to="/about-us">
              Về Chúng Tôi
            </Link>
          </li>
          <li>
            <Link className="text-base font-bold py-1.5 px-2  block" to="/">
              Thương hiệu
            </Link>
          </li>
          <li>
            <Link className="text-base font-bold py-1.5 px-2  block" to="/">
              Dòng Sản Phẩm
            </Link>
          </li>
          <li>
            <Link className="text-base font-bold py-1.5 px-2  block" to="/">
              Tin tức
            </Link>
          </li>
        </ul>
      </div>
      {active && <Overlay onClick={() => setActive(false)} />}
    </header>
  );
};
export default Header;
