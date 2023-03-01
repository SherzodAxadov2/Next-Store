import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductFeature from "../../components/product-feature/ProductFeature";
import ProductTable from "../../components/product-table/ProductTable";
import { products } from "../../constants/products";
import "./inner-product.css";
import ProductShowOne from "./ProductShowOne";

const InnerProduct = () => {
  const params = useParams().id;
  return (
    <Container>
      <div className="prod">
        <div className="prod-from">
          Nextstore / Kompyuterlar va notebooklar / Laptop Notebooklar /{" "}
          <span>{products[params - 1].title}</span>
        </div>
      </div>
      <div className="prod-show">
        <ProductShowOne product={products[params - 1]} />
      </div>

      <div className="prod-box">
        <ProductTable />
      </div>

      <div className="prod-box">
        <ProductFeature />
      </div>
    </Container>
  );
};

export default InnerProduct;
