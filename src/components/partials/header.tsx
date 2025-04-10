import React, { useState } from "react";
import Overlay from "../ui/overlay";
const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header>
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex py-[18px] justify-between items-center flex-wrap">
          <div className="w-1/2 md:w-auto">
            <a href="/">
              <img className="block h-12 md:h-16" src="/images/logo.webp" alt="" />
            </a>
          </div>
          <div className="flex gap-8 md:order-1 w-1/2 md:w-auto justify-end">
            <div className="items-center gap-[7px] hidden lg:flex">
              <img
                src="/images/icons/profile.svg"
                className="h-[34px]"
                alt=""
              />
              <div className="flex flex-col gap-0.5 leading-[18px]">
                <div className="flex gap-1">
                  <a className="font-semibold hover:opacity-50" href="/">
                    Đăng nhập
                  </a>
                  <a className="font-semibold hover:opacity-50" href="/">
                    Đăng ký
                  </a>
                </div>
                <span className="text-[#666]">Xin chào bạn!</span>
              </div>
            </div>
            <div className="flex items-center gap-[7px]">
              <div className="relative">
                <img src="/images/icons/cart.svg" className="h-[34px]" alt="" />
                <span className="bg-[#DB0015] rounded-full text-white absolute w-5 h-5 flex items-center justify-center left-0 -top-[3px]">
                  0
                </span>
              </div>
              <a
                className="hover:opacity-50 leading-[18px] hidden lg:block"
                href="/"
              >
                Giỏ hàng <br /> của bạn
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <form className="relative w-full">
              <input
                className="rounded border border-black pl-2.5 pr-11 py-[7px] w-full"
                type="text"
                placeholder="Tìm kiếm sản phẩm"
              />
              <img
                src="/images/icons/search.svg"
                className="h-[23px] absolute right-2.5 top-2"
                alt=""
              />
            </form>
          </div>
        </div>
        <div className="items-center hidden lg:flex">
          <div className="relative group/menu">
            <span className="font-bold text-base flex items-center gap-2 text-white bg-black py-[9px] w-fit pl-2 pr-[54px] rounded-[7px] cursor-pointer">
              <img src="/images/icons/bars.svg" className="h-[22px]" alt="" />
              DANH MỤC SẢN PHẨM
            </span>
            <ul
              className="bg-white absolute w-full hidden group-hover/menu:block"
              style={{ boxShadow: "0px 0px 20px 0px rgba(44,44,44,0.05)" }}
            >
              <li className="border-b border-[#ebebeb] group">
                <a
                  className="text-base font-normal group-hover:text-[#A3A3A3] py-1.5 px-2 block"
                  href="/"
                >
                  TẤT CẢ SẢN PHẨM
                </a>
              </li>
              <li className="border-b border-[#ebebeb] group">
                <a
                  className="text-base font-normal group-hover:text-[#A3A3A3] py-1.5 px-2 block"
                  href="/"
                >
                  MODEL KIT
                </a>
              </li>
              <li className="border-b border-[#ebebeb] group">
                <a
                  className="text-base font-normal group-hover:text-[#A3A3A3] py-1.5 px-2 block"
                  href="/"
                >
                  METAL BUILD
                </a>
              </li>
              <li className="border-b border-[#ebebeb] group">
                <a
                  className="text-base font-normal group-hover:text-[#A3A3A3] py-1.5 px-2 block"
                  href="/"
                >
                  FIGURE
                </a>
              </li>
              <li className="border-b border-[#ebebeb] group">
                <a
                  className="text-base font-normal group-hover:text-[#A3A3A3] py-1.5 px-2 block"
                  href="/"
                >
                  DỤNG CỤ
                </a>
              </li>
              <li className="border-b border-[#ebebeb] group">
                <a
                  className="text-base font-normal group-hover:text-[#A3A3A3] py-1.5 px-2 block"
                  href="/"
                >
                  PHỤ KIỆN
                </a>
              </li>
            </ul>
          </div>
          <ul className="space-x-8 flex ml-2.5 border-t border-[#EBEBEB] flex-1">
            <li className="active group border-t border-black relative">
              <a className="text-base font-bold py-3 block" href="/">
                Trang chủ
              </a>
            </li>
            <li className="relative group/menu">
              <a className="text-base font-bold py-3 block" href="/">
                Model Kit
              </a>
              <ul
                className="absolute bg-white top-full left-0 hidden group-hover/menu:block w-[220px]"
                style={{ boxShadow: "0 1px 2px 2px rgba(0, 0, 0, 0.04)" }}
              >
                <li className="group relative">
                  <a
                    className="text-base uppercase font-bold py-[5.5px] block pl-2.5 pr-5 group-hover:text-[#A3A3A3]"
                    href="/"
                  >
                    Bandai
                  </a>
                </li>
                <li className="group relative">
                  <a
                    className="text-base uppercase font-bold py-[5.5px] block pl-2.5 pr-5 group-hover:text-[#A3A3A3]"
                    href="/"
                  >
                    Bandai
                  </a>
                </li>
                <li className="group relative">
                  <a
                    className="text-base uppercase font-bold py-[5.5px] block pl-2.5 pr-5 group-hover:text-[#A3A3A3]"
                    href="/"
                  >
                    Bandai
                  </a>
                </li>
                <li className="group relative">
                  <a
                    className="text-base uppercase font-bold py-[5.5px] block pl-2.5 pr-5 group-hover:text-[#A3A3A3]"
                    href="/"
                  >
                    Bandai
                  </a>
                </li>
                <li className="group relative">
                  <a
                    className="text-base uppercase font-bold py-[5.5px] block pl-2.5 pr-5 group-hover:text-[#A3A3A3]"
                    href="/"
                  >
                    Bandai
                  </a>
                </li>
                <li className="group relative">
                  <a
                    className="text-base uppercase font-bold py-[5.5px] block pl-2.5 pr-5 group-hover:text-[#A3A3A3]"
                    href="/"
                  >
                    Bandai
                  </a>
                </li>
                <li className="group relative">
                  <a
                    className="text-base uppercase font-bold py-[5.5px] block pl-2.5 pr-5 group-hover:text-[#A3A3A3]"
                    href="/"
                  >
                    Bandai
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative">
              <a className="text-base font-bold py-3 block" href="/">
                Metal Build
              </a>
            </li>
            <li className="relative">
              <a className="text-base font-bold py-3 block" href="/">
                Figure
              </a>
            </li>
            <li className="relative">
              <a className="text-base font-bold py-3 block" href="/news">
                Tin Tức
              </a>
            </li>
            <li className="relative">
              <a className="text-base font-bold py-3 block" href="/">
                Hàng Pre-Order
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="lg:hidden flex fixed bottom-0 w-full bg-white z-10"
        style={{ boxShadow: "0 0 10px #c9c9c9" }}
      >
        <button
          onClick={() => setActive(true)}
          className="w-1/4 max-w-[25%] flex justify-center py-[7.5px]"
        >
          <img src="/images/icons/bars-black.svg" className="h-[35px]" alt="" />
        </button>
        <a
          className="w-1/4 max-w-[25%] flex justify-center py-[7.5px]"
          href="/"
        >
          <img src="/images/icons/home.svg" className="h-[35px]" alt="" />
        </a>
        <a
          className="w-1/4 max-w-[25%] flex justify-center py-[7.5px]"
          href="/"
        >
          <img src="/images/icons/cart.svg" className="h-[35px]" alt="" />
        </a>
        <a
          className="w-1/4 max-w-[25%] flex justify-center py-[7.5px]"
          href="/"
        >
          <img src="/images/icons/profile.svg" className="h-[35px]" alt="" />
        </a>
      </div>
      <div
        className={`w-4/5 bg-white fixed top-0 h-screen z-20 lg:hidden transition-all duration-300 ${
          active ? "left-0" : "-left-full"
        }`}
      >
        <div style={{ boxShadow: "0px 0px 20px 0px rgba(44,44,44,0.05)" }}>
          <span className="text-xs font-bold bg-black text-white flex items-center gap-2 p-3">
            <img
              onClick={() => setActive(false)}
              src="/images/icons/bars.svg"
              className="h-[22px]"
              alt=""
            />
            DANH MỤC SẢN PHẨM
          </span>
          <ul>
            <li>
              <a className="uppercase block font-normal p-2" href="/">
                tất cả sản phẩm
              </a>
            </li>
            <li>
              <a className="uppercase block font-normal p-2" href="/">
                model kit
              </a>
            </li>
            <li>
              <a className="uppercase block font-normal p-2" href="/">
                metal build
              </a>
            </li>
            <li>
              <a className="uppercase block font-normal p-2" href="/">
                figuire
              </a>
            </li>
            <li>
              <a className="uppercase block font-normal p-2" href="/">
                dụng cụ
              </a>
            </li>
            <li>
              <a className="uppercase block font-normal p-2" href="/">
                phụ kiện
              </a>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <a className="text-base font-bold py-1.5 px-2  block" href="/">
              Trang chủ
            </a>
          </li>
          <li>
            <a className="text-base font-bold py-1.5 px-2  block" href="/">
              Trang chủ
            </a>
          </li>
          <li>
            <a className="text-base font-bold py-1.5 px-2  block" href="/">
              Trang chủ
            </a>
          </li>
          <li>
            <a className="text-base font-bold py-1.5 px-2  block" href="/">
              Trang chủ
            </a>
          </li>
          <li>
            <a className="text-base font-bold py-1.5 px-2  block" href="/">
              Trang chủ
            </a>
          </li>
        </ul>
      </div>
      {active && <Overlay onClick={() => setActive(false)} />}
    </header>
  );
};
export default Header;
