import React from "react";
import Breadcrumb from "../../components/ui/breadcrumb";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

const Product = () => {
  return (
    <>
      <Breadcrumb br1="Sản phẩm" url="/products" />
      <div className="container px-5 mx-auto lg:px-0">
        <div className="flex gap-5">
          <ProductFilter />
          <ProductList />
        </div>
      </div>
    </>
  );
};
export default Product;
