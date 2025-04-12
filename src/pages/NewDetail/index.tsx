import React from "react";
import Breadcrumb from "../../components/ui/breadcrumb";
import FeaturedNews from "../../components/ui/news/featurednews";
import FeaturedProduct from "../News/FeaturedProduct";

const NewDetail = () => {
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
            <h2 className="text-2xl font-extrabold uppercase">
              Review mô hình Robo Quýt Kiếm Sĩ - Những cải tiến đáng kể bạn cần
              biết?
            </h2>
            <span className="font-normal">
              Người đăng: <strong>Hakuda</strong>
            </span>{" "}
            | <span className="font-normal">12/01/2025</span>
            <img
              className="w-full mt-[30px]"
              src="/images/review-mo-hinh-robo-trai-cay-quyt-kiem-si.webp"
              alt=""
            />
            <div className="">
              <p>
                Như vậy là sau một thời gian dài chờ đợi thì cuối cùng mẫu mô
                hình Quýt Kiếm Sĩ đã chính thức ra mắt. Với sự xuất hiện của
                Quýt Ú, bộ ba “Tam Khách Trái Cây” cuối cùng cũng đã tập hợp đầy
                đủ, khiến không ít anh em phải thổn thức với những ký ức tuổi
                thơ khó quên ngày nào.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewDetail;
