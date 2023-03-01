import React from "react";
import Banner from "../../components/banner/Banner";
import CategoryHome from "../../components/categories-home/CategoryHome";
// import MiniBanner from "../../components/mini-banner/MiniBanner";
import ProductBestSeller from "../../components/product-best-seller/ProductBestSeller";
import ProductPopular from "../../components/product-popular/ProductPopular";
// import {
//   miniBannersBottom,
//   miniBannersTop,
// } from "../../constants/mini-banners";
// import Partners from "../partners/Partners";
import "./home.css";

const Home = () => {
  // const links1 = [...miniBannersTop];
  // const links2 = [...miniBannersBottom];

  return (
    <div className="home" id="home">
      <div className="container">
        <Banner />
        <CategoryHome />
        <ProductBestSeller count={10} />
        <ProductPopular count={15} />
      </div>
    </div>
  );
};

export default Home;
