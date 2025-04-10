import React, { useState } from "react";

const Contact = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => setActive(!active)}
        className="z-20 w-12 h-12 fixed bottom-[160px] right-2.5 bg-[#A3A3A3] border border-white rounded-full flex items-center justify-center animate-pulseRotate cursor-pointer"
      >
        <img src="/images/icons/contact.svg" alt="" />
      </div>
      <div
        className={`fixed w-[244px] bg-[#F5F6FA] rounded-xl bottom-[150px] right-10 z-10 ${
          active ? "block" : "hidden"
        }`}
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
      >
        <ul>
          <li>
            <a
              className="flex gap-[15px] items-center py-2.5 px-[15px] border-b border-[#ECEDF1]"
              href="/"
            >
              <img
                className="h-8"
                src="/images/icons/contact-phone.svg"
                alt=""
              />
              Gọi ngay cho chúng tôi
            </a>
          </li>
          <li>
            <a
              className="flex gap-[15px] items-center py-2.5 px-[15px] border-b border-[#ECEDF1] border-t border-white"
              href="/"
            >
              <img
                className="h-8"
                src="/images/icons/contact-zalo.svg"
                alt=""
              />
              Chat với chúng tôi qua Zalo
            </a>
          </li>
          <li>
            <a
              className="flex gap-[15px] items-center py-2.5 px-[15px] border-t border-white"
              href="/"
            >
              <img
                className="h-8"
                src="/images/icons/contact-location.svg"
                alt=""
              />
              Xem địa chỉ cơ sở
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contact;
