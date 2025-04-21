import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/ui/breadcrumb";
import FeaturedNews from "../News/FeaturedNews";
import FeaturedProduct from "../News/FeaturedProduct";
import { useParams } from "react-router-dom";
import { Posts } from "../../types";
import axios from "axios";
import { format } from "date-fns";
import Parser from "html-react-parser";

const NewDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Posts | null>(null);

  const fetchPost = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts/${id}`);
      setPost(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

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
    <section>
      <Breadcrumb />
      <div className="container px-5 lg:px-0 mx-auto mt-[30px]">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/4">
            <FeaturedNews />
            <div className="mt-[30px]">
              <FeaturedProduct />
            </div>
          </div>
          <div className="w-full lg:w-3/4">
            <h2 className="text-2xl font-extrabold uppercase">{post?.title}</h2>
            <span className="font-normal">
              Người đăng: <strong>{post?.author}</strong>
            </span>{" "}
            | <span className="text-gray-500">{post?.updated_at ? format(new Date(post.updated_at), "dd/MM/yyyy") : ""}</span>
            <img className="w-full mt-[30px]" src={`${process.env.REACT_APP_API_URL}/${post?.thumbnail}`} alt="" />
            <div className="">{post?.content && Parser(decodeHtml(post.content))}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewDetail;
