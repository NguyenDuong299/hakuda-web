import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Posts } from "../../../types";

const NewsList = () => {
  const [post, setPost] = useState<Posts[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <h2 className="text-2xl font-extrabold mb-2.5">TIN TỨC</h2>
      <div className="flex flex-wrap -mx-2.5">
        {post.length > 0 &&
          post.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2.5 mb-[30px]">
              <Link to="/">
                <img src={`http://localhost:5173/${item.thumbnail}`} alt={item.title} />
              </Link>
              <div className="flex flex-col gap-0.5 mt-2.5">
                <Link to="/" className="font-bold hover:text-[#a3a3a3]">
                  {item.title}
                </Link>
                <span>05/03/2025</span>
                <p className="line-clamp-2">{item.content}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default NewsList;
