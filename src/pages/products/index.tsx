import React, { useState } from "react";
import Breadcrumb from "../../components/ui/breadcrumb";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

const Product = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedProductLine, setSelectedProductLine] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  return (
    <>
      <Breadcrumb br1="Sản phẩm" url="/products" />
      <div className="container px-5 mx-auto lg:px-0">
        <div className="flex gap-5">
          <ProductFilter
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            selectedProductLine={selectedProductLine}
            setSelectedProductLine={setSelectedProductLine}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />
          <ProductList selectedBrands={selectedBrand} selectedProductLines={selectedProductLine} minPrice={minPrice} maxPrice={maxPrice} />
        </div>
      </div>
    </>
  );
};
export default Product;
