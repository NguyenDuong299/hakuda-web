import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Posts } from "../../types";
import Parser from "html-react-parser";

const NewsList = () => {
  const [page, setPage] = useState(1);
  const [post, setPost] = useState<Posts[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const totalPages = Math.ceil(totalPosts / 10);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts`, {
          params: {
            page,
          },
        });
        setPost(res.data.posts);
        setTotalPosts(res.data.totalPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, [page]);

  const decodeHtml = (html: string) => {
    let str = html;
    str = str.replace(/&lt;/g, "<");
    str = str.replace(/&gt;/g, ">");
    str = str.replace(/&quot;/g, '"');
    str = str.replace(/&#39;/g, "'");
    str = str.replace(/&amp;/g, "&");
    return str;
  };
  return (
    <>
      <h2 className="text-2xl font-extrabold mb-2.5">TIN TỨC</h2>
      <div className="flex flex-wrap -mx-2.5">
        {post.length > 0 &&
          post.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2.5 mb-[30px]">
              <Link to={`/news/${item.id}`}>
                <img className="w-full aspect-[330/186] object-cover" src={`${process.env.REACT_APP_API_URL}/${item.thumbnail}`} alt={item.title} />
              </Link>
              <div className="flex flex-col gap-0.5 mt-2.5">
                <Link to={`/news/${item.id}`} className="font-bold hover:text-[#a3a3a3]">
                  {item.title}
                </Link>
                <span>{format(new Date(item.updated_at), "dd/MM/yyyy")}</span>
                <div className="line-clamp-2">{Parser(decodeHtml(item.content))}</div>
              </div>
            </div>
          ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-end">
          <div className="flex items-center gap-1">
            <button disabled={page === 1} onClick={() => setPage(page - 1)} className="rounded w-[35px] h-[35px] font-medium border border-[#ebebeb] flex justify-center items-center">
              <img className="h-5" src="/images/icons/left.svg" alt="left" />
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setPage(index + 1)}
                className={`${page === index + 1 ? "bg-[#A3A3A3] text-white border-[#a3a3a3]" : "bg-white text-black"} rounded w-[35px] h-[35px] font-medium border border-[#ebebeb]`}
              >
                {index + 1}
              </button>
            ))}
            <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="rounded w-[35px] h-[35px] font-medium border border-[#ebebeb] flex justify-center items-center">
              <img className="h-5" src="/images/icons/right.svg" alt="right" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default NewsList;
