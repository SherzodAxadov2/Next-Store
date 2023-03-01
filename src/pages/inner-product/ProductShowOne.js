import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  MdOutlineDeliveryDining,
  MdPublishedWithChanges,
} from "react-icons/md";

const ProductShowOne = ({ product }) => {
  const [allProductImg, setAllProductImg] = useState(product.images);
  const [color, setColor] = useState(product.colors);
  const [productMonth, setProductMonth] = useState(product.numberOfMonth);

  const setSelected = (id) => {
    setAllProductImg(
      allProductImg.map((item) =>
        item.id === id
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  };
  const setBg = (id) => {
    setColor(
      color.map((item) =>
        item.id === id
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  };
  const setActive = (id) => {
    setProductMonth(
      productMonth.map((item) =>
        item.id === id
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    );
  };
  const toBasket = () => {
    toast.success("Savatga qo'shildi. Xaridingiz uchun tashakkur");
  };
  const buyProduct = () => {
    toast.success("Modal chaqiriladi");
  };
  return (
    <div className="prod-one">
      <Row>
        <Col>
          <div className="prod-img">
            <div className="product-favourite">
              <FaRegHeart fill="rgba(77, 94, 246, 0.2)" />
            </div>
            <div className="product-favourite product-share">
              <BsShareFill fill="rgba(77, 94, 246, 0.2)" />
            </div>
            <img
              src={allProductImg.find((item) => item.selected === true).img}
              alt=""
            />
          </div>

          <div className="prod-img-select">
            {allProductImg.map((item, index) => (
              <div
                className={`prod-img-box ${item.selected ? "selected" : ""}`}
                key={index}
                onClick={() => setSelected(item.id)}
              >
                <img src={item.img} alt="img" />
              </div>
            ))}
          </div>
        </Col>

        <Col>
          <div className="prod-title">{product.title}</div>
          <div className="d-flex">
            <div className="prod-colors-title">Rangi</div>
            <div className="prod-color-title">
              {color.find((item) => item.selected === true).text}
            </div>
          </div>
          <div className="prod-colors">
            {color.map((item) => (
              <div
                className={`prod-color ${item.selected ? "selected" : ""}`}
                style={{ background: `${item.color}` }}
                key={item.id}
                onClick={() => setBg(item.id)}
              ></div>
            ))}
          </div>
          <div className="prod-price">
            {new Intl.NumberFormat().format(product.price)} so'm / dona
          </div>
          <div className="prod-price-reduce">
            {new Intl.NumberFormat().format(
              parseInt(
                product.price / productMonth.find((c) => c.isActive).count
              )
            )}{" "}
            so'm x {productMonth.find((c) => c.isActive).count} oy
          </div>
          <div className="prod-buy">
            <div className="prod-month-wrapper">
              {productMonth.map((month) => (
                <div
                  className={`prod-month ${month.isActive ? "selected" : ""}`}
                  key={month.id}
                  onClick={() => setActive(month.id)}
                >
                  {`${month.count} ${month.isActive ? " oyda" : ""}`}
                </div>
              ))}
            </div>

            <button
              className="btn btn-outline-primary d-flex align-items-center"
              onClick={toBasket}
            >
              <BiPlus />
              Savatga
              <ToastContainer />
            </button>
          </div>

          <div className="d-flex align-items-center justify-content-between gap-4">
            <button className="btn btn-primary prod-btn" onClick={buyProduct}>
              Sotib olish
            </button>
            <button className="btn btn-primary prod-btn">
              <Link to={"/filter"}>Boshqasi</Link>
            </button>
          </div>

          <div className="prod-des">
            <div>
              <BsShop />
              <p>
                Do’kon <span>MacBro</span>
              </p>
            </div>
            <div>
              <MdOutlineDeliveryDining />
              <p>
                Yetkazib berish <span>Bor</span>{" "}
                <span className="price">30 000 so’m</span>
              </p>
            </div>
            <div>
              <MdPublishedWithChanges />
              <p>
                Maxsulotni qaytarish va almashtirish <span>15 kun </span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductShowOne;
