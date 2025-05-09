import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Posts } from "../../types";
import axios from "axios";

const RelatedInformation = () => {
  const [post, setPost] = useState<Posts[]>([]);
  const fetchPost = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts`);
      setPost(res.data.posts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <div className="">
        <h2 className="font-bold text-2xl">ƯU ĐÃI THÀNH VIÊN</h2>
        <div className="mt-5 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <img className="h-10" src="/images/ico_sv1.png" alt="" />
            <span className="font-bold">Dịch vụ đóng gói riêng</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="h-10" src="/images/ico_sv2.png" alt="" />
            <span className="font-bold">Tích điểm đặc quyền</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="h-10" src="/images/ico_sv3.png" alt="" />
            <span className="font-bold">Quà tặng bí mật</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="h-10" src="/images/ico_sv4.png" alt="" />
            <span className=" font-bold">Mã giảm giá đặc quyền</span>
          </div>
        </div>
      </div>
      {post.length > 0 && (
        <div className="mt-5">
          <h2 className="font-bold text-2xl">TIN MỚI NHẤT</h2>
          <div className="mt-5 flex flex-col space-y-2">
            {post.slice(0, 3).map((item, index) => (
              <div key={index} className="flex flex-col gap-2 pb-2.5 border-b border-[#EBEBEB] last:border-none">
                <Link to={`/news/${item.id}`}>
                  <img src={`${process.env.REACT_APP_API_URL}/${item.thumbnail}`} alt={item.title} className="w-full aspect-[16/9]" />
                </Link>
                <Link className="line-clamp-2 text-[15px]" to={`/news/${item.id}`}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default RelatedInformation;
