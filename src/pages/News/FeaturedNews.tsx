import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Posts } from "../../types";

const FeaturedNews = () => {
  const [postHot, setPostHot] = useState<Posts[]>([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts/filter/hot`);
      setPostHot(res.data.posts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-extrabold mb-2.5">TIN NỔI BẬT</h2>
      <div className="flex flex-col gap-2.5">
        {postHot.slice(0, 4).map((item, index) => (
          <div key={index} className="flex gap-2.5 py-2.5 border-b border-[#ebebeb] last:border-none">
            <Link to={`/news/${item.id}`} className="w-[90px]">
              <img className="aspect-[9/5] rounded-[5px] w-full" src={`${process.env.REACT_APP_API_URL}/${item.thumbnail}`} alt={item.title} />
            </Link>
            <h2 className="flex-1">
              <Link className="line-clamp-2 hover:text-[#A3A3A3]" to={`/news/${item.id}`}>
                {item.title}
              </Link>
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};
export default FeaturedNews;
