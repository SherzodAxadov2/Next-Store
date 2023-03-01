import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CatalogLists } from "../../constants/CatalogLists";
import { Brands, Samsung } from "../../constants/Phones";
import "./catalog.css";

const Catalog = ({ openCatalog, setOpenCatalog }) => {
  const [catalogs, setCatalogs] = useState(CatalogLists);

  const setActive = (id) => {
    setCatalogs(
      catalogs.map((item) =>
        item.id === id
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    );
  };

  return (
    <div className="catalog-menu">
      <Container>
        <div className="catalog-aside">
          <ul>
            {catalogs.map((item) => (
              <li
                key={item.id}
                className={`${item.isActive ? "active" : ""}`}
                onClick={() => setActive(item.id)}
              >
                <a href="#">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="catalog-main">
          <div>
            <ul className="first">
              <h6 className="p-text">Brendlar</h6>
              {Brands.map((brand) => (
                <li key={brand.id}>
                  <a href={`#`} onClick={() => setOpenCatalog(!openCatalog)}>
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <ul>
              <h6 className="p-text">Samsung brendi</h6>
              {Samsung.map((brand) => (
                <li key={brand.id}>
                  <a href={`#`} onClick={() => setOpenCatalog(!openCatalog)}>
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              <h6 className="p-text mt-30">Huawei</h6>
              {Samsung.map((brand) => (
                <li key={brand.id}>
                  <a href={`#`} onClick={() => setOpenCatalog(!openCatalog)}>
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              <h6 className="p-text mt-30">Huawei mobile</h6>
              {Samsung.map((brand) => (
                <li key={brand.id}>
                  <a href={`#`} onClick={() => setOpenCatalog(!openCatalog)}>
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <ul>
              <h6 className="p-text">Redmi & Xiaomi</h6>
              {Samsung.map((brand) => (
                <li key={brand.id}>
                  <a href={`#`} onClick={() => setOpenCatalog(!openCatalog)}>
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              <h6 className="p-text mt-30">Eng ommabop </h6>
              {Samsung.map((brand) => (
                <li key={brand.id}>
                  <a href={`#`} onClick={() => setOpenCatalog(!openCatalog)}>
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              <h6 className="p-text mt-30">Huawei mobile</h6>
              {Samsung.map((brand) => (
                <li key={brand.id}>
                  <a href={`#`} onClick={() => setOpenCatalog(!openCatalog)}>
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <ul>
              <h6 className="p-text">Apple brendi</h6>
              {Samsung.map((brand) => (
                <li key={brand.id}>
                  <a href={`#`} onClick={() => setOpenCatalog(!openCatalog)}>
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              <h6 className="p-text mt-30">Eng arzonlari </h6>
              {Samsung.map((brand) => (
                <li key={brand.id}>
                  <a href={`#`} onClick={() => setOpenCatalog(!openCatalog)}>
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul>
              <h6 className="p-text mt-30">Huawei mobile</h6>
              {Samsung.map((brand) => (
                <li key={brand.id}>
                  <a href={`#`} onClick={() => setOpenCatalog(!openCatalog)}>
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Catalog;
