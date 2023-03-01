import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../constants/products";
import Product from "../product/Product";
import "../product/product.css";

const ProductPopular = ({ count }) => {
  const allproducts = products.slice(0, count);

  return (
    <div className="product-best-wrapper">
      <div className="product-main">Eng ommabop</div>
      <div className=" product-best">
        {allproducts
          .filter((product) => product.top_scale === false)
          .map((item, index) => {
            return <Product key={index} product={item} />;
          })}
      </div>
      <button className="btn more">
        <Link to={"/filter"}>Ko’proq ko’rish</Link>
      </button>
    </div>
  );
};

export default ProductPopular;
