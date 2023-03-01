import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-box">
      <div className={`product-status ${product.top_scale ? "" : "d-none"}`}>
        Top sale
      </div>
      <div
        className={`product-status product-new ${product.new ? "" : "d-none"}`}
      >
        Yangilik
      </div>
      <div className="product-favourite">
        <FaRegHeart fill="rgba(77, 94, 246, 0.2)" />
      </div>
      <div className="product-img">
        <div className="product-img-wrapper">
          <img src={product.image} alt="" />
        </div>
      </div>

      <div className="product-about">
        <div className="product-price">
          {new Intl.NumberFormat().format(product.price)} so'm
        </div>
        <div className="product-title">{product.title}</div>
      </div>

      <div className="product-order">{product.orders} ta buyurtma</div>

      <div className="product-buy">
        <button className="btn btn-primary">Sotib olish</button>
        <div className="product-shop">
          <HiOutlineShoppingCart />
        </div>
      </div>
    </Link>
  );
};

export default Product;
