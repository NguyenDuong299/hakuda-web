import React from "react";
import Breadcrumb from "../../components/ui/breadcrumb";
import FeaturedNews from "./featurednews";
import NewsList from "./newslist";
import FeaturedProduct from "./featuredproduct";

const NewsPage = () => {
  return (
    <>
      <Breadcrumb />
      <div className="container px-5 lg:px-0 mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-5">
          <div className="w-full lg:w-3/4">
            <NewsList />
          </div>
          <div className="w-full lg:w-1/4">
            <FeaturedNews />
            <div className="mt-[30px]">
              <FeaturedProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsPage;
