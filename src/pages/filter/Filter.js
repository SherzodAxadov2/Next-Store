import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Product from "../../components/product/Product";
import { comps } from "../../constants/notebooks";
import { products } from "../../constants/products";
import "./filter.css";

const Filter = () => {
  const allproducts = products;
  const [allComps, setAllComps] = useState(comps);

  const setSelected = (id) => {
    setAllComps(
      allComps.map((comp) =>
        comp.id === id
          ? { ...comp, isActive: true }
          : { ...comp, isActive: false }
      )
    );
  };
  return (
    <Container>
      <div className="filter">
        <Banner />
        <div className="filter-main">
          <div className="filter-left">
            <div className="filter-text text-center">Notebooklar</div>
            <ul>
              {allComps.map((comp) => (
                <li key={comp.id}>
                  <Link
                    to={`/product/${comp.id}`}
                    className={`filter-text ${comp.isActive ? "selected" : ""}`}
                    onClick={() => setSelected(comp.id)}
                  >
                    {comp.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" product-best">
            {allproducts.map((item, index) => {
              return <Product key={index} product={item} />;
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Filter;
