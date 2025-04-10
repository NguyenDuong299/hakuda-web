import React from "react";
import Banner from "./banner";
import Brand from "./brand";
import News from "./news";
import Product from "./product";
import Service from "./service";
import Suggest from "./suggest";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Brand />
      <Product />
      <News />
      <Suggest />
      <Service />
    </>
  );
};
export default HomePage;
