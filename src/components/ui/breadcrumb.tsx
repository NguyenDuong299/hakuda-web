import React from "react";

const Breadcrumb = () => {
  return (
    <div className="py-5 px-5 lg:px-0 container mx-auto">
      <ul className="flex gap-1">
        <li>
          <a className="text-base" href="#">
            Trang chủ
          </a>
        </li>
        <span>&nbsp;/&nbsp;</span>
        <li>
          <a className="text-base" href="#">
            Tin tức
          </a>
        </li>
        <span>&nbsp;/&nbsp;</span>
        <li>
          <a className="text-base" href="#">
            Trang chủ
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Breadcrumb;
