import React from "react";
import { Link } from "react-router-dom";

interface Props {
  br1: string;
  url: string;
  br2?: string;
}

const Breadcrumb = ({ br1, url, br2 }: Props) => {
  return (
    <div className="py-5 px-5 lg:px-0 container mx-auto">
      <ul className="flex gap-1 text-base">
        <li>
          <Link to="/" className=" hover:underline">
            Trang chủ
          </Link>
        </li>
        <li className="before:content-['/'] before:px-[5px]">
          <Link to={url} className="hover:underline">
            {br1}
          </Link>
        </li>
        {br2 && <li className="before:content-['/'] before:px-[5px] text-gray-500">{br2}</li>}
      </ul>
    </div>
  );
};

export default Breadcrumb;
