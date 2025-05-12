import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Posts, Products } from "../../types";
import { format } from "date-fns";
import Parser from "html-react-parser";

const News = () => {
  const [news, setNews] = useState<Posts[]>([]);
  const [products, setProducts] = useState<Products[]>([]);
  const fetchNews = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts`);
      setNews(res.data.posts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchBestSellerProduct = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/filter/bestseller`);
      setProducts(res.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchNews();
    fetchBestSellerProduct();
  }, []);

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
    <section className="mt-[30px]">
      <div className="container px-5 lg:px-0 mx-auto">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/4">
            <div className="bg-black px-2.5 pt-[15px] pb-2.5 rounded-[7px]">
              <h2 className="text-2xl text-white">SẢN PHẨM BÁN CHẠY</h2>
              <div className="flex flex-col gap-2.5 mt-5">
                {products.slice(0, 3).map((item, index) => (
                  <div key={index} className="bg-white p-2.5 flex gap-2.5 rounded-[7px]">
                    {item.images &&
                      item.images
                        .filter((img) => img.isThumbnail)
                        .slice(0, 1)
                        .map((img, index) => <img key={index} src={`${process.env.REACT_APP_API_URL}${img.image_url}`} alt={img.image_url} className="h-[70px] aspect-square" />)}
                    <div className="">
                      <h3 className="text-base uppercase line-clamp-2">{item.name}</h3>
                      <Link className="text-[#007bff]" to={`/products/${item.id}`}>
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4 flex flex-col gap-5">
            <Link className="font-extrabold text-2xl" to="/news">
              BLOG TIN TỨC
            </Link>
            <div className="flex flex-col gap-5 lg:flex-row">
              {news.length > 0 && (
                <div className="w-full lg:w-1/2">
                  <div className="">
                    <Link to={`/news/${news[0].id}`}>
                      <img className="rounded-[7px] aspect-[16/9]" src={`${process.env.REACT_APP_API_URL}/${news[0].thumbnail}`} alt={news[0].title} />
                    </Link>
                    <div>
                      <Link className="mt-2.5 line-clamp-1 font-bold hover:text-[#a3a3a3]" to={`/news/${news[0].id}`}>
                        {news[0].title}
                      </Link>
                      <span className="text-[#838383]">{format(new Date(news[0].created_at), "HH:mm dd/MM/yyyy")}</span>
                      <div className="line-clamp-2 text-[#838383]">{news[0].content && Parser(decodeHtml(news[0].content))}</div>
                    </div>
                  </div>
                </div>
              )}
              {news.length > 0 && (
                <div className="w-full lg:w-1/2 flex flex-col gap-2.5">
                  {news.slice(1, 4).map((item, index) => (
                    <div key={index} className="flex gap-2.5">
                      <Link to={`news/${item.id}`}>
                        <img className="rounded-[7px] h-[90px] w-auto aspect-[16/9]" src={`${process.env.REACT_APP_API_URL}/${item.thumbnail}`} alt={item.title} />
                      </Link>
                      <div className="flex-1">
                        <Link className="mt-2.5 lg:mt-0 line-clamp-1 font-bold hover:text-[#a3a3a3]" to={`news/${item.id}`}>
                          {item.title}
                        </Link>
                        <span className="text-[#838383]">{format(new Date(item.created_at), "HH:mm dd/MM/yyyy")}</span>
                        <div className="line-clamp-2 text-[#838383]">{item?.content && Parser(decodeHtml(item.content))}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default News;
